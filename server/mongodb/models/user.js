import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema({
    style: { type: String },
    area: { type: String },
    holidays: { type: [{ type: String }] },
    color: { type: String },
    images: { type: [{ type: String }] },
    date: { type: Date, default: Date.now }
});

const User = new Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    address: { type: String },
    newLetter: { type: Boolean, default: false },
    subscription: subscriptionSchema
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;


