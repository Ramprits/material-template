import React from "react";
import VerticalNav4 from "../../components/vertical-navs/VerticalNav4";
import { useGetPostsQuery } from "../../services/post";
import { PostList } from "./components/PostList";
export const PostPage = () => {
  const data = useGetPostsQuery();
  return (
    <VerticalNav4
      content={{
        "brand-mobile": {
          text: "Dhanai Fruits",
          image: "nereus-assets/img/nereus-light.png",
          width: "110"
        },
        link1: "Home",
        link2: "Fruits",
        link3: "Vegitables",
        link4: "Support"
      }}
      bucketMain={[<PostList />]}
    />
  );
};
