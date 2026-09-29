import type { Lang } from '../i18n/config';

/**
 * Boosty subscription tiers.
 * Prices confirmed 2026-09: Junior 256₽ / Middle 512₽ / Senior 1024₽ / Staff 2048₽.
 */

export interface Tier {
	id: 'junior' | 'middle' | 'senior' | 'staff';
	name: string;
	price: string;
	group: 'beginner' | 'advanced';
	featured?: boolean;
	perks: string[];
	image: string;
	imageAlt: string;
	url: string;
}

const perksRu: Record<Tier['id'], string[]> = {
	junior: [
		'Знакомство с разработчиками со всего мира',
		'Вопросы в закрытом чате сообщества',
		'Поддержка автора и материалы для старта',
	],
	middle: [
		'Всё из Junior',
		'Курс по лайв-кодингу и разборы тех-интервью',
		'Эксклюзивный iOS-контент',
		'Видео реальных интервью в РФ-компаниях',
	],
	senior: [
		'Всё из Middle',
		'Закрытый чат по Global Talent Visa с обладателями',
		'Разборы Mobile System Design для бигтеха',
		'Разборы тестовых от крупных компаний',
	],
	staff: [
		'Всё из Senior',
		'Скрининг / тех / финал с хайринг-менеджерами топ-фирм',
		'Разборы задач для международных компаний (English)',
		'Материалы для релокейта в Tier-1 (FAANG+)',
		'Самый ранний доступ ко всему контенту',
	],
};

const perksEn: Record<Tier['id'], string[]> = {
	junior: [
		'Meet developers from around the world',
		'Ask questions in the private community chat',
		'Support the author and starter materials',
	],
	middle: [
		'Everything from Junior',
		'Live-coding course and tech-interview breakdowns',
		'Exclusive iOS content',
		'Videos of real interviews at Russian companies',
	],
	senior: [
		'Everything from Middle',
		'Private Global Talent Visa chat with visa holders',
		'Mobile System Design breakdowns for big tech',
		'Take-home assignment breakdowns from large companies',
	],
	staff: [
		'Everything from Senior',
		'Screening / tech / final rounds with hiring managers at top firms',
		'Question and task breakdowns for international companies (English)',
		'Materials for relocating to Tier-1 (FAANG+)',
		'Earliest access to all content',
	],
};

const altRu: Record<Tier['id'], string> = {
	junior: 'Junior — рыба-клоун',
	middle: 'Middle — скат-манта',
	senior: 'Senior — акула-молот',
	staff: 'Staff — осьминог',
};
const altEn: Record<Tier['id'], string> = {
	junior: 'Junior — clownfish',
	middle: 'Middle — manta ray',
	senior: 'Senior — hammerhead shark',
	staff: 'Staff — octopus',
};

const base: Omit<Tier, 'perks' | 'imageAlt'>[] = [
	{
		id: 'junior',
		name: 'Junior',
		price: '256 ₽',
		group: 'beginner',
		image: '/assets/Junior-tier.webp',
		url: 'https://boosty.to/chistiakov/purchase/2463032?ssource=DIRECT&share=subscription_link',
	},
	{
		id: 'middle',
		name: 'Middle',
		price: '512 ₽',
		group: 'beginner',
		image: '/assets/Middle-tier.webp',
		url: 'https://boosty.to/chistiakov/purchase/2467564?ssource=DIRECT&share=subscription_link',
	},
	{
		id: 'senior',
		name: 'Senior',
		price: '1024 ₽',
		group: 'advanced',
		image: '/assets/Senior-tier.webp',
		url: 'https://boosty.to/chistiakov/purchase/2754607?ssource=DIRECT&share=subscription_link',
	},
	{
		id: 'staff',
		name: 'Staff',
		price: '2048 ₽',
		group: 'advanced',
		featured: true,
		image: '/assets/Staff-tier.webp',
		url: 'https://boosty.to/chistiakov/purchase/4065779?ssource=DIRECT&share=subscription_link',
	},
];

export const getTiers = (lang: Lang): Tier[] =>
	base.map((t) => ({
		...t,
		perks: (lang === 'en' ? perksEn : perksRu)[t.id],
		imageAlt: (lang === 'en' ? altEn : altRu)[t.id],
	}));
