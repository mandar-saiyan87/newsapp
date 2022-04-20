import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const pageSize = 21;
  const api = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  const [search, setSearch] = useState("");

  function updateSearch(searchQuery) {
    setSearch(searchQuery)
  }

  return (
    <>
      <Router>
        <Navbar updateSearch={updateSearch} />
        <LoadingBar color="#f11946" progress={progress} height={3} />

        <Routes>

          <Route exact path="/" element={<News searchValue={search} setProgress={setProgress} apiKey={api} key="blockchain"
            query="blockchain" pageSize={pageSize} />} />

          <Route exact path="/bitcoin" element={<News setProgress={setProgress} apiKey={api} key="bitcoin"
            query="bitcoin" pageSize={pageSize} />} />

          <Route exact path="/ethereum" element={<News setProgress={setProgress} apiKey={api} key="ethereum"
            query="ethereum" pageSize={pageSize} />} />

          <Route exact path="/cryptocurrency" element={<News setProgress={setProgress} apiKey={api} key="cryptocurrency"
            query="cryptocurrency" pageSize={pageSize} />} />

          <Route exact path="/defi" element={<News setProgress={setProgress} apiKey={api} key="defi" query="defi"
            pageSize={pageSize} />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={api} key="technology"
            query="technology" pageSize={pageSize} />} />

          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={api} key="science"
            query="science" pageSize={pageSize} />} />

          <Route exact path="/:query" element={<News setProgress={setProgress} apiKey={api} key="search"
            query={search} pageSize={pageSize} />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
