import React from "react";
import {NavLink , Link} from "react-router-dom"

const Data = () => {
  return (
    <div>
      <div className="general-container w-container mt-5" style={{marginBottom:"150px"}}>
        <div className="">
          <div className="home-whatwedo-left-block mobile-visible">
            <h4 className="content-heading-l3 about "> Dashboards </h4>

            <div>
              <div
                className="views-element-container block-views block-views-block-what-we-do-block-1"
                id="block-views-block-what-we-do-block-1">
                <div>
                  <div className="js-view-dom-id-6b9b6605aa73c057bb0f71ed927fbbee8b6a6ed8cc9e11ebc5ca5c4c1dcef8a7">
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="text-block">
                            <p>
                              Provision for analysis of Indigenization efforts
                              carried out for requirements projected by Defence
                              services
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="what-we-do-points">
            <div>
              <div
                className="views-element-container block-views block-views-block-what-do-right-block-1"
                id="block-views-block-what-do-right-block-1">
                <div>
                  <div className="js-view-dom-id-8b59520faf4b5f0c2b12e0884fe2d415c55f7934454d9985187f6ac339c9077e">
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                              <Link to="/dashboard">Indian Army </Link>
                            </div>
                            <div className="smaller-text-block">
                              
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                             <Link to="/dashboard/airforce" > Indian Air Force  </Link>
                            </div>
                            <div className="smaller-text-block">
                              <p> </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                          <Link to="/dashboard/navy" >    Indian Navy </Link>
                            </div>
                            <div className="smaller-text-block">
                              <p>
                                
                              </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                            <Link to="/dashboard/drdo" >  DRDO  </Link>
                              </div>
                            <div className="smaller-text-block">
                              <p>
                                
                              </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                              
                            <Link to="/dashboard/hal" >  HAL </Link> </div> 
                            <div className="smaller-text-block">
                              <p>
                                 
                              </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="views-row">
                      <div className="views-field views-field-nothing">
                        <span className="field-content">
                          <div className="head-text-grid-block transparent-fluid-top-border">
                            <div className="head-text-grid all-caps">
                            <Link to="/dashboard/hal" >  Private Industry </Link>
                            </div>
                            <div className="smaller-text-block">
                              <p>
                                
                              </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
