import mongoose, { Schema } from 'mongoose';

const Box = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    }
});

const BoxSchema = mongoose.model('Box', Box);

export default BoxSchema;

