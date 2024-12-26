import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-home"></i>
                </span>
                Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span>Overview</span>
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="\src\components\simple-dashboard\assets\images\dashboard\circle.svg"

                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Sales{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">$ 15,0000</h2>
                    <h6 className="card-text">Increased by 60%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="\src\components\simple-dashboard\assets\images\dashboard\circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Orders{" "}
                      <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">45,6334</h2>
                    <h6 className="card-text">Decreased by 10%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="\src\components\simple-dashboard\assets\images\dashboard\circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Visitors Online{" "}
                      <i className="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">95,5741</h2>
                    <h6 className="card-text">Increased by 5%</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <h4 className="card-title float-left">
                        Visit And Sales Statistics
                      </h4>
                      <div
                        id="visit-sale-chart-legend"
                        className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                    </div>
                    <canvas id="visit-sale-chart" className="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Traffic Sources</h4>
                    <canvas id="traffic-chart"></canvas>
                    <div
                      id="traffic-chart-legend"
                      className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

       



      

 

      <script src="/js/dashboard/chart.js" ></script>
    <script src="/js/dashboard/dashboard.js" ></script>
    <script src="/js/dashboard/vendor.bundle.base.js" ></script>
    <script src="/js/dashboard/Chart.min.js" ></script>
    <script src="/js/dashboard/hoverable-collapse.js" ></script>
    <script src="/js/dashboard/off-canvas.js" ></script>
    <script src="/js/dashboard/dashboard.js" ></script>
    <script src="/js/dashboard/chart.js" ></script> 

    <script src="\js\dashboard\chart.js" ></script>
    <script src="\js\dashboard\dashboard.js" ></script>
    <script src="\js\dashboard\hoverable-collapse.js" ></script>
    <script src="\js\dashboard\jquery.cookie.js" ></script>
    <script src="\js\dashboard\off-canvas.js" ></script>
    <script src="\js\dashboard\vendor.bundle.base.js" ></script>
    <script src="\js\dashboard\dashboard.js" ></script>


    </>
  );
};

export default Dashboard;
