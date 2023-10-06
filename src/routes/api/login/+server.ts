import {json} from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import {ADMIN_USERNAME, PASSWORD, JWT_SECRET} from '$env/static/private';

export async function POST({request, cookies}) {
	try {
		const {username, password} = await request.json();
		if (username !== ADMIN_USERNAME || password !== PASSWORD) {
			return json({message: 'Invalid credentials'}, {status: 400});
		}

		const token = jwt.sign({name: ADMIN_USERNAME}, JWT_SECRET, {
			expiresIn: 86400
		});

		cookies.set('jwt', token);

		return json({message: 'logged in'}, {status: 200});
	} catch (error) {
		console.log(error);
		return json({message: 'unexpected error'}, {status: 500});
	}
}
