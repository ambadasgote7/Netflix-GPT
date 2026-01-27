import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default ErrorPage;
