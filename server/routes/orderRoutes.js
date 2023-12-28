import express from 'express';
import Order from '../models/order.js'; 

const router = express.Router();

// POST: Create a new order
router.route('/order').post(async (req, res) => {
    // Extract data from req.body and validate
    const { shippingCompany, boxId, userId, paymentId, address, date } = req.body;
    // Individual field validations
    if (!shippingCompany) {
        return res.status(400).json({ success: false, message: 'Shipping company is required' });
    }
    if (!boxId) {
        return res.status(400).json({ success: false, message: 'Box ID is required' });
    }
    if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    if (!paymentId) {
        return res.status(400).json({ success: false, message: 'Payment ID is required' });
    }
    if (!address) {
        return res.status(400).json({ success: false, message: 'Address is required' });
    }

    try {
        const newOrder = await Order.create({ 
            shippingCompany, 
            boxId, 
            userId, 
            paymentId, 
            address, 
            date 
        });

        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Unable to create an order, please try again' });
    }
});

// PUT: Update a specific order
router.put('/updateOrder/:orderId', async (req, res) => {
    try {
        const { shippingCompany, boxId, userId, paymentId, address, date } = req.body;
        const orderId = req.params.orderId;
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId }, 
            { 
                shippingCompany, 
                boxId, 
                userId, 
                paymentId, 
                address, 
                date 
            },
            { new: true }
        );

        if (updatedOrder) {
            res.status(200).json({ success: true, data: updatedOrder });
        } else {
            res.status(404).json({ success: false, message: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to update the order, please try again' });
    }
});


export default router;