/**
 * Company logo carousel ("Куда получали офферы участники").
 * A logo opens a modal: the member review(s) for that company — set in `companyReviews`
 * (src/data/reviews.ts), keyed by `name` — and/or the offer screenshot (`offerImage`).
 * Neither → the logo is not clickable.
 *
 * To add a company: drop the logo into /public/assets/companies/ and append an entry here.
 */

export interface Company {
	name: string;
	/** file in /public/assets/companies/ */
	logo: string;
	/** offer screenshot in /public/assets/Offers/, shown in the modal instead of a review */
	offerImage?: string;
}

export const companies: Company[] = [
	{ name: 'Yandex', logo: 'Yandex.png' },
	{ name: 'VK', logo: 'VK.png' },
	{ name: 'Ozon', logo: 'ozon.png' },
	{ name: 'Wildberries', logo: 'WB.png' },
	{ name: 'МТС', logo: 'mts.png' },
	{ name: 'Сбер', logo: 'sberbank.png' },
	{ name: 'Альфа-Банк', logo: 'alphabank.svg' },
	{ name: 'Совкомбанк', logo: 'sovcombank.png' },
	{ name: 'Дзен', logo: 'dzen.svg' },
	{ name: 'Rutube', logo: 'Rutube.png' },
	{ name: 'Яндекс Маркет', logo: 'yandexmarket.png', offerImage: 'yandex-offer.png' },
	{ name: "Л'Этуаль", logo: 'letoile.png' },
	{ name: 'METRO', logo: 'metro.png' },
	{ name: 'EPAM', logo: 'epam.png' },
	{ name: 'СберЗдоровье', logo: 'sberhealth.png' },
	{ name: 'Revolut', logo: 'Revolut.png' },
	{ name: 'Bumble', logo: 'bumble.png' },
	{ name: 'PayPal', logo: 'paypal.png' },
	{ name: 'N26', logo: 'n26.png' },
	{ name: "Bally's", logo: 'Bally.png' },
	{ name: 'Blacklane', logo: 'blacklane.jpg', offerImage: 'blacklane-offer.png' },
	{ name: 'Окко', logo: 'okko.jpeg', offerImage: 'okko-offer.png' },
	{ name: 'Instories', logo: 'instories.png', offerImage: 'instories-offer.png' },
];
