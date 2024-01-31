import mongoose, { Schema } from 'mongoose';

const PaymentDetails = new Schema({
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        updateTime: { type: String },
        emailAddress: { type: String },
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date,
        default: Date.now
    }
});

const Order = new Schema({
    shippingCompany: {
        type: String,
        required: true
    },
    boxId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Box'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    paymentDetails: PaymentDetails
});

const OrderSchema = mongoose.model('Order', Order);

export default OrderSchema;
