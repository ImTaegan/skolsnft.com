/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu(e) {
    e.preventDefault();
    setToggleMenu((prevState) => !prevState);
  }

  return (
    <nav className="grid grid-custom md:items-center lg:auto-cols-max lg:grid-flow-col max-w-screen-xl xl:w-full px-8 md:px-12 py-4 md:py-6 lg:px-20 lg:py-10 xl:px-20 xl:mx-auto">
      <div className="flex">
        <Link href="/">
          <a className="hover:no-underline text-black text-2xl font-bold">
            SKOLs
          </a>
        </Link>
      </div>
      <div className="lg:hidden flex row">
        <button onClick={handleToggleMenu}>
          <img src="menu.png" alt="Menu" width={30} height={30} />
        </button>
      </div>
      <div
        className={`lg:flex text-center text-xl col-span-full grid-row-start-2 lg:col-start-2 ${
          toggleMenu ? "block" : "hidden"
        }`}>
        <Link href="/">
          <a className="block lg:flex py-2 lg:p-0 lg:mr-6">HOME</a>
        </Link>
        <Link href="/#about">
          <a className="block lg:flex py-2 lg:p-0 lg:mr-6">ABOUT</a>
        </Link>
        <Link href="/#roadmap">
          <a className="block lg:flex py-2 lg:p-0 lg:mr-6">ROADMAP</a>
        </Link>
        <Link href="/#faq">
          <a className="block lg:flex py-2 lg:p-0 lg:mr-6">FAQ</a>
        </Link>

        <a
          href="https://skolsnft.vercel.app/"
          className="block lg:flex py-2 lg:p-0 lg:mr-6">
          MINT
        </a>

        <div className="flex justify-center">
          <a
            className="py-2 px-4 lg:p-0 mr-6"
            href="https://twitter.com/SolSkullsNFT">
            <img
              className="opacity-70"
              src="twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a className="py-2 px-4 lg:p-0" href="https://discord.gg/qYGrHFNV47">
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
    </nav>
  );
}
