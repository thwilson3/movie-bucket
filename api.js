import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API Class.
 *
 *
 */

export default class MovieBucketAPI {

	//TODO: remove local storage from api access
	static token = localStorage.getItem('userToken');

	static async request(endpoint, data = {}, method = 'get') {
		console.debug('API Call:', endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${MovieBucketAPI.token}` };
		const params = method === 'get' ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [message];
		}
  }
}