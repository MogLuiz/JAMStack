// GraphQL
import { client, ssrCache } from "../lib/urql";
import { Provider } from "urql";

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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
