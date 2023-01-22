/**
 * Nord palette is documented here:
 * https://www.nordtheme.com/docs/colors-and-palettes
 */

const nord = {
	aurora: {
		mid: {
			red: "hsl(354, 42%, 56%)",
			orange: "hsl(14, 51%, 63%)",
			yellow: "hsl(40, 71%, 73%)",
			green: "hsl(92, 28%, 65%)",
			purple: "hsl(311, 20%, 63%)",
		},
		dark: {
			red: "hsl(354, 42%, 8.97%)",
			orange: "hsl(14, 51%, 20.9%)",
			yellow: "hsl(40, 71%, 27.84%)",
			green: "hsl(92, 28%, 23.77%)",
			purple: "hsl(311, 20%, 21.32%)",
		},
	},
};

module.exports = {
	color: {
		// Nord "Polar Night"
		"dark-0": { value: "#242932" },
		"dark-1": { value: "#2e3440" },
		"dark-2": { value: "#3b4252" },
		"dark-3": { value: "#434c5e" },
		"dark-4": { value: "hsl(220, 16%, 48.27%)" },

		// Nord "Snow Storm"
		"light-0": { value: "hsl(218, 27%, 49.24%)" },
		"light-1": { value: "hsl(218, 27%, 49.24%)" },
		"light-2": { value: "hsl(218, 27%, 88%)" },
		"light-3": { value: "hsl(218, 27%, 92%)" },
		"light-4": { value: "hsl(218, 27%, 94%)" },

		// greys
		"grey-1": { value: "hsl(220, 6%, 46.7%)" },
		"grey-2": { value: "hsl(220, 6%, 60%)" },
		"grey-3": { value: "hsl(220, 6%, 70%)" },

		transparent: {
			dark: { value: "#000c" },
			light: { value: "#fffc" },
		},

		site: {
			bg: { value: "{color.dark-0.value}" },
			text: { value: "{color.light-0.value}" },
		},

		content: {
			bg: { value: "{color.light-0.value}" },
			text: { value: "{color.dark-1.value}" },
		},

		bg: {
			about: { value: `${nord.aurora.mid.red}` },
			projects: { value: `${nord.aurora.mid.orange}` },
			articles: { value: `${nord.aurora.mid.yellow}` },
			weeknotes: { value: `${nord.aurora.mid.green}` },
			inuse: { value: `${nord.aurora.mid.purple}` },
		},

		text: {
			about: { value: `${nord.aurora.dark.red}` },
			projects: { value: `${nord.aurora.dark.orange}` },
			articles: { value: `${nord.aurora.dark.yellow}` },
			weeknotes: { value: `${nord.aurora.dark.green}` },
			inuse: { value: `${nord.aurora.dark.purple}` },
		},
	},
};
