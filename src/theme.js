import { getCustomMedia, getCustomProps } from "./utils/theme.js";

const widths = {
	nav: 40,
	content: 65,
};

export const breakpoints = {
	medium: widths.content + widths.nav,
	large: widths.content + widths.nav * 2,
};

export const breakpointTable = Object.entries(breakpoints);
export const customMedia = getCustomMedia(breakpointTable);
export const customProperties = {
	...getCustomProps("width", Object.entries(widths)),
	...getCustomProps("viewport", breakpointTable),
};
