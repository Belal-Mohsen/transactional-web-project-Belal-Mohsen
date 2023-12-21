import mongoose from 'mongoose';

const User = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true }
    // subscription will be added later
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;


