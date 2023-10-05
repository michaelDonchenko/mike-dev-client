import mongoose from 'mongoose';
import type { LayoutServerLoad } from './$types';
import { Blog } from '$lib/database/models/blog';

export const load: LayoutServerLoad = async () => {
	try {
		console.log('connecting to mongodb...');
		await mongoose.connect('mongodb://admin:password@127.0.0.1:27017', { authSource: 'admin' });
		console.log('Connected successfully!');
		await Blog.create({ title: 'Blog title', body: 'Body' });
		const res = await Blog.find();
		console.log(res);

		return {};
	} catch (error) {
		console.log(error);
	}
};
