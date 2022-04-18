const URL = "http://jsonplaceholder.typicode.com/";

export const get = async (path: string) => {
	try {
		const response: any = await fetch(URL + path);
		const responseJSON: any = await response.json();
		return responseJSON
	} catch (e) {
		console.log("error", e);
	}
};