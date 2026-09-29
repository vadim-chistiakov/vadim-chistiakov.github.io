import type { Lang } from '../i18n/config';

/**
 * "FAQ" section.
 * TODO(real-data): answers are drafts — finalise wording with Vadim.
 * TODO(i18n): native-speaker review of the EN answers.
 */

export interface FaqItem {
	q: string;
	a: string;
}

const ru: FaqItem[] = [
	{
		q: 'Можно ли отменить подписку?',
		a: 'Да, подписка на Boosty отменяется в любой момент в личном кабинете — доступ сохраняется до конца оплаченного периода.',
	},
	{
		q: 'Сколько времени занимает обучение до оффера?',
		a: 'Зависит от многих факторов: текущих знаний, опыта в профессии и прохождения интервью. Помощь продолжается до момента, пока ты сам готов идти к цели.',
	},
	{
		q: 'Берёте ли учеников с нуля?',
		a: 'Да, в таком случае обучение начинается с помощником.',
	},
	{
		q: 'C какими рынками работаешь?',
		a: 'Я работаю в основном с русскоязычными ребятами, но живут они в разных регионах. Мои ученики получали офферы в десятках стран по всему миру.',
	},
	{
		q: 'Постоплата выплачивается только после трудоустройства?',
		a: 'Да. Также предоплата и постоплата могут быть разделены на несколько частей.',
	},
	{
		q: 'Что, если я не получу оффер?',
		a: 'Пока ты мотивирован и дисциплинирован в обучении, проблем не будет. Как только ты опускаешь руки, шансы на оффер тоже сходят на ноль.',
	},
	{
		q: 'Какая гарантия оффера?',
		a: 'Я не нанимаю человека сам, поэтому не могу гарантировать трудоустройство на 100%. Твой результат зависит от тебя примерно на 80%. Условия оплаты такие, что мне невыгодно брать учеников, которых я не доведу до оффера.',
	},
	{
		q: 'Можно ли получить полную удалёнку?',
		a: 'Да, это возможно, но большинство компаний требуют оставаться резидентом страны, в которой работаешь. Если хочешь быть полностью независимым, будем готовиться к валютным удалёнкам за рубежом — они дают больше гибкости.',
	},
];

const en: FaqItem[] = [
	{
		q: 'Can I cancel the subscription?',
		a: 'Yes, the Boosty subscription can be cancelled any time in your account — access stays until the end of the paid period.',
	},
	{
		q: 'How long does mentorship take until an offer?',
		a: "It depends on a lot of factors: your current knowledge, work experience and how interviews go. Support continues for as long as you're committed to reaching your goal.",
	},
	{
		q: 'Do you take students with zero experience?',
		a: "Yes — in that case training starts with an assistant.",
	},
	{
		q: 'Which markets do you work with?',
		a: "I mostly work with Russian-speaking people, though they live in many different regions. My students have landed offers in dozens of countries worldwide.",
	},
	{
		q: 'Is the postpayment due only after you get hired?',
		a: 'Yes. The prepayment and postpayment can also be split into several parts.',
	},
	{
		q: "What if I don't get an offer?",
		a: "As long as you stay motivated and disciplined in your training, there won't be a problem. The moment you give up, your chances of an offer drop to zero too.",
	},
	{
		q: 'What guarantee is there of an offer?',
		a: "I don't do the hiring myself, so I can't guarantee employment 100%. Your result depends on you for about 80% of it. The payment terms are set up so it isn't worth my while to take on students I can't get to an offer.",
	},
	{
		q: 'Can I get a fully remote job?',
		a: "Yes, that's possible, but most companies require you to stay a resident of the country you work for. If you want to be fully independent, we'll prepare you for foreign-currency remote jobs abroad — they give you more flexibility.",
	},
];

export const getFaq = (lang: Lang): FaqItem[] => (lang === 'en' ? en : ru);
