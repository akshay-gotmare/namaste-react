import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="head">Hello I'm the Title fucntional component.</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      {/* One and the same thing */}
      <h1 className="heading">
        Hey, I'm HeadingComponent and using the Title component 👆.
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
