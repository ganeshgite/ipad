import React from "react";
import "../hal/hal.css";

const Hal = () => {
  return (
    <>
      <h1> Hal Dashboards </h1>
      <div className="gg">
        <div className="airforce-row mt-5">
          <div className="airforce-box1">
            <img
              src="\src\components\simple-dashboard\hal\hal-graph1.jpeg"
              width="450px"
            />
          </div>
          <div className="airforce-box2">
            <img
              src="\src\components\simple-dashboard\hal\hal-graph2.jpeg"
              width="450px"
            />
          </div>
          <div className="airforce-box3">
            <img
              src="\src\components\simple-dashboard\hal\hal-graph3.jpeg"
              width="450px"
            />
          </div>
          <div className="airforce-box1">
            <img
              src="\src\components\simple-dashboard\hal\hal-graph4.jpeg"
              width="450px"
            />
          </div>
           
        </div>
      </div>
    </>
  );
};

export default Hal;
