import type { Lang } from '../i18n/config';

/**
 * "05 — Про меня" career timeline.
 * TODO(real-data): LinkedIn is login-gated — order and dates are best-effort. Confirm with Vadim.
 * Logo files live in /public/assets/companies/; a missing file falls back to a monogram.
 */

export const getAboutIntro = (lang: Lang): string =>
	lang === 'en'
		? 'I live and work in the UK, Senior Software Engineer at ASOS. Went from intern to team lead, ' +
			'got the Global Talent Visa as Exceptional Talent on my own. Ran 1000+ mentoring sessions and ' +
			'300+ technical interviews, helped 60+ developers land an offer.'
		: 'Живу и работаю в Великобритании, Senior Software Engineer в ASOS. Прошёл путь от интерна до ' +
			'тимлида, самостоятельно получил Global Talent Visa как Exceptional Talent. Провёл 1000+ ' +
			'менторинг-сессий и 300+ технических интервью, помог 60+ разработчикам лично получить оффер.';

export const getAboutTags = (lang: Lang): string[] =>
	lang === 'en'
		? ['iOS · Swift · Objective-C', 'Leadership', 'MIREA — computer security', 'UK Global Talent Visa holder']
		: ['iOS · Swift · Objective-C', 'Leadership', 'МИРЭА — компьютерная безопасность', 'UK Global Talent Visa holder'];

export interface CareerStep {
	/** fallback if the logo file is missing */
	monogram: string;
	/** file in /public/assets/companies/ */
	logo: string;
	role: string;
	org: string;
	note?: string;
	flag?: string;
	current?: boolean;
}

export const getCareerSteps = (lang: Lang): CareerStep[] => {
	const en = lang === 'en';
	const iosDev = en ? 'iOS developer' : 'iOS-разработчик';
	const seniorIosDev = en ? 'Senior iOS developer' : 'Senior iOS-разработчик';
	return [
		{
			monogram: 'СБ',
			logo: 'sber.png',
			role: iosDev,
			org: en ? 'Sber' : 'Сбер',
			note: en ? 'Sberbank-online' : 'Сбербанк-онлайн',
			flag: '🇷🇺',
		},
		{
			monogram: 'МТС',
			logo: 'mts.png',
			role: iosDev,
			org: 'МТС',
			note: 'Smart University',
			flag: '🇷🇺',
		},
		{
			monogram: 'А',
			logo: 'amediateka.png',
			role: seniorIosDev,
			org: en ? 'Amediateka' : 'Амедиатека',
			note: en ? 'Streaming service' : 'Онлайн-кинотеатр',
			flag: '🇷🇺',
		},
		{
			monogram: 'W',
			logo: 'wheely.png',
			role: 'Senior Software Engineer, iOS',
			org: 'Wheely',
			note: en ? 'Premium ride service, London' : 'Премиальный сервис такси, Лондон',
			flag: '🇬🇧',
		},
		{
			monogram: 'P',
			logo: 'prequel.png',
			role: 'iOS Team Lead',
			org: 'Prequel',
			note: en ? 'AI photo/video editor' : 'AI фото/видео-редактор',
			flag: '🇺🇸',
		},
		{
			monogram: 'AS',
			logo: 'asos.svg',
			role: 'Senior Software Engineer',
			org: 'ASOS',
			note: en ? 'Large UK e-commerce' : 'Крупный британский e-commerce',
			flag: '🇬🇧',
			current: true,
		},
	];
};
