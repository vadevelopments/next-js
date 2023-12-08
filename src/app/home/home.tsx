'use client'

import React, { useState } from 'react';
import { IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            sx={{
              color: 'white',
              backgroundColor: "GrayText"
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <BarChart
          // xAxis={[{ scaleType: 'band', data: ['group A'] }]}
          series={[{ data: [4, 3, 5, 1, 6, 3, 2, 5, 6] }]}
          width={500}
          height={300}
      />
    </main>
  );
};

export default Home;
