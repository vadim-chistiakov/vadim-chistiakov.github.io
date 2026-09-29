import type { Lang } from './config';

// TODO(i18n): native-speaker review of the EN column.
const ui = {
	ru: {
		'nav.join': 'Вступить',
		'nav.menu': 'Меню',
		'nav.joinBoosty': 'Вступить на Boosty',

		'hero.eyebrow': 'Сообщество iOS разработчиков',
		'hero.title.pre': 'Расти в IT среди ',
		'hero.title.accent': 'своих',
		'hero.lead.brand': 'The IT Community',
		'hero.lead.rest':
			' — 500+ разработчиков со всего мира: США, Великобритания, Новая Зеландия, вся Европа, СНГ. Закрытые чаты, база знаний из 700+ разборов и поддержка от первого джоба до FAANG+.',
		'hero.cta.primary': 'Вступить на Boosty',
		'hero.cta.secondary': 'Что внутри',

		'community.num': '01',
		'community.eyebrow': 'Сообщество',
		'community.title': 'iOS-разработчики со всего мира',
		'community.members': 'активных участников',

		'tiers.num': '02',
		'tiers.eyebrow': 'Подписка',
		'tiers.title': 'Свой уровень — свой контент',
		'tiers.group.beginner': '// Если только вкатываешься',
		'tiers.group.advanced': '// Если уже в профессии',
		'tiers.subscribe': 'Оформить',
		'tiers.perMonth': '/мес',
		'chats.summary': 'Чаты сообщества',
		'chats.hint': 'Раскрыть',
		'chats.meta': '4 тематики',

		'knowledge.num': '03',
		'knowledge.eyebrow': 'База знаний',
		'knowledge.title': 'База знаний iOS-разработчика',
		'knowledge.lead.pre': 'Доступна без ограничений ученикам ',
		'knowledge.lead.accent': 'до оффера',

		'offers.num': '04',
		'offers.eyebrow': 'Метрики офферов',
		'offers.title': 'Реальные офферы участников',
		'offers.chartNote': 'Все офферы по уровню компенсации, приведено к тыс. ₽/мес по примерному курсу: € ≈ {eur} ₽, $ ≈ {usd} ₽, £ ≈ {gbp} ₽ · демо-данные',
		'offers.more': 'Больше офферов — внутри сообщества',
		'offers.modal.close': 'Закрыть',
		'reviewModal.title': 'Отзыв участника',
		'offers.modal.card': 'Открыть отзыв',

		'about.num': '05',
		'about.eyebrow': 'Про меня',
		'about.title': 'Вадим Чистяков',
		'about.timelineTitle': 'За 9+ лет в мобильной разработке',
		'about.now': '· сейчас',
		'about.note': 'Больше информации о моей карьере на LinkedIn',

		'mentorship.num': '06',
		'mentorship.eyebrow': 'Личная работа 1:1',
		'mentorship.title': 'Менторство и консультации',
		'mentorship.h.mentorship': 'Менторство до оффера',
		'mentorship.h.consult': 'Разовые услуги 1:1',
		'mentorship.demo': '',
		'mentorship.cta.bot': 'Оставить заявку в боте',
		'mentorship.cta.detail': 'Все условия',
		'mentorship.foot':
			'Выбрать слот в календаре и оплатить консультацию можно на сайте. При возникновении сложностей пиши в тг @chvadim',

		'reviews.num': '07',
		'reviews.eyebrow': 'Отзывы',
		'reviews.title': 'Реальные отзывы участников',
		'reviews.lead.pre': 'Неанонимные — из телеграм-канала ',
		'reviews.lead.channel': 'It Mentors',
		'reviews.lead.all': 'Все отзывы →',
		'reviews.author': 'Автор',
		'reviews.term': 'Срок',
		'reviews.offer': 'Оффер',
		'reviews.more': 'Читать далее',
		'reviews.less': 'Свернуть',
		'reviews.prev': 'Предыдущие отзывы',
		'reviews.next': 'Следующие отзывы',

		'companies.title': 'Мои офферы и офферы участников',
		'companies.hint': 'кликни на логотип → отзыв или оффер',

		'faq.num': '08',
		'faq.eyebrow': 'FAQ',
		'faq.title': 'Частые вопросы',

		'final.title': 'Вступай в The IT Community',
		'final.text': 'Начни с Junior Subscriber — и поднимайся по мере роста.',
		'final.cta': 'Открыть Boosty',

		'nf.eyebrow': 'Ошибка 404',
		'nf.title': 'Такой страницы нет',
		'nf.text': 'Возможно, ссылка устарела. Вернись на главную и найди нужный раздел.',
		'nf.cta': 'На главную',

		'm.back': 'На главную',
		'm.eyebrow': 'Личная работа 1:1',
		'm.title': 'Менторство и консультации',
		'm.tag.mentorship': 'от 60 000 ₽ + % · менторство',
		'm.tag.consult': '{price} · консультация',
		'm.tag.pay': 'оплата в любой валюте и крипте',
		'm.lead':
			'Менторство — программа под твою ситуацию, доведение до оффера, платишь из новой зарплаты. Занимаюсь с 2022 года, помог 60+ разработчикам. Нужен один разговор — бери разовую консультацию: выбери слот и оплати ниже.',
		'm.h.included': 'Что входит',
		'm.h.roadmap': 'Роадмап',
		'm.h.terms': 'Условия — под твою ситуацию',
		'm.or': 'или',
		'm.h.consult': 'Разовые услуги 1:1',
		'm.consultIntro':
			'Выбери формат и слот в календаре, затем оплати соответствующей кнопкой. После оплаты придёт подтверждение и ссылка на Zoom.',
		'm.step1': 'Выбери формат и слот',
		'm.calPlaceholder1': 'здесь встроится бесплатный календарь',
		'm.calPlaceholder2': '(Cal.com / Calendly — iframe)',
		'm.step2': 'Оплати',
		'm.perHourDemo': ' · за час',
		'm.payText':
			'Оплата картой на бизнес-аккаунт Revolut. Сначала выбери слот слева, затем оплати — после оплаты придёт подтверждение и ссылка на Zoom.',
		'm.payCta': 'Оплатить',
		'm.payNote':
			'Оплата картой на бизнес-аккаунт Revolut. Слот держится за тобой на время оплаты.',
		'm.payLocked': 'Сначала выбери слот в календаре слева — после этого станет доступна оплата.',
		'm.payUnlocked': '✓ Слот выбран — теперь можно оплатить.',
		'm.payPlaceholder': 'нужна реальная ссылка Revolut payment link',
		'm.aside.mentorship': 'Менторство',
		'm.aside.mentorshipPrice': 'от 60 000 ₽',
		'm.aside.mentorshipUnit': '+ % от первых зарплат',
		'm.aside.mentorshipText': '3 набора условий под твою ситуацию — точные цифры выше.',
		'm.aside.consult': 'Разовые услуги',
		'm.aside.perHour': ' · за час',
		'm.aside.consultCta': 'Выбрать и оплатить',
		'm.calTitle': 'Календарь записи',

		'footer.rights': '',
	},

	en: {
		'nav.join': 'Join',
		'nav.menu': 'Menu',
		'nav.joinBoosty': 'Join on Boosty',

		'hero.eyebrow': 'iOS developer community',
		'hero.title.pre': 'Grow in tech among ',
		'hero.title.accent': 'your people',
		'hero.lead.brand': 'The IT Community',
		'hero.lead.rest':
			' — 500+ developers worldwide: US, UK, New Zealand, all of Europe, CIS. Private chats, a knowledge base of 700+ breakdowns, and support from your first job to FAANG+.',
		'hero.cta.primary': 'Join on Boosty',
		'hero.cta.secondary': "What's inside",

		'community.num': '01',
		'community.eyebrow': 'Community',
		'community.title': 'iOS developers from all over the world',
		'community.members': 'active members',

		'tiers.num': '02',
		'tiers.eyebrow': 'Subscription',
		'tiers.title': 'Your level — your content',
		'tiers.group.beginner': '// If you are just breaking in',
		'tiers.group.advanced': '// If you are already in the field',
		'tiers.subscribe': 'Subscribe',
		'tiers.perMonth': '/mo',
		'chats.summary': 'Community chats',
		'chats.hint': 'Expand',
		'chats.meta': '4 topics',

		'knowledge.num': '03',
		'knowledge.eyebrow': 'Knowledge base',
		'knowledge.title': "The iOS developer's knowledge base",
		'knowledge.lead.pre': 'Unlimited access for mentees ',
		'knowledge.lead.accent': 'until they get an offer',

		'offers.num': '04',
		'offers.eyebrow': 'Offer metrics',
		'offers.title': 'Real offers of community members',
		'offers.chartNote': 'All offers by compensation, converted to thousand RUB/mo at approximate rates: € ≈ {eur} ₽, $ ≈ {usd} ₽, £ ≈ {gbp} ₽ · demo data',
		'offers.more': 'More offers — inside the community',
		'offers.modal.close': 'Close',
		'reviewModal.title': 'Member review',
		'offers.modal.card': 'Open review',

		'about.num': '05',
		'about.eyebrow': 'About me',
		'about.title': 'Vadim Chistiakov',
		'about.timelineTitle': '9+ years in mobile development',
		'about.now': '· now',
		'about.note': 'More about my career on LinkedIn',

		'mentorship.num': '06',
		'mentorship.eyebrow': 'Personal 1:1 work',
		'mentorship.title': 'Mentorship & consultations',
		'mentorship.h.mentorship': 'Mentorship to an offer',
		'mentorship.h.consult': 'One-off 1:1 sessions',
		'mentorship.demo': '',
		'mentorship.cta.bot': 'Apply via the bot',
		'mentorship.cta.detail': 'All terms',
		'mentorship.foot':
			'Pick a slot in the calendar and pay for the consultation right on the site. If you run into any issues, message me on Telegram @chvadim.',

		'reviews.num': '07',
		'reviews.eyebrow': 'Reviews',
		'reviews.title': 'Real reviews from members',
		'reviews.lead.pre': 'Named reviews — from the Telegram channel ',
		'reviews.lead.channel': 'It Mentors',
		'reviews.lead.all': 'All reviews →',
		'reviews.author': 'Author',
		'reviews.term': 'Term',
		'reviews.offer': 'Offer',
		'reviews.more': 'Read more',
		'reviews.less': 'Show less',
		'reviews.prev': 'Previous reviews',
		'reviews.next': 'Next reviews',

		'companies.title': 'My offers and offers from community members',
		'companies.hint': 'click a logo → review or offer',

		'faq.num': '08',
		'faq.eyebrow': 'FAQ',
		'faq.title': 'Frequently asked questions',

		'final.title': 'Join The IT Community',
		'final.text': 'Start with Junior Subscriber — and move up as you grow.',
		'final.cta': 'Open Boosty',

		'nf.eyebrow': 'Error 404',
		'nf.title': 'This page does not exist',
		'nf.text': 'The link may be outdated. Go back to the homepage and find the section you need.',
		'nf.cta': 'Go home',

		'm.back': 'Home',
		'm.eyebrow': 'Personal 1:1 work',
		'm.title': 'Mentorship & consultations',
		'm.tag.mentorship': 'from 60 000 ₽ + % · mentorship',
		'm.tag.consult': '{price} · consultation',
		'm.tag.pay': 'pay in any currency or crypto',
		'm.lead':
			'Mentorship is a program built around your situation, guiding you to an offer, paid from your new salary. Running since 2022, helped 60+ developers. Need a single conversation — take a one-off consultation: pick a slot and pay below.',
		'm.h.included': "What's included",
		'm.h.roadmap': 'Roadmap',
		'm.h.terms': 'Terms — for your situation',
		'm.or': 'or',
		'm.h.consult': 'One-off 1:1 sessions',
		'm.consultIntro':
			'Pick a format and a slot in the calendar, then pay with the matching button. After payment you get a confirmation and a Zoom link.',
		'm.step1': 'Pick a format and slot',
		'm.calPlaceholder1': 'a free calendar will be embedded here',
		'm.calPlaceholder2': '(Cal.com / Calendly — iframe)',
		'm.step2': 'Pay',
		'm.perHourDemo': ' · per hour',
		'm.payText':
			'Card payment to a Revolut Business account. First pick a slot on the left, then pay — after payment you get a confirmation and a Zoom link.',
		'm.payCta': 'Pay',
		'm.payNote':
			'Card payment to a Revolut Business account. Your slot is held while you pay.',
		'm.payLocked': 'Pick a slot in the calendar on the left first — payment unlocks after that.',
		'm.payUnlocked': '✓ Slot booked — you can pay now.',
		'm.payPlaceholder': 'a real Revolut payment link is needed',
		'm.aside.mentorship': 'Mentorship',
		'm.aside.mentorshipPrice': 'from 60 000 ₽',
		'm.aside.mentorshipUnit': '+ % of first salaries',
		'm.aside.mentorshipText': '3 sets of terms for your situation — exact figures above.',
		'm.aside.consult': 'One-off sessions',
		'm.aside.perHour': ' · per hour',
		'm.aside.consultCta': 'Pick and pay',
		'm.calTitle': 'Booking calendar',

		'footer.rights': '',
	},
} as const;

export type UiKey = keyof (typeof ui)['ru'];

export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return ui[lang][key] ?? ui.ru[key];
	};
}
