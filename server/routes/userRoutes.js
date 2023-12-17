import express from 'express';
import * as dotenv from 'dotenv';


import User from '../mongodb/models/user.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        res.status(200).json({ success: true, data: { "user": "user1" } });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
});



router.route('/').post(async (req, res) => {
    try {
        const { userName, fName, lName, password, email, address } = req.body;

        const newUser = await User.create({
            userName,
            fName,
            lName,
            password,
            email,
            address
        });

        res.status(200).json({ success: true, data: newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a user, please try again' });
    }
});

export default router;