import Head from "next/head";

const Meta = () => (
  <Head>
    {/* responsive design */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* makes sure we use utf-8 */}
    <meta charSet="utf-8" />
    {/* Sets the favicon */}
    <link rel="shortcut icon" href="/static/favicon.png" />
    {/* loads in CSS style */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Sick Fits!</title>
  </Head>
);

export default Meta;
