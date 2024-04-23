import { ReactElement } from "react";
import Modal from "@/components/Modal/Modal";
import classes from "@/components/NewPost/NewPost.module.css";
import { Form, Link, redirect } from "react-router-dom";

function NewPost(): ReactElement {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input name="author" id="name" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="body" id="body" rows={3} required />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
}
