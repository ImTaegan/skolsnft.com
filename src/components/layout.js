import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="grid gap-10 md:gap-12 lg:gap-16 xl:gap-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
