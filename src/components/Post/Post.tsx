import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IPost } from "@/components/PostsList/PostsList.tsx";
import classes from "./Post.module.css";

function Post({ id, author, body }: IPost): ReactElement {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
