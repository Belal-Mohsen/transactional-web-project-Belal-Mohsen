import express from 'express';
import * as dotenv from 'dotenv';


import User from '../models/user.js';
import {
    validateEmail,
    validatePassword,
    validateName

} from '../utils/validation.js'

dotenv.config();

const router = express.Router();

//login
router.route('/login').get(async (req, res) => {
    try {
        console.log(req.query)
        const { email } = req.query;
        const user = await User.findOne({ email });
        if (user) {
            res.status(200).json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to retrieve user, please try again' });
    }
});


// update a user's info
router.route('/updateUser/:email').put(async (req, res) => {
    try {
        const { fName, lName, password, address, newsLetter, subscription } = req.body;
        const email = req.params.email;
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                fName,
                lName,
                password,
                email,
                address,
                newsLetter,
                subscription

            },
            { new: true }
        );

        if (updatedUser) {
            res.status(200).json({ success: true, data: updatedUser });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to update the user, please try again' });
    }
});

// Register
router.route('/register').post(async (req, res) => {

    try {
        const { fName, lName, password, email, address, newsLetter, subscription } = req.body;
        if (!validateName(fName)) {
            return res.status(400).json({ success: false, message: 'First name is required' });
        }
        if (!validateName(lName)) {
            return res.status(400).json({ success: false, message: 'Last name is required' });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        if (!validatePassword(password)) {
            return res.status(400).json({ success: false, message: 'Password is required and must be at least 6 characters long' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        const newUser = await User.create({
            fName,
            lName,
            password,
            email,
            address,
            newsLetter,
            subscription
        });

        res.status(200).json({ success: true, data: newUser });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'Unable to create a user, please try again' });
    }
});

export default router;