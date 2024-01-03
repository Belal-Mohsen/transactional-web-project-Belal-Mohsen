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
router.route('/login').post(async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!validateEmail(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }
        if (!password) {
            return res.status(400).json({ success: false, message: 'Password is required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }


        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        res.status(200).json({ success: true, message: 'Login successful', data: user });
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
        const { uid, fName, lName, email, address, newsLetter, subscription, fullName } = req.body;
        if (!uid) {
            return res.status(400).json({ success: false, message: 'Firebase UID is required' });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        const existingUser = await User.findOne({ uid });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        let newUser = {
            uid,
            fName,
            lName,
            email,
            address,
            newsLetter,
            subscription,
        };

        if (fullName) {
            const nameParts = fullName.split(' ');
            newUser.fName = nameParts[0];
            if (nameParts.length > 1) {
                newUser.lName = nameParts.slice(1).join(' ');
            }
        }

        const createdUser = await User.create(newUser);

        res.status(200).json({ success: true, data: createdUser });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'Unable to create a user, please try again' });
    }
});



router.route('/user/profile/:uid').get(async (req, res) => {
    const uid = req.params.uid;
    try {
        const user = await User.findOne({ uid: uid });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});


export default router;