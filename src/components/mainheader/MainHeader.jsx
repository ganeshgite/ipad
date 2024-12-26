import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <div className="main-header">
        <div className="main-header-container w-container">
          <a href="" className="main-header-branding w-inline-block w--current">
            <img src="\images\logo\main_logo.jpg" className="header-brand" />
          </a>

          <div>
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                data-delay="0"
                data-w-id="3aeb3930-bf74-142b-cd8d-d5664f30a943"
                className="header-menu-block w-dropdown">
                <div
                  className="collapse navbar-collapse text-center "
                  id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto topnav">
                    <li className="nav-item dropdown mt-4 header-link">
                      <div
                        className="main-header-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        About Us{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>

                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block  DIO">
                        <Link
                            to="/objective"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Mission </div>
                          </Link>
                        </li>
                        <li className="nav-item header-link nav-list-block  iDEX">
                        <Link
                            to="/objective"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Vision </div>
                          </Link>
                        </li>
                        <li className="nav-item header-link nav-list-block Organizational Structure">
                          <Link
                            to="/objective"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Objectives </div>
                          </Link>
                        </li>

                        <li className="nav-item header-link nav-list-block FAQ">
                          <a
                            href="/faq"
                            className="main-header-link w-inline-block">
                            <div className="header-link">FAQ</div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Contact-Us">
                          <a
                            href="/contact-Us"
                            className="main-header-link w-inline-block">
                            <div className="header-link">Contact-Us</div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Grievance/Queries and Feedback">
                          <a
                            href="/node/695"
                            className="main-header-link w-inline-block">
                            <div className="header-link">Feedback</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mt-4 dropdown header-link">
                      <div
                        className="main-header-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {" "}
                        Initiatives{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>
                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block Database">
                          <a
                            href="https:srijandefence.gov.in/"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Srijan </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Guidelines">
                          <a
                            href="https://idex.gov.in/"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link">iDEX</div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Publications">
                          <a
                            href="https://www.sidm.in/"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> SIDM </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Scheme for iDEX">
                          <a
                            href="https://www.makeinindia.com/defence-industrial-corridors-india"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link">
                              {" "}
                              Defence Ind Corridors{" "}
                            </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block ADITI Scheme ">
                          <a
                            href="https://www.investindia.gov.in/foreign-direct-investment"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> FDI </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Innovation Showcase">
                          <a
                            href="/innovation-showcase"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Collaboration </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Useful Links">
                          <a
                            href="/node/70#usefullinks"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link">
                              {" "}
                              Critical Technologies{" "}
                            </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Annual Return">
                          <a
                            href="/annual-report"
                            className="main-header-link w-inline-block">
                            <div className="header-link">
                              {" "}
                              Industrial Licence{" "}
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown header-link">
                      <div
                        className="main-header-link mt-4"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {" "}
                        Industry Links{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>
                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block Partner Incubator">
                          <a
                            href="/partners"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Guidelines </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                            href="https://srijandefence.gov.in/Participate"
                            className="main-header-link w-inline-block">
                            <div className="header-link">
                              {" "}
                              How To Participate{" "}
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown header-link">
                      <div
                        className="main-header-link mt-4"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {" "}
                        PIL{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>
                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block Database">
                          <a
                            href="https://www.srijandefence.gov.in/DMA_PIL1.pdf"
                            target="_blank"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> First PIL </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Guidelines">
                          <a
                          target="_blank"
                            href="https://mod.gov.in/sites/default/files/OM%20LI04621.pdf"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Second PIL </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Publications">
                          <a
                          target="_blank"
                            href="https://mod.gov.in/dod/sites/default/files/3pIl.pdf"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Third PIL </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block Scheme for iDEX">
                          <a
                          target="_blank"
                            href="https://www.mod.gov.in/sites/default/files/4th-PIL_comp.pdf"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Fourth PIL </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block ADITI Scheme ">
                          <a
                          target="_blank"
                            href="https://mod.gov.in/sites/default/files/wn_041023.pdf"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Fifth PIL </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown header-link mt-4">
                      <div
                        className="main-header-link"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Publications{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>
                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block Partner Incubator">
                          <a
                          target="_blank"
                            href="https://www.ddpmod.gov.in/dpepp"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> DPEPP 2020 </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href="https://www.ddpmod.gov.in/sites/default/files/DAP%202020%20%2011%20Nov%2021_0.pdf"
                            className="main-header-link w-inline-block">
                            <div className="header-link">DAP 2020 </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href=""
                            className="main-header-link w-inline-block">
                            <div className="header-link"> SPP </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown header-link">
                      <div
                        className="main-header-link mt-4"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {" "}
                        Stakeholders{" "}
                        <div className="header-menu-arrow w-icon-dropdown-toggle"></div>
                      </div>
                      <ul
                        className="dropdown-menu header-menu-dropdown w-dropdown-list nav-list"
                        role="menu"
                        aria-labelledby="dLabel">
                        <li className="nav-item header-link nav-list-block Partner Incubator">
                          <a
                          target="_blank"
                            href="https://indianarmy.nic.in/"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Indian Army </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href="https://indianairforce.nic.in/"
                            className="main-header-link w-inline-block">
                            <div className="header-link">
                              {" "}
                              Indian Air Force{" "}
                            </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href="https://www.indiannavy.nic.in/"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> Indian Navy </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href="https://www.drdo.gov.in/drdo/"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> DRDO </div>
                          </a>
                        </li>
                        <li className="nav-item header-link nav-list-block iIH">
                          <a
                          target="_blank"
                            href="https://www.hal-india.co.in/men"
                            className="main-header-link w-inline-block">
                            <div className="header-link"> HAL </div>
                          </a>
                        </li>
                      </ul>
                    </li>

                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
