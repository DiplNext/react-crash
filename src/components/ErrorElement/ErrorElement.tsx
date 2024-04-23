import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>Oops...!</h1>
      <h2 style={{ color: "#e5d5f7" }}>{error.message}</h2>
    </div>
  );
}

export default ErrorElement;
