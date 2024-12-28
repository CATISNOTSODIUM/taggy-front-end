import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 24;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




export default function MultipleSelectChip({tags, selectedTag, setSelectedTag}) {

  
  const handleChange = (event: SelectChangeEvent<typeof selectedTag>) => {
    const {
      target: { value },
    } = event;
    setSelectedTag(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  React.useEffect(() => {

  }, [selectedTag])
  
  return (
    <div className='flex flex-row gap-4 w-full'>
      {tags.map(
          (tag) => (
            <button 
              className='font-bold bg-white px-3 rounded-full border-2 border-yellow-300 hover:bg-yellow-300'
              key={tag} value={tag}
              onClick={(e) => {
                const res = [...selectedTag]
                res.push(e.target.value)
                setSelectedTag(res)
                console.log(selectedTag)
              }}
            > 
              {tag}
            </button>
          )
        )
      }
    </div>
  );
}

/*
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedTag}
          onChange={value => handleChange(value)}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {(tags).map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
*/