// Packages
import { GetStaticProps } from "next";
import React from "react";
import { client, ssrCache } from "../../lib/urql";
import { PostsDocument } from "../../generated/graphql";

const Blog: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <div />;
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PostsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
