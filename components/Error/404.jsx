import React from "react";
import ErrorPage from "./index"

const NotFound = () => {
  return (
    <ErrorPage
      title="404 | Not Found"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae reprehenderit, voluptatibus quasi natus omnis perferendis adipisci molestias doloribus, suscipit eveniet labore voluptates a iure quis ratione in, debitis explicabo dolore atque."
      button={true}
    />
  );
};

export default NotFound;
