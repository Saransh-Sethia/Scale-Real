import React from 'react';
import './Heading.css';
import SearchBar from '../SearchBar/SearchBar';
import SortData from '../SortData/SortData';

const Heading = ({query, handleInput, sortBy, handleSort}) => {

    const options = ['Episode', 'Year', 'None']
  return (
    <div className='heading-container'>
        <SortData sortBy={sortBy} handleSort={handleSort} options={options}/>
      <SearchBar query={query} handleInput={handleInput}  />
    </div>
  )
}

export default Heading
