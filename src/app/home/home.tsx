'use client'

import React, { useState } from 'react';
import { IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useYScale, ResponsiveChartContainer, BarPlot, ChartsXAxis, ChartsYAxis, ChartsReferenceLine, ChartsTooltip } from '@mui/x-charts';

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const data = [
    { category: 'bar A', value: 2 },
    { category: 'bar B', value: 5 },
    { category: 'bar C', value: 6 },
  ];

  const barColor = (prop:any) => {
    if (prop > 6) {
      return "red";
    } else if (prop > 4) {
      return "green";
    } else {
      return "yellow";
    }
  }

  const SlotBarElement = (props:any) =>{
    const yAxisScale = useYScale('left_axis_id')
    const yAxisValue = yAxisScale.invert(props.style.y.animation.to)
    const isBelowBar = yAxisValue < 8.5
    const color = isBelowBar ? '#ff0000' : '#00ff00'

    // work around export of BarElement
    return <rect
      fill={color}
      height={props.style.height.animation.to}
      width={props.style.width.animation.to}
      x={props.style.x.animation.to}
      y={props.style.y.animation.to}
    />
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            sx={{
              color: 'white',
              backgroundColor: "GrayText",
              '& ::-ms-reveal': {
                display: 'none'
              }
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
        xAxis={[
          {
            id: 'barCategories',
            data: ['bar A', 'bar B', 'bar C'],
            scaleType: 'band',
          },
        ]}
        // yAxis={{
        //   left: { drawGridLines: false, granularityEnabled: true, granularity: 1 },
        //   right: { drawGridLines: false, granularityEnabled: true, granularity: 1 },
        // }}
        series={[{ data: [ 2, 5, 6] }]}
        width={500}
        height={300}
        sx={{
          '& .MuiBarElement-root': {
            fill: 'green'
          },
          'g rect:nth-child(even)': {
            fill: 'red'
          }
        }}
      />


      <ResponsiveChartContainer
          height={350}
          series={[
            { type: 'bar', data: [11, 10, 1, 9], yAxisKey: 'left_axis_id'},
          ]}
          xAxis={[{ scaleType: 'band', data: ['11/15', '11/16', '11/17', '11/18'] }]}
          yAxis={[{ id: 'left_axis_id'}]}
      >
        <BarPlot slots={{bar: SlotBarElement}}/>
        <ChartsXAxis/>
        <ChartsYAxis axisId="left_axis_id" position="left" />
        <ChartsReferenceLine label={'8'} labelAlign="end" y={8} zIndex={2} lineStyle={'dotted'} />
        <ChartsReferenceLine label={'6'} labelAlign="end" y={6} zIndex={-2}/>
        <ChartsTooltip/>
      </ResponsiveChartContainer>

    </main>
  );
};

export default Home;
