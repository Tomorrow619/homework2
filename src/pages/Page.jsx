import React from "react";
import { Link } from "react-router-dom";

const generateRandomStyles = () => ({
  backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Page = ({ pageNumber }) => {
  const nextPage = pageNumber === 5 ? 1 : pageNumber + 1;
  const styles = generateRandomStyles();

  return (
    <div style={styles}>
      <h1>Аброр {pageNumber}</h1>
      <Link to={`/page${nextPage}`}>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Кнопка {nextPage}
        </button>
      </Link>
    </div>
  );
};

export default Page;
