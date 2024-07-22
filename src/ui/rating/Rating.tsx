import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface Props{
    rating:number
}

export default function BasicRating({rating}:Props) {
  const [value, setValue] = React.useState<number | null>(rating || null);
  // readOnly
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
