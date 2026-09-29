// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://vadim-chistiakov.github.io',
	integrations: [sitemap()],
	redirects: {
		'/about': '/#about',
		'/services': '/#tiers',
		'/services/mentorship': '/mentorstvo/',
		'/services/consulting': '/mentorstvo/',
		'/services/mockinterview': '/mentorstvo/',
		'/services/companyconsulting': '/mentorstvo/',
		'/services/global-talent-visa': '/mentorstvo/',
	},
});
