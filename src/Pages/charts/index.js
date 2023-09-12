import React, { useState } from 'react'
import Chart from "react-apexcharts";

export default function Charts() {
    const [state,setState] =useState({
        options: {
          chart: {
            id: "basic-bar"
          
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [3, 42, 46, 55, 66, 40, 76, 81]
          }
        ]
      
    })
  return (
    <div className='row'>
    <div className="col-4">
     <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
             <Chart
              options={state.options}
              series={state.series}
              type="line"
              
              width="500"
            />
               <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
            />
              
            </div>
           
      
    </div>
   
  )
}


