/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mqtlab.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.8,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/testing/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/testing' || path === '/about' || path === '/contact-us') {
      priority = 0.8;
      changefreq = 'weekly';
    } else {
      priority = 0.4;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
