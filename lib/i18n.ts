import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../locales/${locale}.json`)).default
}));

export const getLanguageName = (c: string) => new Intl.DisplayNames([c], {type: 'language'}).of(c);
