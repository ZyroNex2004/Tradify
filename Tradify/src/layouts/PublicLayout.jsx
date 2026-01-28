import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
