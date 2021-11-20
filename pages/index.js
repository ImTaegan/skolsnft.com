import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <title>SKOLs, 3333 SKOLs on Solana</title>
        <meta name="description" content="SKOLs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid grid-cols-none grid-flow-row gap-10 md:gap-12 lg:gap-16 max-w-screen-xl xl:mx-auto mx-8 md:mx-12 lg:mx-20">
        <h1 className="col-span-1">Welcome to SKOLs</h1>
        <div className="sm:col-span-1">
          <p className="mb-4 md:mb-6">
            SKOLs is a unique three-part Solana project. We are passionate about
            having a strong and positive community.
          </p>
          <p className="">
            We are putting our money where our mouth is and giving away 400 free
            mints to victims of scam projects, we would like to create a safe
            place for all NFT lovers!
          </p>
        </div>
        <a
          href="#"
          className="w-full sm:w-40 md:w-60 xl:px-20 xl:w-auto xl:px-6 sm:justify-self-center sm:self-center sm:row-start-3 sm:col-start-1 sm:col-end-3 xl:col-span-1 px-3 py-3 text-center text-base font-medium lg:text-xl xl:text-2xl bg-gray-900 hover:bg-gray-700 hover:text-white text-white hover:no-underline transition-colors duration-200">
          MINT 11/21
        </a>
        <div className="flex sm:col-start-2 sm:col-end-2 sm:row-start-1 sm:row-end-3 xl:row-end-4 sm:-mr-8 md:-mr-12 lg:-mr-20 xl:-mr-28">
          <Image
            src="/about.gif"
            alt="SKOLs"
            width={949}
            height={954}
            objectFit="cover"
          />
        </div>
      </section>
      <section className="max-w-screen-xl grid grid-rows-auto gap-10 md:gap-12 lg:gap-16 xl:mx-auto mx-8 md:mx-12 lg:mx-20">
        <h1 className="row-start-1 row-end-1 text-center">About SKOLs</h1>
        <div>
          <p className="mb-4 md:mb-6">
            We are in the first stage of the project, which is{" "}
            <strong>3,333</strong> Pixel SKOLs. The final part of the project is
            the release of a Blue Chip NFT, and access to the minting site for
            this will require you to have a SKOL from the previous part in your
            wallet. This gives early adaptors a great opportunity to hold a
            “key” to the mint of a very valuable NFT!
          </p>
          <p>
            SKOLs have a minting price of <strong>0.15 SOL</strong>. Among the
            minting pool are 5 Wandering SKOLs, if you end up minting one we
            will airdrop $1k in SOL to your wallet!
          </p>
        </div>
      </section>
      <section className="relative w-full h-40 lg:h-60 xl:h-80">
        <Image src="/cover.png" alt="SKOLs" layout="fill" objectFit="cover" />
      </section>
      <section className="grid md:grid-cols-2 md:max-w-screen-xl mx-8 md:mx-12 lg:mx-20 gap-10 md:gap-12 lg:gap-16 xl:mx-auto">
        <h1 className="text-center col-span-full">Roadmap</h1>
        <div>
          <h1 className="mb-4 lg:mb-6">25% SOLD</h1>
          <p>
            6 lucky SKOL owners will receive an exclusive 1/6 SKOL airdropped
            straight to their wallet!
          </p>
        </div>
        <div>
          <h1 className="mb-4 lg:mb-6">50% SOLD</h1>
          <p>
            Giveaways in NFTs and Sol begin, sneak peeks of the second part
            artwork are dropped, art contests open up for chances at free mints
            of the second part.
          </p>
        </div>
        <div>
          <h1 className="mb-4 lg:mb-6">75% SOLD</h1>
          <p>
            We start to prepare the website and finish up artwork for the second
            launch of the project, which is outlined at the beginning of this
            post.
          </p>
        </div>
        <div>
          <h1 className="mb-4 lg:mb-6">100% SOLD</h1>
          <p>
            We are sold out! A solid date for part 2 is made. Utility Tier list
            for all three parts is dropped (it’s very exciting!) All royalties
            from secondary sales will be added to the community wallet, always.
          </p>
        </div>
      </section>
      <section className="grid gap-10 md:gap-12 lg:gap-16 md:max-w-screen-xl mx-8 md:mx-12 lg:mx-20 xl:mx-auto">
        <h1 className="text-center">FAQ</h1>
        <div>
          <h2>Where is the mint happening?</h2>
          <p>Right here on the website in the ‘Mint’ section.</p>
        </div>
        <div>
          <h2>When is mint?</h2>
          <p>We are launching 11/21 at 2pm EST!</p>
        </div>
        <div>
          <h2>How much is mint?</h2>
          <p>
            For this first part of the project (3,333 Pixel SKOLs) minting will
            be .15 SOL each. Price will increase slightly on the next part of
            the project, with a lower quantity of 2,222 and an upgrade to
            artwork and utility.
          </p>
        </div>
      </section>
    </>
  );
}
