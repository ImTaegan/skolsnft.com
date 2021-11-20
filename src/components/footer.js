/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="md:w-full bg-gray-100">
      <div className="grid md:grid-flow-col md:auto-cols-max md:justify-between md:max-w-screen-xl mx-8 md:mx-12 my-4 md:my-6 lg:mx-20 lg:my-10 xl:mx-auto lg:text-xl">
        <h3 className="md:col-span-1">© 2021 SKOLs</h3>
        <div className="hidden xl:col-span-auto xl:flex xl:items-center">
          <a className="mr-6 hover:underline hover:text-gray-800" href="#">
            HOME
          </a>
          <a className="mr-6 hover:underline hover:text-gray-800" href="#">
            ABOUT
          </a>
          <a className="mr-6 hover:underline hover:text-gray-800" href="#">
            ROADMAP
          </a>
          <a className="mr-6 hover:underline hover:text-gray-800" href="#">
            FAQ
          </a>
          <a className="mr-6 hover:underline hover:text-gray-800" href="#">
            MINT
          </a>
          <a className="mr-3" href="#">
            <img
              className="opacity-70"
              src="twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a className="" href="#">
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
