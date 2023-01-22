import React from "react";

import Card from "./Components/Card/Card";
import Layout from "./Components/Layout/Layout";

export const App = () => {
  return (
    <>
      <Layout>
        <Card
          title="Card title"
          namebth="Go somewhere"
          paragraph="Some quick Some quick Some quick Some quick Some quick"
        >
          <div className="card-image">
            <img src="https://picsum.photos/200/300?random=2" alt="IMG" />
          </div>
        </Card>
        <Card
          title="Special title treatrment"
          namebth="Go somewhere"
          paragraph="With supporting text below as a natural lead-in to additional content."
        ></Card>
      </Layout>
    </>
  );
};

export default App;
