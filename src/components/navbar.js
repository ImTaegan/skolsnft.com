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
    <nav className="grid grid-custom md:items-center lg:auto-cols-max lg:grid-flow-col max-w-screen-xl mx-8 my-4 md:mx-12 md:my-6 lg:mx-20 lg:my-10 xl:mx-auto">
      <Link href="/">
        <a className="hover:no-underline text-black text-2xl font-bold">
          SKOLs
        </a>
      </Link>
      <div className="lg:hidden flex row">
        <button onClick={handleToggleMenu}>
          <img src="menu.png" alt="Menu" width={30} height={30} />
        </button>
      </div>
      <div
        className={`lg:flex text-center text-xl col-span-full grid-row-start-2 lg:col-start-2 ${
          toggleMenu ? "block" : "hidden"
        }`}>
        <a className="block lg:flex py-2 lg:p-0 lg:mr-6" href="#">
          HOME
        </a>

        <a className="block lg:flex py-2 lg:p-0 lg:mr-6" href="#">
          ABOUT
        </a>

        <a className="block lg:flex py-2 lg:p-0 lg:mr-6" href="#">
          ROADMAP
        </a>

        <a className="block lg:flex py-2 lg:p-0 lg:mr-6" href="#">
          FAQ
        </a>

        <a className="block lg:flex py-2 lg:p-0 lg:mr-6" href="#">
          MINT
        </a>
        <div className="flex justify-center">
          <a className="py-2 px-4 lg:p-0 mr-6" href="#">
            <img
              className="opacity-70"
              src="twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a className="py-2 px-4 lg:p-0" href="#">
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
