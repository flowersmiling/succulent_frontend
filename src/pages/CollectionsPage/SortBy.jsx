import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function SortBy({sort, sortOpen, handleSortChange, handleSortClose, handleSortOpen}) {
  return (
    <div>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={sortOpen}
          onClose={handleSortClose}
          onOpen={handleSortOpen}
          value={sort}
          label="Age"
          onChange={handleSortChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Sort By A-Z</MenuItem>
          <MenuItem value={2}>Sort By Lowest Price</MenuItem>
          <MenuItem value={3}>Sort By Highest Price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
