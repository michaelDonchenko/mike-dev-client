import mongoose from 'mongoose';

const schema = new mongoose.Schema(
	{
		title: String,
		body: String,
		image: String
	},
	{ timestamps: true }
);
export const Blog = mongoose.model('Blog', schema);
