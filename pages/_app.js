import "../sass/global.scss";
import LayoutPage from "../layout/page";
function MyApp({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}

export default MyApp;
