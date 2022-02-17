// GraphQL
import { client, ssrCache } from "../lib/urql";
import { Provider } from "urql";

// Components
import { Footer, Header } from "../components";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // -------------------------------------------------
  // Cache Logic
  // -------------------------------------------------
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
