import { createClient } from "contentful";

// contentful baseAPI init;
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// get posts
export const fetchPost = async () => {
    const res = await client.getEntries({
      content_type: "post",
    });
    return { posts: res.items };
  };

  export const fetchPostWithSlug = async (slug) => {
    const res = await client.getEntries({
      content_type: "post",
      "fields.slug": slug,
    });
    return res.items[0];
  };