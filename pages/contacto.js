import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Envíanos un mensaje</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para consultas y soporte técnico."
        />

        {/* OG */}
        <meta property="og:title" content="Contacto - Mi Sitio" />
        <meta
          property="og:description"
          content="Formulario de contacto y soporte técnico disponible 24/7."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tu-dominio.com/contacto"
        />
      </Head>

      <h1>Contacto</h1>
    </>
  );
}
