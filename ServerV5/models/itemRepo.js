import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
    type: String,
    title: String,
    price: Number
});

module.exports = mongoose.model('Item', ItemSchema);