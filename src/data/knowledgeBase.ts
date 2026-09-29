import type { Lang } from '../i18n/config';

/**
 * "База знаний iOS-разработчика" section.
 * TODO(real-data): confirm the three counters.
 */

export const getKnowledgeStats = (lang: Lang) => {
	const en = lang === 'en';
	return [
		{ value: '240+', label: en ? 'companies worldwide, including in English' : 'компаний со всего мира. В том числе на английском языке', note: '' },
		{
			value: '400+',
			label: en ? 'recorded interviews' : 'записанных собеседований',
			note: en
				? 'Screenings, technical interviews, algorithms, system design, finals.'
				: 'Скрининги, технические интервью, алгоритмы, системный дизайн, финалы.',
		},
		{
			value: '700+',
			label: en ? 'content units' : 'единиц контента',
			note: en
				? 'Solved questions, take-home assignments, refactoring tasks, live coding, pair programming.'
				: 'Разобранные вопросы, тестовые задания, задачи на рефакторинг, лайвкодинг, парное программирование.',
		},
	];
};

export const getKnowledgeTopics = (lang: Lang): string[] =>
	lang === 'en'
		? ['Algorithms', 'Mobile system design', 'Live coding', 'Low-level design', 'Refactoring', 'Pair programming', "Hiring manager interview", "Team fit interview", 'Final interview']
		: ['Алгоритмы', 'Мобильный системный дизайн', 'Low-level дизайн', 'Лайвкодинг', 'Рефакторинг', 'Парное программирование', 'Технические интервью', 'Поведенческие интервью', 'Финальные интервью'];

/**
 * Companies the interview breakdowns cover, shown as clickable logo tiles — each opens
 * the matching Boosty breakdown post in a new tab.
 * Logos live in /public/assets/companies/. Without `logo` a tile falls back to the name;
 * `zoom` enlarges logos that have built-in padding.
 */
export const knowledgeCompanies: { name: string; logo?: string; zoom?: number; link: string }[] = [
	{
		name: 'Revolut',
		logo: 'Revolut.png',
		link: 'https://boosty.to/chistiakov/posts/e66a352d-e6fe-410d-8992-fe754f8112a8?share=post_link',
	},
	{
		name: 'Google',
		logo: 'google.png',
		link: 'https://boosty.to/chistiakov/posts/faf044fb-7998-4a8d-b7ca-ec166c65dba8?share=post_link',
	},
	{
		name: 'Glovo',
		logo: 'glovo.png',
		link: 'https://boosty.to/chistiakov/posts/f90fc9c7-f7c3-462f-b3c7-eea5a383a027?share=post_link',
	},
	{
		name: 'inDrive',
		logo: 'indrive.png',
		link: 'https://boosty.to/chistiakov/posts/64717b71-01ab-4492-bb61-0e252dcae647?share=post_link',
	},
	{
		name: 'Plata',
		logo: 'Plata.png',
		link: 'https://boosty.to/chistiakov/posts/6ccf0d58-1a04-4852-8890-82eaca3532a0?share=post_link',
	},
	{
		name: 'Wildberries',
		logo: 'WB.png',
		link: 'https://boosty.to/chistiakov/posts/46630499-337d-42cb-8ecd-311b34db2af7?share=post_link',
	},
	{
		name: 'Apple',
		logo: 'apple.png',
		link: 'https://boosty.to/chistiakov/posts/50bac903-89e9-4603-90c7-162a95939ec2?share=post_link',
	},
	{
		name: 'Яндекс',
		logo: 'Yandex.png',
		zoom: 1.3,
		link: 'https://boosty.to/chistiakov/posts/9c6185b5-06ee-4ace-9fb7-d003ef58cec4?share=post_link',
	},
];