import React, { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import TopHeader from "../../topheader/TopHeader";
import MainHeader from "../../mainheader/MainHeader";

const Drdo = () => {
    function getData() {
        return [
          {
            quarter: "Q1",
            petrol: 200,
            diesel: 100,
          },
          {
            quarter: "Q2",
            petrol: 300,
            diesel: 130,
          },
          {
            quarter: "Q3",
            petrol: 350,
            diesel: 160,
          },
          {
            quarter: "Q4",
            petrol: 400,
            diesel: 200,
          },
        ];
      }
      
      const [options, setOptions] = useState({
        title: {
          text: "Annual Fuel Expenditure",
        },
        data: getData(),
        series: [
          {
            type: "line",
            xKey: "quarter",
            yKey: "petrol",
            yName: "Petrol",
          },
          {
            type: "line",
            xKey: "quarter",
            yKey: "diesel",
            yName: "Diesel",
          },
        ],
      });
    
      return(
        <> 
        <TopHeader />
        <MainHeader />
        <br/>
            <div style={{height:"600px"}} >

            <AgChartsReact options={options} />
            </div>

        </>
      )

    };
    

export default Drdo
