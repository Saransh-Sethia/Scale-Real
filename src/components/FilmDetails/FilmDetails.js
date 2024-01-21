import React from "react";
import "./FilmDetails.css";

const FilmDetails = ({ detail, setDetail, toRomanNumeral }) => {
  return (
    <div>
      {detail.length !==0 ? (
          <div >
            <h2>
              Episode {toRomanNumeral(detail.episode_id)} - {detail.title}
            </h2>
            <h3>{detail.opening_crawl}</h3>
            <h4>Directed By: {detail.director}</h4>
          </div>
        
      ) : (
        <h1
          style={{
paddingLeft:'250px',
paddingTop:'250px'
          }}
        >
          No Movie Selected
        </h1>
      )}
    </div>
  );
};

export default FilmDetails;
