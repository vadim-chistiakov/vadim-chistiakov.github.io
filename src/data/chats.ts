import type { Lang } from '../i18n/config';

/** Community chats — shown in an inline accordion under the tiers. */
export interface Chat {
	title: string;
	description: string;
	url: string;
	/** file in /public/assets/ */
	image: string;
}

const descRu = [
	'Основной чат сообщества — карьера, интервью, поиск работы, релокация и жизнь.',
	'Алгоритмические задачи и реальные интервью от топовых IT-компаний.',
	'Всё для подготовки кейса на визу таланта в Великобританию.',
	'Открытый телеграм-канал про мобильную разработку и жизнь в Лондоне.',
];
const descEn = [
	'The main community chat — careers, interviews, job search, relocation and life.',
	'Algorithm problems and real interviews from top IT companies.',
	'Everything for building a UK Global Talent visa case.',
	'An open Telegram channel about mobile development and life in London.',
];

const meta = [
	{
		title: 'TIC | Main',
		url: 'https://boosty.to/chistiakov/purchase/2467564?ssource=DIRECT&share=subscription_link',
		image: '/assets/mainchat.jpeg',
	},
	{
		title: 'TIC | iOS Tech',
		url: 'https://boosty.to/chistiakov/purchase/2754607?ssource=DIRECT&share=subscription_link',
		image: '/assets/algochat.jpeg',
	},
	{
		title: 'TIC | Global Talent Hub',
		url: 'https://boosty.to/chistiakov/purchase/3248074?ssource=DIRECT&share=subscription_link',
		image: '/assets/globaltalentchat.jpeg',
	},
	{
		title: 'Vadim Chistiakov | IT',
		url: 'https://t.me/ios_mobile_developer',
		image: '/assets/channel.jpeg',
	},
];

export const getChats = (lang: Lang): Chat[] =>
	meta.map((c, i) => ({ ...c, description: (lang === 'en' ? descEn : descRu)[i] }));
