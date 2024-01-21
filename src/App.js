import "./App.css";
import React, { useState, useEffect } from "react";
import config from "./config";
import axios from "axios";
import MainContent from "./components/MainContent/MainContent";
import Heading from "./components/Heading/Heading";

function App() {
  const [tableContent, setTableContent] = useState([]);
  const [filteredTableContent, setFilteredTableContent] = useState([]);
  const [query, setQuery] = useState("");
  const keys = ["title"];
  const [sortBy, setSortBy] = useState("");

  const fetchApi = async () => {
    try {
      const response = await axios.get(config.endpoint);
      const result = response.data.results;
      setTableContent(result);
      setFilteredTableContent(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const search = (data) => {
    const updatedData = data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
    setFilteredTableContent(updatedData);
  };

  const applyFilters = (sortBy) => {
    let updatedData = [...filteredTableContent];
    if (sortBy === "Episode") {
      updatedData.sort((a, b) => a.episode_id - b.episode_id);
    }

    if (sortBy === "Year") {
      updatedData.sort((a, b) => b.release_date - a.release_date);
    }
    console.log("updated data", updatedData);
    return updatedData;
  };

  const displayData = applyFilters(sortBy);

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    search(tableContent);
  }, [query, tableContent]);

  useEffect(() => {
    setFilteredTableContent(tableContent);
  }, [tableContent]);

  return (
    <div className="App">
      <Heading
        query={query}
        handleInput={handleInput}
        sortBy={sortBy}
        handleSort={handleSort}
      />
      <MainContent
        tableContent={tableContent}
        filteredTableContent={filteredTableContent}
        displayData={displayData}
      />
    </div>
  );
}

export default App;
