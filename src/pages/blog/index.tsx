// Packages
import { GetStaticProps } from "next";
import React from "react";
import { client, ssrCache } from "../../lib/urql";
import { PostsDocument, usePostsQuery } from "../../generated/graphql";
import { BlogPost } from "../../components";

const Blog: React.FC = () => {
  const [
    {
      data: { posts },
    },
  ] = usePostsQuery();
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{page.title}</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {page.subtitle}
        </p>
      </div> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <BlogPost
              key={post.slug}
              post={{
                title: post.title,
                href: `/blog/${post.slug}`,
                description: post.excerpt,
                author: {
                  name: post.author.name,
                  imageUrl: post.author.picture.url,
                },
                imageUrl: post.coverImage.url,
                date: new Date(post.publishedAt).toDateString(),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
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
