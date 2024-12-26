import React from "react";

const TopHeader = () => {
  return (
      <div className="pre-header">
        <div className="pre-header-container w-container">
          <div className="pre-header-logos">
            <div className="pre-header-gov-text display-flexbox">
              <img
                src=" \images\logo\emblem-dark.png"
            
                className="pre-header-gov-emblem"
              />
              <a
                href="https://www.india.gov.in/"
                target="_blank"
                className="black-link">
                भारत सरकार
                <br />
                <strong>Government of India</strong>
              </a>
            </div>
            <div className="pre-header-gov-text">
              <a href="https://mod.gov.in/" target="_blank" className="black-link">
                रक्षा मंत्रालय
                <br />
                <strong>Ministry of Defence</strong>
              </a>
            </div>
            <div className="pre-header-gov-text">
              <a
                href="https://ddpmod.gov.in"
                target="_blank"
                className="black-link">
                रक्षा उत्पादन विभाग
                <br />
                <strong>Department of Defence Production</strong>
              </a>
            </div>
            <img
              src=" images\logo\gov-mod.png"
              className="pre-header-gov-logo"
            />
            <img
              src=" \images\logo\gov-india.png"
              
              className="pre-header-gov-logo"
            />
            <img
              src=" \images\logo\gov-ddp.png"
            
              className="pre-header-gov-logo"
            />
          </div>
           
        </div>
      </div>
  );
};

export default TopHeader;
