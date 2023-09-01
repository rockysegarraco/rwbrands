import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchPost } from "/lib/api";

import Header from "/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPosts }) {
  const heroPost = allPosts[0].fields;

  console.log("====================================");
  console.log(heroPost);
  console.log("====================================");

  return (
    <>
      <Nav />
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await fetchPost();
  return {
    props: { allPosts: posts },
    revalidate: 60,
  };
}
