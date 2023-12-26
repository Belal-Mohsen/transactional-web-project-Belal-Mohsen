import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema({
    style: {
        type: String,
        default: "Unknown",
        required: true
    },
    area: {
        type: String,
        default: "Unknown",
        required: true
    },
    holidays: {
        type: [{ type: String }],
        default: ["Unknown"],
        required: true
    },
    color: {
        type: String,
        default: "Unknown",
        required: true
    },
    images: {
        type: [{ type: String }],
        default: ["Unknown"],
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
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
        timestamps: true
    });

const UserSchema = mongoose.model('User', User);

export default UserSchema;


