import React from "react";
import { useRouter } from "next/router";
import { fetchPost, fetchPostWithSlug } from "../lib/api";

import Layout from "/components/Layout";
import PageNotFound from "../components/pagenotfound";
import DateComponent from "../components/date";
import PostBody from "../components/Postbody";

const BlogDetails = ({ posts }) => {
  const router = useRouter();

  if (!router.isFallback && !posts) {
    return <PageNotFound />;
  }

  return (
    <Layout>
      <div className="mx-auto max-w-3xl bg-dark lg:mt-24 p-8">
        <div className="text-center">
          <h1 className="text-5xl mb-8 leading-[3.5rem]">{posts.title}</h1>
          <DateComponent dateString={posts.date} />
        </div>
        <img className="py-10" src={posts.coverImage?.fields?.file?.url} alt="" />
        <PostBody content={posts.content} />
      </div>
    </Layout>
  );
};

export default BlogDetails;

export async function getStaticProps({ params }) {
  const { post } = await fetchPostWithSlug(params.blogslug);
  return {
    props: { posts: post ?? null },
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
