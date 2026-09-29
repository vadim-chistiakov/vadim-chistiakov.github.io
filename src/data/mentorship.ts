import type { Lang } from '../i18n/config';

/**
 * "06 — Личная работа 1:1" — mentorship + consultation.
 * TODO(real-data): all prices/percentages below are DEMO (from a reference screenshot).
 * TODO(i18n): native-speaker review of the EN copy.
 */

export const getMentorshipSummary = (lang: Lang) => {
	const en = lang === 'en';
	return {
		mentorship: en
			? 'An individual plan, roadmap, mock interviews, resume help and referrals to top companies. ' +
				'Paid from your new salary — 3 sets of terms for your situation.'
			: 'Индивидуальный план, роадмап, моковые интервью, помощь с резюме и рефералы в топ-компании. ' +
				'Платишь из новой зарплаты — есть 3 варианта условий под твою ситуацию.',
		consultation: en
			? 'Consultation (60 min) or a mock interview (75 min) — career, iOS, resume, interview review.'
			: 'Консультация (60 мин) или моковое интервью (75 мин) — карьера, iOS, резюме, разбор интервью.',
		consultationPrice: en ? 'from €120' : 'от 120 €',
		consultationUnit: '',
	};
};

export interface MentorshipPillar {
	title: string;
	text: string;
}

export const getMentorshipPillars = (lang: Lang): MentorshipPillar[] =>
	lang === 'en'
		? [
				{ title: 'Roadmap', text: 'An individual development plan for your goal.' },
				{ title: 'Tracking mini-app', text: 'Track progress and hit your goals.' },
				{ title: 'Mock interviews', text: 'Practice and feedback from an experienced developer.' },
				{ title: 'Story & resume help', text: 'A strong pitch and winning cases.' },
				{ title: 'Referrals to top companies', text: 'Through trusted employees.' },
			]
		: [
				{ title: 'Роадмап', text: 'Индивидуальный план развития под твою цель.' },
				{ title: 'Мини-апп для трекинга', text: 'Отслеживай прогресс и достигай целей.' },
				{ title: 'Моковые интервью', text: 'Практика и обратная связь от опытного разработчика.' },
				{ title: 'Помощь с легендой и резюме', text: 'Сильная подача и выигрышные кейсы.' },
				{ title: 'Рефералки в топ-компании', text: 'Через проверенных сотрудников.' },
			];

export const getRoadmapStages = (lang: Lang): string[] =>
	lang === 'en'
		? ['Theory', 'Live coding', 'Low-level design', 'Mobile System Design', 'Algorithms', 'Behavioral interviews']
		: ['Теория', 'Лайв-кодинг', 'Low-level design', 'Mobile System Design', 'Алгоритмы', 'Поведенческие интервью'];

export interface MentorshipTrack {
	title: string;
	forWhom: string;
	/** `ofOffer` is omitted for the flat, no-postpayment option. */
	options: { price: string; terms: string; ofOffer?: string }[];
	result: string;
}

export const getMentorshipTracks = (lang: Lang): MentorshipTrack[] => {
	const en = lang === 'en';
	const pct = (n: number) => (en ? `${n}% of the offer` : `${n}% от оффера`);
	const t4 = (n: number) =>
		en ? `+ ${n}% of the first four salaries` : `+ ${n}% от первых четырёх зарплат`;
	const t2 = (n: number) =>
		en ? `+ ${n}% of the first two salaries` : `+ ${n}% от первых двух зарплат`;
	const flat = en ? 'no postpayment' : 'без постоплаты';
	const result = (r: string) => (en ? `Offer of ${r}` : `Оффер на ${r}`);
	return [
		{
			title: en ? 'No work experience' : 'Без опыта работы',
			forWhom: en
				? 'For those who want their first job as an iOS developer.'
				: 'Для тех, кто хочет получить первую работу iOS-разработчиком.',
			options: [
				{ price: '60 000 ₽', terms: t4(50), ofOffer: pct(200) },
				{ price: '120 000 ₽', terms: t2(50), ofOffer: pct(100) },
				{ price: '170 000 ₽', terms: flat },
			],
			result: result('150–300k'),
		},
		{
			title: en ? 'With commercial experience' : 'С коммерческим опытом',
			forWhom: en
				? 'For those already working who want a higher grade and salary.'
				: 'Для тех, кто уже работает и хочет повысить грейд и зарплату.',
			options: [
				{ price: '60 000 ₽', terms: t4(42.5), ofOffer: pct(170) },
				{ price: '120 000 ₽', terms: t2(35), ofOffer: pct(70) },
				{ price: '170 000 ₽', terms: flat },
			],
			result: result('350–550k'),
		},
		{
			title: en ? 'Stack switch' : 'Смена стэка',
			forWhom: en
				? 'For those already in IT who want to move into mobile development.'
				: 'Для тех, кто уже в IT, но хочет перейти в мобильную разработку.',
			options: [
				{ price: '60 000 ₽', terms: t4(45), ofOffer: pct(180) },
				{ price: '120 000 ₽', terms: t2(40), ofOffer: pct(80) },
				{ price: '170 000 ₽', terms: flat },
			],
			result: result('350–550k'),
		},
	];
};

export const getMentorshipNotes = (lang: Lang) => {
	const en = lang === 'en';
	return {
		pay: en
			? 'You only pay from your new salary — not out of pocket.'
			: 'Платишь только из новой зарплаты — не из своего кармана.',
		split: en
			? 'Payment can be split in 2 — half at the start, half a month later.'
			: 'Оплату можно разбить на 2 части — половину при старте, половину через месяц.',
		vuTag: en ? 'Price for FX-remote +15k.' : 'Цена для ВУ +15к.',
		vuText: en
			? 'FX-remote — working for a foreign company with a salary in $ / € / USDT.'
			: 'ВУ — Валютная Удалёнка: работа на зарубежную компанию с зарплатой в $ / € / USDT.',
	};
};
