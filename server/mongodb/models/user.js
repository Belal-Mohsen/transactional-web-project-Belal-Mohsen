import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema({
    style: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    holidays: {
        type: [{ type: String }],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [{ type: String }],
        required: true
    },
    date: {
        type: Date, default: Date.now,
        required: true
    }
},
    {
        timestamps: true
    });

const User = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String
    },
    newsLetter: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false

    },
    subscription: subscriptionSchema
},
    {
        timestamps: ture
    });

const UserSchema = mongoose.model('User', User);

export default UserSchema;


