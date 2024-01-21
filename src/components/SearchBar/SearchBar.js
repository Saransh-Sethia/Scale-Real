import React from 'react';
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({query, handleInput}) => {
  return (
    <div>
          <div>
       <TextField 
       type="text"
       sx={{width:"500px"}}
       id="outlined-basic" 
       label="Search Products" 
       variant="outlined"
       value={query}
       onChange={handleInput}
       InputProps={{ 
        endAdornment:  
        <InputAdornment disableTypography position="start"> 
            <SearchIcon />
       </InputAdornment>
    }} 
     />
    </div>
    </div>
  )
}

export default SearchBar
