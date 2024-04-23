import { ReactElement } from "react";
import Post from "@/components/Post/Post.tsx";
import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";

export interface IPost {
  id: string;
  author: string;
  body: string;
}

function PostsList(): ReactElement {
  const posts = useLoaderData();

  if (posts.length > 0) {
    return (
      <ul className={classes.posts}>
        {posts.map(({ id, author, body }: IPost) => {
          return <Post key={id} id={id} author={author} body={body} />;
        })}
      </ul>
    );
  }

  return (
    <div style={{ textAlign: "center", color: "#e5d5f7" }}>
      <h2>There are no posts yet.</h2>
      <p>Start adding some!</p>
    </div>
  );
}

export default PostsList;
