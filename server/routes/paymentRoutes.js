import express from 'express';
import Payment from '../models/payment.js';

const router = express.Router();

router.get('/payments/:id', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).send();
        }
        res.send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/payment', async (req, res) => {
    const { user, order, paymentMethod, paymentResult, taxPrice, shippingPrice, totalPrice, isPaid } = req.body;

    if (!user || !order || !paymentMethod) {
        return res.status(400).json({ success: false, message: 'Missing required payment information' });
    }

    try {
        const newPayment = await Payment.create({
            user,
            order,
            paymentMethod,
            paymentResult,
            taxPrice,
            shippingPrice,
            totalPrice,
            isPaid
        });

        res.status(201).json({ success: true, data: newPayment });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Unable to create payment, please try again' });
    }
});

router.put('/updatePayment/:paymentId', async (req, res) => {
    try {
        const { paymentMethod, paymentResult, taxPrice, shippingPrice, totalPrice, isPaid, paidAt } = req.body;
        const paymentId = req.params.paymentId;
        const updatedPayment = await Payment.findOneAndUpdate(
            { _id: paymentId },
            {
                paymentMethod,
                paymentResult,
                taxPrice,
                shippingPrice,
                totalPrice,
                isPaid,
                paidAt
            },
            { new: true }
        );

        if (updatedPayment) {
            res.status(200).json({ success: true, data: updatedPayment });
        } else {
            res.status(404).json({ success: false, message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to update the payment, please try again' });
    }
});

export default router;
