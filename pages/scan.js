import React from "react";

import { Seo, Scan as ScanComponent } from "../components";

const Scan = (props) => {
  return (
    <>
      <Seo title="Scan QR Code" />
      <ScanComponent {...props} />
    </>
  );
};

export default Scan;
