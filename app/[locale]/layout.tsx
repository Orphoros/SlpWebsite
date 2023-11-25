import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import { Link } from "@nextui-org/link";

config.autoAddCss = false

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	const tNav = useTranslations('Nav');
	const locale = useLocale();

	const navItems = siteConfig.navItems.map((item) => ({
		...item,
		label: tNav(item.locale),
	}));

	const navMenuItems = siteConfig.navMenuItems.map((item) => ({
		...item,
		label: tNav(item.locale),
	}));
	
	return (
		<html lang={locale} suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen h-screen font-sans antialiased bg-background bg-radiant-ellipse-tl from-secondary-100 from-10% to-background to-70%",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar navItems={navItems} navMenuItems={navMenuItems} />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex flex-col items-center justify-center py-3">
							<p>
								This is a demo site! All content is for demonstration purposes only.
							</p>
							<p>
								<span>Content is taken from </span>
								<Link isExternal href="https://en.wikipedia.org/wiki/Speech–language_pathology" showAnchorIcon>Wikipedia</Link>
							</p>
							<p className="text-default-400 mt-5">
								Copyrigth © {new Date().getFullYear()} Orphoros. All rights reserved.
							</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}