import React from "react";
import { fetchPost, fetchPostWithSlug } from "../lib/api";

import Layout from "/components/Layout";

const BlogDetails = ({ posts }) => {
  console.log("====================================");
  console.log(posts);
  console.log("====================================");

  return (
    <Layout>
      <div className="mx-auto max-w-3xl bg-dark lg:mt-24 p-8">
        <div className="text-center">
          <h1 className="text-5xl mb-8 leading-[3.5rem]">{posts.title}</h1>
          <div>{posts.date}</div>
        </div>
        <img className="py-10" src={posts.coverImage} />
      </div>
    </Layout>
  );
};

export default BlogDetails;

export async function getStaticProps({ params }) {
  const posts = await fetchPostWithSlug(params.blogslug);
  return {
    props: { posts: posts?.fields },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { posts } = await fetchPost();
  return {
    paths: posts?.map(({ fields }) => `/${fields.slug}`) ?? [],
    fallback: "blocking",
  };
}
