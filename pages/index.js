import React from "react";

import { Seo, Create as CreateComponent } from "../components";

const Create = (props) => {
  return (
    <>
      <Seo title="Create QR Code" />
      <CreateComponent {...props} />
    </>
  );
};

export default Create;
