async function getConfig() {
	const { default: size } = await import("./tokens/size.cjs");

	const customMedia = {};
	for (const [k, v] of Object.entries(size.viewport)) {
		const n = parseInt(v.value, 10);
		customMedia[`--mq-${k}`] = `(min-width: ${n}ch)`;
		customMedia[`--mq-max-${k}`] = `(max-width: ${n}ch)`;
	}

	console.log({ customMedia });

	return {
		plugins: {
			"@csstools/postcss-design-tokens": { valueFunctionName: "dt" },
			"postcss-custom-media": { importFrom: { customMedia } },
			"postcss-nesting": {},
		},
	};
}

module.exports = getConfig();
