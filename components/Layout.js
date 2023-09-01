import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
