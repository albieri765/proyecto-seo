import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Página principal optimizada con Next.js para mejor posicionamiento en Google."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Inicio - Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Descubre contenido optimizado con técnicas SEO modernas en Next.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.com/" />
      </Head>

      <h1>Bienvenido</h1>
    </>
  );
}
