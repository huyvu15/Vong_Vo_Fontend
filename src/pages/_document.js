import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body>
      <div
  dangerouslySetInnerHTML={{
    __html: `<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="df09cec2-1d34-428e-a450-d8562a87bfeb";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`
  }}
/>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
