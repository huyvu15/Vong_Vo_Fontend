import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Tiemcaivongne`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Viết bởi nextjs" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;