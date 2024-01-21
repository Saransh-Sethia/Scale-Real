import React,{useState} from "react";
import "./MainContent.css";
import Table from "../Table/Table";
import FilmDetails from "../FilmDetails/FilmDetails";
import axios from "axios";

const MainContent = ({ tableContent, filteredTableContent, displayData }) => {
  const [detail, setDetail] = useState("");
  const toRomanNumeral = (num) => {
    const lookup = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    return lookup.reduce((acc, [k, v]) => {
      acc += k.repeat(Math.floor(num / v));
      num = num % v;
      return acc;
    }, "");
  };

  const fetchDetails = async(id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/films/${id}/?format=json`);
      const result = response.data;
      console.log('result-2',result);
      setDetail(result);
    } catch(error){
      console.log('error-2', error)
    }

  }

  return (
    <div className="main-content">
      <Table
        tableContent={tableContent}
        filteredTableContent={filteredTableContent}
        displayData={displayData}
        toRomanNumeral={toRomanNumeral}
        fetchDetails={fetchDetails}
      />
      <FilmDetails detail={detail} setDetail={setDetail} toRomanNumeral={toRomanNumeral} />
    </div>
  );
};

export default MainContent;
