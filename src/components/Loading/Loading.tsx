import { ReactElement } from "react";
import classes from "./Loading.module.css";

function Loading(): ReactElement {
  return (
    <div className={classes.text}>
      <p>Loading posts...</p>
    </div>
  );
}

export default Loading;
