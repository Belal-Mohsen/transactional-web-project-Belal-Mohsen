import mongoose, { Schema } from 'mongoose';
// import bcrypt from 'bcryptjs';

const subscriptionSchema = new Schema({
    style: {
        type: String,
        default: "Unknown",
        required: true
    },
    area: {
        type: [{ type: String }],
        default: ["Unknown"],
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
    uid: {
        type: String,
        required: true,
        unique: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
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

// User.pre('save', async function (next) {
//     if (this.isModified('password') || this.isNew) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
// });

// User.methods.comparePassword = async function (candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

const UserSchema = mongoose.model('User', User);

export default UserSchema;


