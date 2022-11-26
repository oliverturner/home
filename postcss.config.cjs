async function getConfig() {
	const { default: openProps } = await import("open-props");
	const { customMedia, customProperties } = await import("./src/theme.js");

	console.log({ customMedia, customProperties });

	return {
		plugins: {
			"postcss-jit-props": { ...openProps, ...customProperties },
			"postcss-custom-media": { importFrom: { customMedia } },
			"postcss-nesting": {},
		},
	};
}

module.exports = getConfig();
