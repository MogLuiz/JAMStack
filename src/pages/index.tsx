// Components
import { Features, Hero, Pricing } from "../components";

// UrQL
import { client, ssrCache } from "../lib/urql";

// GraphQL Generated
import { PageDocument, usePageQuery } from "../generated/graphql";

// Types
import { GetServerSideProps } from "next";

export default function Home() {
  // -------------------------------------------------
  // Queries
  // -------------------------------------------------
  const [{ data }] = usePageQuery({
    variables: {
      slug: "about",
    },
  });
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Hero title={data?.page.title} subtitle={data?.page.subtitle} />
      <Features />
      <Pricing />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: "about" }).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
