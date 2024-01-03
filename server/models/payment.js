import mongoose, { Schema } from 'mongoose';

const Payment = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    order: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    paymentMEthod: {
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
},
    {
        timestamps: ture
    });

const PaymentSchema = mongoose.model('Payment', Payment);

export default PaymentSchema;


