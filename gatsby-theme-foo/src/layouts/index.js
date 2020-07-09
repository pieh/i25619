import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <div
        style={{
          background: "red",
          color: "white",
          padding: 20,
        }}
      >
        foo
      </div>
    </>
  );
};

export default Layout;
