const path = require('path');

module.exports = {
	webpack: (config) => {
		config.plugins = config.plugins || [];
		config.resolve = {
			...config.resolve,
			alias: {
				...config.resolve.alias,
				src: path.resolve(__dirname, './src'),
			},
		};

		return config;
	},
};
