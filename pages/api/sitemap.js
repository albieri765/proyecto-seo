// Archivo: /pages/api/sitemap.js

const BASE_URL = "https://midominio-render.com"; // ← luego lo cambiarás por tu URL real de Render

export default function handler(req, res) {
  const urls = ["/", "/blog", "/contacto"]; // Aquí agregas más rutas

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
