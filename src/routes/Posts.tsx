import { ReactElement } from "react";
import PostsList from "@/components/PostsList/PostsList.tsx";
import { Outlet } from "react-router-dom";

function Posts(): ReactElement {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
