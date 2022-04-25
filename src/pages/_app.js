import "../styles/global.scss";
import Nav from "../components/Nav";

function Manual({ Component, pageProps }) {
  return (
    <>
      <main className="container">
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default Manual;
