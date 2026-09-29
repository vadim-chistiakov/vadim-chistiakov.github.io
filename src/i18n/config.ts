export const languages = { ru: 'RU', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ru';

/** Detect the active locale from a request URL. */
export function getLangFromUrl(url: URL): Lang {
	const seg = url.pathname.split('/').filter(Boolean)[0];
	return seg === 'en' ? 'en' : 'ru';
}

/** The logical path without the locale prefix, e.g. "/mentorstvo/" or "/". */
export function stripLang(pathname: string): string {
	const parts = pathname.split('/').filter(Boolean);
	if (parts[0] === 'en') parts.shift();
	return parts.length ? `/${parts.join('/')}/` : '/';
}

/** Prefix a logical path with the locale ("/" stays "/", "en" gets "/en"). */
export function localizePath(path: string, lang: Lang): string {
	if (lang === 'ru') return path;
	return path === '/' ? '/en/' : `/en${path}`;
}
