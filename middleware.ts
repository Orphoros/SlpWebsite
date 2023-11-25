import createMiddleware from 'next-intl/middleware';
import { siteConfig } from "@/config/site";

export default createMiddleware({
  // A list of all locales that are supported
  locales: siteConfig.locales.map((locale) => locale.code),
 
  // Used when no locale matches
  defaultLocale: siteConfig.locales[0].code,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};