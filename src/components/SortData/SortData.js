import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortData = ({sortBy, handleSort, options}) => {
  return (
    <div>
          <Box sx={{ minWidth: 120, width:'100px' }}>
      <FormControl>
      <InputLabel id="demo-simple-select-label">Sort By...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          onChange={handleSort}
        >
            {
                options.map((option,id) => (
                    <MenuItem key={id} value={option}>{option}</MenuItem>
                ))
            }

        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SortData
