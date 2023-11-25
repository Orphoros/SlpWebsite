"use client";

import clsx from "clsx";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import { Link as LocaleLink} from "@/lib/navigation";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { faBrain} from '@fortawesome/free-solid-svg-icons';
import { useLocale } from "next-intl";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
} from "@/components/icons";

import LanguageSwitcher from "./language-switcher";


type Props = {
	navItems: {
		href: string;
		label: string;
	}[];
	navMenuItems: {
		href: string;
		label: string;
	}[];
};

export const Navbar = ({ navItems, navMenuItems }: Props) => {
	const currentLocale = useLocale();
	const currentLocaleConfig = siteConfig.locales.find((locale) => locale.code === currentLocale)!;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBordered isMenuOpen={isMenuOpen}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<LocaleLink className="flex justify-start items-center gap-1" href="/" locale={currentLocale}>
						<FontAwesomeIcon icon={faBrain} className="text-foreground-900" />
						<p className="font-bold text-inherit">SLP</p>
					</LocaleLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{navItems.map((item) => (
						<NavbarItem key={item.href}>
							<LocaleLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
								locale={currentLocale}
							>
								{item.label}
							</LocaleLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">
					<LanguageSwitcher currentValue={currentLocaleConfig} locales={siteConfig.locales} />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
			</NavbarContent>

			<NavbarMenu>
				<div className="flex justify-center items-center gap-2">
					<LanguageSwitcher currentValue={currentLocaleConfig} locales={siteConfig.locales} />
				</div>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<LocaleLink href={item.href} locale={currentLocale} onClick={() => setIsMenuOpen(false)}>
								{item.label}
							</LocaleLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
