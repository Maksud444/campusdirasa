import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://campusdirasah.com';
  
  // Static pages
  const staticPages = [
    '',
    '/hospitals',
    '/embassies',
    '/scholarships',
    '/library',
    '/forms',
    '/videos',
    '/qawaaim',
    '/verification',
    '/feedback',
  ];
  
  // PDF pages
  const pdfPages = [
    '/pdf/iqama',
    '/pdf/rooms',
    '/pdf/exams',
    '/pdf/removed',
  ];
  
  // Library pages
  const libraryPages = [
    '/library/dirasa-khassa',
    '/library/iedadi',
    '/library/thanawi',
  ];
  
  // Forms pages
  const formsPages = [
    '/forms/iqama',
    '/forms/tadarus',
  ];
  
  // Combine all pages
  const allPages = [
    ...staticPages,
    ...pdfPages,
    ...libraryPages,
    ...formsPages,
  ];
  
  // Generate sitemap entries
  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: page === '' ? 1.0 : 0.8,
  }));
}
