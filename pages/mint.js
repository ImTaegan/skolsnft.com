import Head from "next/head";

export default function Index() {
  return (
    <main className="self-center justify-self-center">
      <Head>
        <title>Minting - SKOLs, 3333 SKOLs on Solana | skolsnft.com</title>
        <meta
          name="description"
          content="SKOLsnft.com - 3333 SKOLs on Solana. SKOLs is a unique three-part Solana project. We are passionate about
            having a strong and positive community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid md:grid-flow-row max-w-screen-xl gap-6 md:gap-8 lg:gap-10 px-8 md:px-12 py-8 md:py-12 lg:px-20 lg:py-20 xl:mx-auto">
        <h1 className="col-span-full">Minting starts SOON</h1>
      </section>
    </main>
  );
}
