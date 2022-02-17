// Packages
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Features, Hero, Pricing } from "../components";
import { PageDocument, usePageQuery } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

export default function Home() {
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
