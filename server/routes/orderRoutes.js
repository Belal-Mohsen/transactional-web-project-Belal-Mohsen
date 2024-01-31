import express from 'express';
import Order from '../models/order.js';

const router = express.Router();

router.post('/addorder', async (req, res) => {
    const { shippingCompany, boxId, userId, paymentDetails, address, date } = req.body;

    if (!shippingCompany) {
        return res.status(400).json({ success: false, message: 'Shipping company is required' });
    }
    if (!boxId) {
        return res.status(400).json({ success: false, message: 'Box ID is required' });
    }
    if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    if (!paymentDetails) {
        return res.status(400).json({ success: false, message: 'Payment details are required' });
    }
    if (!address) {
        return res.status(400).json({ success: false, message: 'Address is required' });
    }

    try {
        const newOrder = await Order.create({
            shippingCompany,
            boxId,
            userId,
            paymentDetails,
            address,
            date: date || Date.now()
        });

        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Unable to create an order, please try again' });
    }
});


router.put('/updateorder/:orderId', async (req, res) => {
    const { shippingCompany, boxId, userId, paymentDetails, address, date } = req.body;
    const orderId = req.params.orderId;

    try {
        const updatedOrder = await Order.findOneAndUpdate(
            { _id: orderId },
            {
                shippingCompany,
                boxId,
                userId,
                paymentDetails,
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
        console.log(err);
        res.status(500).json({ success: false, message: 'Unable to update the order, please try again' });
    }
});

export default router;
