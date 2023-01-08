import { getCustomMedia, getCustomProps } from "./utils/theme.js";

const widths = {
	nav: 20,
	content: 60,
};

export const breakpoints = {
	medium: widths.content + widths.nav,
	large: widths.content + widths.nav * 2,
};

export const breakpointTable = Object.entries(breakpoints);
export const customMedia = {
	...getCustomMedia(breakpointTable, "min-width"),
	...getCustomMedia(breakpointTable, "max-width"),
};
export const customProperties = {
	...getCustomProps("width", Object.entries(widths)),
	...getCustomProps("viewport", breakpointTable),
};
