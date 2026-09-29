import type { Lang } from '../i18n/config';

/** Sticky anchor navigation for the one-pager. */
export interface NavItem {
	label: string;
	/** in-page anchor id */
	href: string;
}

export const getNavItems = (lang: Lang): NavItem[] => {
	const labels =
		lang === 'en'
			? ['Community', 'Tiers', 'Knowledge', 'Offers', 'About', 'Mentorship', 'FAQ']
			: ['Сообщество', 'Тиры', 'База знаний', 'Офферы', 'Про меня', 'Менторство', 'FAQ'];
	const hrefs = ['#community', '#tiers', '#knowledge', '#offers', '#about', '#mentorship', '#faq'];
	return labels.map((label, i) => ({ label, href: hrefs[i] }));
};
