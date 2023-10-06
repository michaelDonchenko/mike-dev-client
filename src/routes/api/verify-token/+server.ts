import {json} from '@sveltejs/kit';

export async function GET({request, cookies}) {
	try {
		console.log(cookies.getAll());
		return json({});
	} catch (error) {
		console.log(error);
		return json({message: 'unexpected error'}, {status: 500});
	}
}
