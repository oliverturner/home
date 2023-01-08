export interface BaseProps {
	title: string;
	description: string;
	image?: string;
}

export interface PageProps {
	tabTitle: string;
	pageTitle: string;
	description: string;
	image?: string;
}

export interface Project {
	pageUrl: string;
	title: string;
	description: string;
	date: string;
	dateUpdated?: string;
	appUrl?: string;
	repoUrl: string;
	screenshotUrl: string;
	buildStatusUrl: string;
}
