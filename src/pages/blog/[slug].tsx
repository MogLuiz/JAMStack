// Packages
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostDocument } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

const blog: React.FC = () => {
  return <div />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, { slug: params.slug }).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default blog;
