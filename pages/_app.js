import React from "react";

import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import "../styles/global.css";

export default function MyApp(props) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Layout {...props} />
    </ThemeProvider>
  );
}
