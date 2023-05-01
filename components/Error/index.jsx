import React from "react";
import Link from "next/link";

const ErrorPage = (props) => {
  const { title, description, button = false } = props;
  return (
    <div className="bg-background-dark flex justify-center items-center min-h-screen">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
           <h1 class="mb-6 text-3xl tracking-tight font-bold  lg:text-5xl">
            {title}
          </h1>
          <p class="mb-4 text-md font-normal ">
           {description}
          </p>
          {button && <Link href="/">
            <div
            class="inline-flex text-white font-bold uppercase bg-primary-main hover:bg-primary-dark focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
        </div>
          </Link>}
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
