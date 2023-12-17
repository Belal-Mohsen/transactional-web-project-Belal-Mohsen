import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connectdb.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from Our server',
    });
});


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(process.env.PORT, () => console.log('Server started on port 5000'));
    } catch (error) {
        console.log(error);
    }
};

startServer();

