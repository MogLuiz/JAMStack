/* eslint-disable react-hooks/rules-of-hooks */
// Packages
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostDocument, usePostQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

const blog: React.FC = ({ slug }) => {
  // -------------------------------------------------
  // Queries
  // -------------------------------------------------

  const [
    {
      data: { post },
    },
  ] = usePostQuery({
    variables: {
      slug,
    },
  });

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
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
      slug: params.slug,
    },
  };
};

export default blog;
