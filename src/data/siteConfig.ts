/**
 * Central site configuration.
 */

export const site = {
	name: 'The IT Community',
	tagline: 'Develop · Grow · Get hired',
	legalName: 'Chistiakov Consulting Ltd',
	foundedYear: 2022,
	city: 'London',
} as const;

/** Outbound links used across the site. */
export const links = {
	/** Boosty page — subscription tiers live here. */
	boosty: 'https://boosty.to/chistiakov',
	/** Telegram bot that collects mentorship applications. */
	mentorshipBot: 'https://t.me/the_it_community_bot',
	/** Personal Telegram for direct contact. */
	telegram: 'https://t.me/chvadim',
	/** Open Telegram channel. */
	channel: 'https://t.me/ios_mobile_developer',
	/** Reviews widget (it-mentors). */
	reviews: 'https://personal.it-mentors.ru/integrations/mentor-reviews/241413594',
	reviewsChannel: 'https://t.me/it_mentors',
	/** Boosty post (opened from the "Knowledge base" section's "available with no limits" link). */
	knowledgeBase: 'https://boosty.to/chistiakov/posts/167df9a9-649b-495f-b46f-d1d1a82cd34d?share=post_link',
	// One-off paid sessions (Cal.com + Revolut) live in src/data/consultations.ts
} as const;

export const social = [
	{ label: 'Telegram', href: 'https://t.me/ios_mobile_developer', icon: 'telegram-logo' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@VadimChistiakov', icon: 'youtube-logo' },
	{ label: 'Boosty', href: 'https://boosty.to/chistiakov', icon: 'boosty-logo' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/vadim-chistiakov/', icon: 'linkedin-logo' },
	{ label: 'GitHub', href: 'https://github.com/vadim-chistiakov', icon: 'github-logo' },
	{ label: 'Habr', href: 'https://habr.com/ru/users/titanium007', icon: 'habr-logo' },
	{ label: 'Hackernoon', href: 'https://hackernoon.com/u/vadimchistiakov', icon: 'hackernoon-logo' },
	{ label: 'Leetcode', href: 'https://leetcode.com/Titaniys/', icon: 'leetcode-logo' },
] as const;
