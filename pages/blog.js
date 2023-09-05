import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchPost } from "/lib/api";
import Link from "next/link";

import Nav from "/components/Nav";
import Pagination from "/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPosts }) {
  const heroPost = allPosts[0].fields;

  console.log("====================================");
  console.log(heroPost);
  console.log("====================================");

  return (
    <>
      <Nav />
      <div className="text-dark text-4xl lg:text-4xl p-8 text-center">Blog</div>
      <div className="mx-auto mt-0 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 p-8">
        <Link href="/">
          <div class="rounded overflow-hidden shadow-lg hover:shadow-xl">
            <img
              class="w-full"
              src="https://rw-brands.com/wp-content/uploads/2019/01/Luxmore_grande_ceremony-5.jpg"
              alt="Sunset in the mountains"
            />
            <div class="p-8">
              <div className="text-sm mb-4">July 21, 2023</div>
              <div class="font-bold text-xl mb-4">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl">
        <Pagination />
      </div>

      <style>{"body { background-color: #f5f5f7; }"}</style>
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
