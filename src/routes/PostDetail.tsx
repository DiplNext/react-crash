import Modal from "@/components/Modal/Modal.tsx";
import { Link, useLoaderData } from "react-router-dom";
import classes from "../components/PostDetail/PostDetail.module.css";

function PostDetail() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not found post.</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetail;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await response.json();
  return data.post;
}
