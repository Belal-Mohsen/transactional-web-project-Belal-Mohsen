import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import boxRoutes from './routes/boxRoutes.js';
import stripeRoutes from './routes/stripeRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/box', boxRoutes);
app.use('/api/checkout-session', stripeRoutes)

// For testing
app.get('/api', async (req, res) => {
    res.status(200).json({
        message: 'Hello from Our server',
    });
});

app.get('/test', async (req, res) => {
    res.status(200).json({
        message: 'test end-point from the server!',
    });
});

/// TODO : move this get api to another file.
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/images', (req, res) => {
    // Replace 'path_to_image.jpg' with the path to your image file
    let contentDir = path.join(__dirname, 'content/Subscribe_img/');
    // Retrieving image name from get query
    res.sendFile(req.query.name+'.png', { root: contentDir });
    });


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();

