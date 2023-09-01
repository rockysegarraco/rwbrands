import React from 'react'
import { fetchPost, fetchPostWithSlug } from '../lib/api';

const BlogDetails = ({posts}) => {

    console.log('====================================');
    console.log(posts);
    console.log('====================================');

  return (
    <div>
      detail page
    </div>
  )
}

export default BlogDetails

export async function getStaticProps({params}) {
    const posts = await fetchPostWithSlug(params.blogslug);
    return {
      props: { posts: posts?.fields },
      revalidate: 60,
    };
}

export async function getStaticPaths() {
const {posts} = await fetchPost();
return {
    paths: posts?.map(({ fields }) => `/${fields.slug}`) ?? [],
    fallback: "blocking",
};
}
  
