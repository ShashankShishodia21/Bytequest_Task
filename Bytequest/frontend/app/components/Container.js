import React from "react";
import Card from "./Card";
import { BiUpload } from "react-icons/bi";

const Container = ({ posts = [] }) => {
  console.log("Posts in Container:", posts); // Log the posts here
  return (
    <div className="main-cont">
      <div className="flex items-center justify-between p-4">
        <div className="container-head">
          <h1>All</h1>
          <div></div>
          <h1>Popular</h1>
        </div>
        <div className="flex items-center justify-center gap-3 text-3xl">
          <h1 className="text-[15px]">{posts.length} Products</h1>
          <BiUpload />
        </div>
      </div>
      <div className="container-card">
        {Array.isArray(posts) && posts.length > 0 ? (
          <Card posts={posts} />
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Container;
