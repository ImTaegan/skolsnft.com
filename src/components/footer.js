/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="grid md:grid-flow-col md:auto-cols-max md:justify-between md:max-w-screen-xl lg:text-xl px-8 md:px-12 py-4 md:py-6 lg:px-20 lg:py-10 xl:px-20 xl:mx-auto">
        <h3 className="md:col-span-1">© 2021 SKOLs</h3>
        <div className="hidden xl:col-span-auto xl:flex xl:items-center">
          <Link href="/">
            <a className="mr-6 hover:underline hover:text-gray-800">HOME</a>
          </Link>
          <Link href="/#about">
            <a className="mr-6 hover:underline hover:text-gray-800">ABOUT</a>
          </Link>
          <Link href="/#roadmap">
            <a className="mr-6 hover:underline hover:text-gray-800">ROADMAP</a>
          </Link>
          <Link href="/#faq">
            <a className="mr-6 hover:underline hover:text-gray-800">FAQ</a>
          </Link>
          <a
            href="https://skolsnft.vercel.app/"
            className="mr-6 hover:underline hover:text-gray-800">
            MINT
          </a>

          <a className="mr-6" href="https://twitter.com/SolSkullsNFT">
            <img
              className="opacity-70"
              src="twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a className="" href="https://discord.gg/qYGrHFNV47">
            <img
              className="opacity-70"
              src="discord.png"
              alt="Discord"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
