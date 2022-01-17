import React from "react";
import Head from "next/head";
type propsSeo = { title: string; description: string };
function Seo({ title, description }: propsSeo) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

export default Seo;
