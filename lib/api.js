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