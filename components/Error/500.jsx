import React from "react";
import ErrorPage from "./index"

const InternalServerError = () => {
  return (
    <ErrorPage
      title="500 | Internal Server Error"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae reprehenderit, voluptatibus quasi natus omnis perferendis adipisci molestias doloribus, suscipit eveniet labore voluptates a iure quis ratione in, debitis explicabo dolore atque."
    />
  );
};

export default InternalServerError;
