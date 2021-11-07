import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "mmillen",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS SO DOPE!!",
  },
  {
    id: "123",
    username: "mmillen",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS SO DOPE!!",
  },
  {
    id: "123",
    username: "mmillen",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS SO DOPE!!",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          img={post.img}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
