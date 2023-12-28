import mongoose, { Schema } from 'mongoose';

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
    paymentId: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Payment' 
    },
    address: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

const OrderSchema = mongoose.model('Order', Order);

export default OrderSchema;