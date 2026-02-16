/**
 * Nord palette is documented here:
 * https://www.nordtheme.com/docs/colors-and-palettes
 */

const colours = {
	// Nord "Polar Night"
	"dark-0": { value: "#242932" },
	"dark-1": { value: "#2e3440" },
	"dark-2": { value: "#3b4252" },
	"dark-3": { value: "#434c5e" },
	"dark-4": { value: "hsl(220, 16%, 48.27%)" },

	// Nord "Snow Storm"
	"light-02": { value: "hsl(218, 27%, 49.24%)" },
	"light-01": { value: "hsl(218, 27%, 49.24%)" },
	"light-0": { value: "hsl(218, 27%, 88%)" },
	"light-1": { value: "hsl(218, 27%, 92%)" },
	"light-2": { value: "hsl(218, 27%, 94%)" },

	// greys
	"grey-1": { value: "hsl(220, 6%, 46.7%)" },
	"grey-2": { value: "hsl(220, 6%, 60%)" },
	"grey-3": { value: "hsl(220, 6%, 70%)" },

	transparent: {
		dark: { value: "#000c" },
		light: { value: "#fffc" },
	},

	// Aurora
	red: { mid: "hsl(354, 42%, 56%)", dark: "hsl(354, 42%, 8.97%)" },
	orange: { mid: "hsl(14, 51%, 63%)", dark: "hsl(354, 42%, 8.97%)" },
	yellow: { mid: "hsl(40, 71%, 73%)", dark: "hsl(354, 42%, 8.97%)" },
	green: { mid: "hsl(92, 28%, 65%)", dark: "hsl(354, 42%, 8.97%)" },
	purple: { mid: "hsl(311, 20%, 63%)", dark: "hsl(354, 42%, 8.97%)" },
};

export default {
	color: {
		...colours,

		site: {
			bg: { value: `${colours["dark-0"].value}` },
			text: { value: `${colours["light-0"].value}` },
		},

		content: {
			bg: { value: `${colours["light-0"].value}` },
			text: { value: `${colours["dark-1"].value}` },
		},

		bg: {
			about: { value: `${colours.red.mid}` },
			projects: { value: `${colours.orange.mid}` },
			articles: { value: `${colours.yellow.mid}` },
			weeknotes: { value: `${colours.green.mid}` },
			inuse: { value: `${colours.purple.mid}` },
		},

		text: {
			about: { value: `${colours.red.dark}` },
			projects: { value: `${colours.orange.dark}` },
			articles: { value: `${colours.yellow.dark}` },
			weeknotes: { value: `${colours.green.dark}` },
			inuse: { value: `${colours.purple.dark}` },
		},
	},
};
