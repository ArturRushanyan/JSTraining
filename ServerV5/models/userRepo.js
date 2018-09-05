import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    type: String,
});

module.exports = mongoose.model('User', UserSchema);