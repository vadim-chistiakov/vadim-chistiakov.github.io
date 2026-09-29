import type { Lang } from '../i18n/config';

/** "01 — Сообщество" section content. */

export const getCommunityStats = (lang: Lang) => {
	const labels =
		lang === 'en'
			? ['members', 'companies in the base', 'recorded interviews', 'content units']
			: ['участников', 'компаний в базе', 'записанных собеседований', 'единиц контента'];
	const values = ['500+', '240+', '400+', '700+'];
	return values.map((value, i) => ({ value, label: labels[i] }));
};

export interface CommunityFeature {
	icon: 'globe' | 'users' | 'chat' | 'star' | 'shield';
	title: string;
	text: string;
}

export const getCommunityFeatures = (lang: Lang): CommunityFeature[] =>
	lang === 'en'
		? [
				{
					icon: 'globe',
					title: 'iOS devs from everywhere',
					text: 'US, UK, New Zealand, all of Europe, CIS',
				},
				{ icon: 'users', title: 'Every level', text: 'From beginners to team leads' },
				{
					icon: 'chat',
					title: 'Topic chats',
					text: 'We discuss tech, careers, relocation and growing in IT',
				},
				{
					icon: 'star',
					title: 'Boosty',
					text: 'Recorded interviews, task breakdowns, exclusive content',
				},
				{
					icon: 'shield',
					title: 'UK Global Talent visa',
					text: 'A dedicated chat: help building cases, sharing experience, checking documents',
				},
			]
		: [
				{
					icon: 'globe',
					title: "iOS'ы со всего мира",
					text: 'США, Великобритания, Новая Зеландия, вся Европа, СНГ',
				},
				{ icon: 'users', title: 'Разный опыт', text: 'От начинающих до руководителей команд' },
				{
					icon: 'chat',
					title: 'Чаты по темам',
					text: 'Обсуждаем технологии, карьеру, релокацию и рост в IT',
				},
				{
					icon: 'star',
					title: 'Boosty',
					text: 'Записанные интервью, разборы задач, эксклюзивный контент',
				},
				{
					icon: 'shield',
					title: 'Виза таланта UK',
					text: 'Отдельный чат: помогаем собирать кейсы, делимся опытом, проверяем документы',
				},
			];
