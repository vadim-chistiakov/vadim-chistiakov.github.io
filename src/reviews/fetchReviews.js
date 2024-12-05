import * as cheerio from 'cheerio';

export async function getReviews(page) {
  const url = `https://reviews.it-mentors.ru/reviews?id=241413594&theme=notion-light&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching reviews: ${response.statusText}`);
    }
    const htmlResponse = await response.text(); // Получаем HTML
    const $ = cheerio.load(htmlResponse);
    const reviews = [];
    
    $('.review').each((index, element) => {
      const reviewText = $(element).text().trim();
      reviews.push(reviewText);
    });
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}  