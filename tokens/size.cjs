const widths = {
	nav: 20,
	content: 60,
};

const viewports = {
	medium: widths.content + widths.nav,
	large: widths.content + widths.nav * 2,
};

module.exports = {
	"step-02": { value: "clamp(0.64rem, calc(0.72rem + -0.11vw), 0.69rem)" },
	"step-01": { value: "clamp(0.8rem, calc(0.85rem + -0.06vw), 0.83rem)" },
	"step-0": { value: "1rem" },
	"step-1": { value: "clamp(1.2rem, calc(1.18rem + 0.1vw), 1.25rem)" },
	"step-2": { value: "clamp(1.44rem, calc(1.39rem + 0.24vw), 1.56rem)" },
	"step-3": { value: "clamp(1.73rem, calc(1.64rem + 0.44vw), 1.95rem)" },
	"step-4": { value: "clamp(2.07rem, calc(1.93rem + 0.72vw), 2.44rem)" },
	"step-5": { value: "clamp(2.49rem, calc(2.27rem + 1.1vw), 3.05rem)" },

	width: {
		nav: { value: `${widths.nav}ch` },
		content: { value: `${widths.content}ch` },
	},

	viewport: {
		medium: { value: `${viewports.medium}ch` },
		large: { value: `${viewports.large}ch` },
	},

	size: {
		clip: { value: 1.5 },
		icon: { value: 1.5 },
		text: {},
	},
};
