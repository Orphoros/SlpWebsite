export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	locales: [ { code: "en", country: "gb"}, { code: "nl", country: "nl"} ],
	name: "SLP",
	description: "Speech and Language Pathology",
	navItems: [
		{
			href: "/faqs",
			locale: "faqs"
		},
	],
	navMenuItems: [
		{
			href: "/",
			locale: "home"
		},
		{
			href: "/faqs",
			locale: "faqs"
		}
	],
	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.com"
	},
};
