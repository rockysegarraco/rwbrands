import { useState } from "react";
import Link from "next/link";

import Nav from "/components/Nav";
import Pagination from "/components/Pagination";
import DateComponent from "/components/date";
import { NUMBER_OF_BLOG_TO_SHOW } from "../lib/helper";
import { fetchPostWithPagination } from "../lib/api";


export default function Home({ allPosts, total }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(allPosts);
  const [totalLength, setTotalLength] = useState(NUMBER_OF_BLOG_TO_SHOW);

  const handleNext = async (e) => {
    e.preventDefault();
    if (totalLength != total) {
      console.log("its calling")
      const { posts } = await fetchPostWithPagination(
        NUMBER_OF_BLOG_TO_SHOW,
        totalLength
      );
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts);
    }
  };

  const handlePrev = async (e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length;
      const { posts } = await fetchPostWithPagination(
        NUMBER_OF_BLOG_TO_SHOW,
        totalSkip
      );
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts);
    }
  };

  return (
    <>
      <Nav />
      <div className="text-dark text-4xl lg:text-4xl p-8 text-center">Blog</div>
      <div className="mx-auto mt-0 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 p-8">
        {postData.map((item, i) => {
          const fields = item.fields;
        return(
          <Link key={i} href="/">
          <div className="rounded overflow-hidden shadow-lg hover:shadow-xl">
            <img
              className="w-full"
              src={fields.coverImage?.fields?.file?.url}
              alt="Sunset in the mountains"
            />
            <div className="p-8">
              <div className="font-bold text-xl mb-4">{fields.title}</div>
              <p className="text-gray-700 text-base">
               {fields.desc}
              </p>
              <div className="text-sm mb-4">
              <DateComponent dateString={fields.date} />
              </div>
            </div>
          </div>
        </Link>
        )})}
      </div>
      <div className="mx-auto max-w-7xl">
        <Pagination
          total={total}
          currentPage={currentPage}
          numberOfResult={NUMBER_OF_BLOG_TO_SHOW}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>

      <style>{"body { background-color: #f5f5f7; }"}</style>
    </>
  );
}

export async function getStaticProps() {
  const { posts, total } = await fetchPostWithPagination(NUMBER_OF_BLOG_TO_SHOW, 0);
  return {
    props: { allPosts: posts, total },
    revalidate: 60,
  };
}
