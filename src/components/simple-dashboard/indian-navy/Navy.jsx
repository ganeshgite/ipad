import React, { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import TopHeader from "../../topheader/TopHeader";
import MainHeader from "../../mainheader/MainHeader";

 
 const Navy = () => {
  function getData() {
    return [
      {
        quarter: "Q1'18",
        iphone: 140,
        mac: 16,
        ipad: 14,
        wearables: 12,
        services: 20,
      },
      {
        quarter: "Q2'18",
        iphone: 124,
        mac: 20,
        ipad: 14,
        wearables: 12,
        services: 30,
      },
      {
        quarter: "Q3'18",
        iphone: 112,
        mac: 20,
        ipad: 18,
        wearables: 14,
        services: 36,
      },
      {
        quarter: "Q4'18",
        iphone: 118,
        mac: 24,
        ipad: 14,
        wearables: 14,
        services: 36,
      },
    ];
  }
  const [options, setOptions] = useState({
    title: {
      text: "Apple's Revenue by Product Category",
    },
    
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData(),
    options:{
      maintainAspectRatio:false
    },
    
    sync: {
      zoom: false,
  },
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
      },

    ],
  });

  return (
    <>
     <TopHeader />
    <MainHeader />
    <br/>
    <div style={{height:"600px"}} >

    <AgChartsReact options={options} />;
    </div>
    </>
  )

};

 
 
 export default Navy
 