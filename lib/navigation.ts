import { siteConfig } from '@/config/site';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = siteConfig.locales.map((locale) => locale.code);
 
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});