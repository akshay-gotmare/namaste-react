import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      {/* <h1>Error Details</h1> */}
      <h1>{err?.status}</h1>
      <h1>{err?.statusText}</h1>
      {/* <p>{err.data}</p> */}
      {err?.error?.stack.split("\n").map((item, index) => {
        if (index == 0) return <strong key={index}>{item}</strong>;
        else
          return (
            <p key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {item}
            </p>
          );
      })}
    </div>
  );
};

export default Error;
