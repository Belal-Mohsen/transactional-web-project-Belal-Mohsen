import express from 'express';
import Box from '../models/box.js';

const router = express.Router();

// POST: Create a new box
router.route('/addbox').post(async (req, res) => {
    // Extract data from req.body and validate
    const { name, price } = req.body;
    // Individual field validations
    if (!name) {
        return res.status(400).json({ success: false, message: 'Box name is required' });
    }
    if (!price) {
        return res.status(400).json({ success: false, message: 'Box price is required' });
    }

    try {
        const newBox = await Box.create({
            name,
            price
        });

        res.status(201).json({ success: true, data: newBox });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Unable to create a box, please try again' });
    }
});

// PUT: Update a specific box
router.route('/updatebox/:_id').put(async (req, res) => {
    try {
        const { name, price } = req.body;
        const _id = req.params._id;  // Use _id
        const updatedBox = await Box.findByIdAndUpdate(
            { _id },  
            {
                name,
                price
            },
            { new: true }
        );

        if (updatedBox) {
            res.status(200).json({ success: true, data: updatedBox });
        } else {
            res.status(404).json({ success: false, message: 'Box not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to update the box, please try again' });
    }
});

// DELETE: Delete a specific box
router.route('/deletebox/:_id').delete(async (req, res) => {
    try {
        const _id = req.params._id;  // Use _id
        const deletedBox = await Box.findByIdAndDelete(_id);  // Use _id

        if (deletedBox) {
            res.status(200).json({ success: true, message: 'Box deleted successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Box not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to delete the box, please try again' });
    }
});

router.route('/allboxes').get(async (req, res) => {
    try {
        const boxes = await Box.find({}).select('_id name price');
        res.status(200).json({ success: true, data: boxes });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to retrieve boxes, please try again' });
    }
});


export default router;