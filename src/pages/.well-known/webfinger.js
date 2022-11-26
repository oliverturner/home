export async function get() {
	return {
		body: JSON.stringify({
			subject: "acct:oliverturner@toot.cafe",
			aliases: [
				"https://toot.cafe/@oliverturner",
				"https://toot.cafe/users/oliverturner",
			],
			links: [
				{
					rel: "http://webfinger.net/rel/profile-page",
					type: "text/html",
					href: "https://toot.cafe/@oliverturner",
				},
				{
					rel: "self",
					type: "application/activity+json",
					href: "https://toot.cafe/users/oliverturner",
				},
				{
					rel: "http://ostatus.org/schema/1.0/subscribe",
					template: "https://toot.cafe/authorize_interaction?uri={uri}",
				},
			],
		}),
	};
}
