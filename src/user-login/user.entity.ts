import * as mongoose from 'mongoose';

export const UserLoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model('User', UserLoginSchema);