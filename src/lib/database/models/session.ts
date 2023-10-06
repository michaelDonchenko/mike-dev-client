import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	jwt: String
});
export const Session = mongoose.model('Session', schema);
