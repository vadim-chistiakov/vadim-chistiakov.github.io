import type { Lang } from '../i18n/config';

/**
 * One-off 1:1 paid sessions, booked via Cal.com and paid via Revolut Payment Links.
 *
 * The Cal.com page below lists both event types (60 min consultation, 75 min mock
 * interview); the visitor picks the format there, then pays with the matching button.
 *
 * TODO(real-data): if per-service deep links are wanted, add the exact Cal.com event
 * slugs (e.g. "vadim-chistiakov/60min").
 */
export const calUsername = 'vadim-chistiakov';
export const calOrigin = 'https://cal.com';

export interface Service {
	id: 'consultation' | 'mock';
	title: string;
	duration: string;
	/** full price, both currencies */
	price: string;
	/** compact price for tags */
	priceShort: string;
	/** Revolut Business Payment Link */
	payment: string;
}

export const getServices = (lang: Lang): Service[] => {
	const en = lang === 'en';
	return [
		{
			id: 'consultation',
			title: en ? 'Consultation' : 'Консультация',
			duration: en ? '60 min' : '60 мин',
			price: en ? '12 000 ₽ / €120' : '12 000 ₽ / 120 €',
			priceShort: en ? '€120' : '120 €',
			payment: 'https://checkout.revolut.com/pay/7afd1960-2cb0-4158-a6d7-3ac8e02ce147',
		},
		{
			id: 'mock',
			title: en ? 'Mock interview' : 'Моковое интервью',
			duration: en ? '75 min' : '75 мин',
			price: en ? '15 000 ₽ / €150' : '15 000 ₽ / 150 €',
			priceShort: en ? '€150' : '150 €',
			payment: 'https://checkout.revolut.com/pay/21c4ff34-514c-4c46-afbc-86ee648051dc',
		},
	];
};
