import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Artículos y Noticias</title>
        <meta
          name="description"
          content="Lee artículos optimizados sobre tecnología, SEO y desarrollo web."
        />

        {/* OG */}
        <meta property="og:title" content="Blog - Artículos y Noticias" />
        <meta
          property="og:description"
          content="Accede a contenido actualizado sobre programación y SEO."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tu-dominio.com/blog" />
      </Head>

      <h1>Blog</h1>
    </>
  );
}
