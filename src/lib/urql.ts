import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: "https://api-sa-east-1.graphcms.com/v2/ckzozt16a2bx401z2gl7mej84/master",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange], // Intercepts
});

export { client, ssrCache };
