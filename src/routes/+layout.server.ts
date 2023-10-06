import mongoose from 'mongoose';
import type { LayoutServerLoad } from './$types';
import { Blog } from '$lib/database/models/blog';
import { MONGO_URL } from '$env/static/private';

export const load: LayoutServerLoad = async () => {
	try {
		console.log('connecting to mongodb...');
		await mongoose.connect(MONGO_URL);
		const res = await Blog.find();
		console.log(res);

		mongoose.disconnect();

		return {};
	} catch (error) {
		console.log(error);
	}
};
