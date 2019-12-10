import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        backgroundImage:
          "url('https://wallpapermemory.com/uploads/408/book-background-hd-1280x854-128880.jpg')",
        backgroundSize: "cover",
        paddingTop: 120,
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
