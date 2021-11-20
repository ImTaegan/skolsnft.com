import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid gap-8 md:gap-12 lg:gap-14 my-8 md:my-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
