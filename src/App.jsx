import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page from "../src/pages/Page";

const App = () => {
  return (
    <Router>
      <Routes>
        {[1, 2, 3, 4, 5].map((pageNumber) => (
          <Route
            key={pageNumber}
            path={`/page${pageNumber}`}
            element={<Page pageNumber={pageNumber} />}
          />
        ))}
        <Route path="/" element={<Page pageNumber={1} />} />
      </Routes>
    </Router>
  );
};

export default App;
