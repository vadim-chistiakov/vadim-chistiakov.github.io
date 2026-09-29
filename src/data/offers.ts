import type { Lang } from '../i18n/config';

/**
 * "Метрики офферов" — real offers of community members.
 * TODO(real-data): all figures below are DEMO. Replace with real anonymised data.
 */

export const getOfferSummary = (lang: Lang) => {
	const en = lang === 'en';
	return [
		{ value: '60+', label: en ? 'offers' : 'офферов' },
		{ value: '12', label: en ? 'countries' : 'стран' },
		{ value: en ? 'up to $140k' : 'до $140k', label: en ? 'annual comp' : 'годовой компенсации' },
		{
			value: `≈ ${averageOfferRubK(getOffers(lang))}k ₽`,
			label: en ? 'average offer per month' : 'средний оффер в месяц',
		},
	];
};

export type Currency = 'RUB' | 'EUR' | 'USD' | 'GBP';

/** One compensation figure. `value` is in thousands of `currency`. */
export interface OfferPoint {
	value: number;
	currency: Currency;
	per: 'month' | 'year';
}

/**
 * Approximate rates used only to put offers of different currencies on ONE chart
 * (roubles per 1 unit). Rough on purpose — tweak freely.
 */
export const fx: Record<Currency, number> = { RUB: 1, EUR: 100, USD: 90, GBP: 115 };

const symbol: Record<Currency, string> = { RUB: '', EUR: '€', USD: '$', GBP: '£' };

/** Compensation normalised to thousands of roubles per month. */
export const toRubPerMonthK = (p: OfferPoint): number =>
	(p.value * fx[p.currency]) / (p.per === 'year' ? 12 : 1);

/** Mean monthly offer (thousand ₽, rounded to 10): one figure per offer — its latest one. */
export const averageOfferRubK = (offers: Offer[]): number => {
	const latest = offers.map((o) => toRubPerMonthK(o.points[o.points.length - 1]));
	return Math.round(latest.reduce((a, b) => a + b, 0) / latest.length / 10) * 10;
};

export interface ChartPoint {
	company: string;
	logo?: string;
	accent: NonNullable<Offer['accent']>;
	/** original figure, e.g. "£95k" or "320k" */
	label: string;
	/** thousands of roubles per month */
	rubK: number;
}

/** Every figure of every offer, ordered by compensation (ascending). */
export const getChartPoints = (offers: Offer[]): ChartPoint[] =>
	offers
		.flatMap((o) =>
			o.points.map((p) => ({
				company: o.company,
				logo: o.logo,
			accent: o.accent ?? 'violet',
				label: `${symbol[p.currency]}${p.value}k`,
				rubK: toRubPerMonthK(p),
			})),
		)
		.sort((x, y) => x.rubK - y.rubK);

export interface Offer {
	company: string;
	logo?: string;
	amount: string;
	period: string;
	geo: string;
	note?: string;
	accent?: 'violet' | 'cyan' | 'pink' | 'yellow' | 'blue' | 'green';
	/** Figures plotted on the chart (one offer can have several, e.g. a career progression). */
	points: OfferPoint[];
}

export const getOffers = (lang: Lang): Offer[] => {
	const en = lang === 'en';
	const geo = (ru: string, e: string) => (en ? e : ru);
	return [
		{
			company: 'Альфа-Банк',
			logo: 'alphabank.svg',
			amount: '320k → 455k',
			period: en ? 'RUB/mo' : '₽/мес',
			geo: geo('Россия', 'Russia'),
			accent: 'pink',
			points: [{ value: 320, currency: 'RUB', per: 'month' }, { value: 350, currency: 'RUB', per: 'month' }, { value: 380, currency: 'RUB', per: 'month' }, { value: 455, currency: 'RUB', per: 'month' }],
			note: en
				? 'Four offers from members, 320k to 455k gross.'
				: 'Четыре оффера участников: от 320k до 455k gross.',
		},
		{
			company: 'Wildberries',
			logo: 'WB.png',
			amount: '339k',
			period: en ? 'RUB/mo' : '₽/мес',
			geo: geo('Россия', 'Russia'),
			accent: 'violet',
			points: [{ value: 339, currency: 'RUB', per: 'month' }],
		},
		{
			company: 'Revolut',
			logo: 'Revolut.png',
			amount: '€82k',
			period: en ? '/yr' : '/год',
			geo: 'UK',
			accent: 'cyan',
			points: [{ value: 82, currency: 'EUR', per: 'year' }],
		},
		{
			company: 'Bumble',
			logo: 'bumble.png',
			amount: '£114.5k',
			period: en ? '/yr' : '/год',
			geo: 'UK',
			accent: 'yellow',
			points: [{ value: 114.5, currency: 'GBP', per: 'year' }],
		},
		{
			company: 'N26',
			logo: 'n26.png',
			amount: '€50k',
			period: en ? '/yr' : '/год',
			geo: geo('Испания', 'Spain'),
			accent: 'cyan',
			points: [{ value: 50, currency: 'EUR', per: 'year' }],
		},
		{
			company: 'PayPal',
			logo: 'paypal.png',
			amount: '$140k',
			period: en ? '/yr' : '/год',
			geo: geo('США', 'USA'),
			accent: 'blue',
			points: [{ value: 140, currency: 'USD', per: 'year' }],
		},
		{
			company: 'СберЗдоровье',
			logo: 'sberhealth.png',
			amount: '320k',
			period: en ? 'RUB/mo' : '₽/мес',
			geo: geo('Россия', 'Russia'),
			accent: 'green',
			points: [{ value: 320, currency: 'RUB', per: 'month' }],
		},
		{
			company: "Bally's",
			logo: 'Bally.png',
			amount: '£55k',
			period: en ? '/yr' : '/год',
			geo: 'UK',
			accent: 'pink',
			points: [{ value: 55, currency: 'GBP', per: 'year' }],
		},
		{
			company: 'atlasmankind',
			amount: '€75k',
			period: en ? '/yr' : '/год',
			geo: geo('Италия', 'Italy'),
			accent: 'cyan',
			points: [{ value: 75, currency: 'EUR', per: 'year' }],
		},
	];
};
