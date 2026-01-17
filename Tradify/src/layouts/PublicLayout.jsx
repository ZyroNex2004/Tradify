import Header from "../Components/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
