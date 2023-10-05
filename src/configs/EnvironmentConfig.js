const dev = {
  API_ENDPOINT_URL: 'http://127.0.0.1:8000'
};

const prod = {
  API_ENDPOINT_URL: 'https://pullbytes.herokuapp.com'
};

const getEnv = () => {
	switch (process.env.NODE_ENV) {
		case 'development':
			return dev
		case 'production':
			return prod
		default:
			break;
	}
}

export const env = getEnv()
