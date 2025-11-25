const BASE_URL = "https://proyecto-seo-1.onrender.com";

// Simulación de datos desde una BD o CMS
async function getDynamicRoutes() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
  ];
}

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];

  const dynamicPosts = await getDynamicRoutes();

  const dynamicUrls = dynamicPosts.map(
    (post) => `/blog/${post.slug}`
  );

  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <changefreq>weekly</changefreq>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}