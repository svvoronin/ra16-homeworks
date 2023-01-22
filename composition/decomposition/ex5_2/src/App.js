import React from "react";

import Layout from "./Components/Layout/Layout";
import WebPage from "./WebPage/WebPage";

export const App = () => {
  return (
    <>
      <Layout>
        <WebPage />
      </Layout>
    </>
  );
};

export default App;
