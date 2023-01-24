async function getConfig() {
	return {
		plugins: {
			"@csstools/postcss-design-tokens": { valueFunctionName: "dt" },
			"postcss-nesting": {},
		},
	};
}

module.exports = getConfig();
