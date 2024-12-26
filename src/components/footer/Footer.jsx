import React from "react";

const Foooter = () => {
  return (
    <div>
      <footer className="footer">
        
        <div className="main-footer">
          <div className="footer-grid-container w-container">
            <div id="w-node-01f51c9b4b36-1c9b4b2c" className="footer-brand">
              <a href="#" className="footer-branding w-inline-block w--current">
                <img
                  src="\images\logo\main_logo.jpg"
                  height="100"
                  alt=""
                  style={{borderRadius:"5px", marginBottom:"20px",marginRight:""}}
                />
              </a>

              <div>
                <div className="auxillary-text next-to-logo">
                  Last updated on 14 March 2024
                </div>
                <div className="auxillary-text next-to-logo">
                  Last updated on 14-03-2024
                </div>
                <div className="auxillary-text next-to-logo">
                 <a href="https://www.linkedin.com/in/ganesh-gite-ab5b0b251/?trk=opento_nprofile_pfbanner" > Prepared By Ganesh Gite </a> 
                </div>
              </div>
            </div>
             
            <div className="footer-list"  >
              <div>
                <nav
                  role="navigation"
                  arialabelledby="block-footer2-menu"
                  id="block-footer2"
                  className="block block-menu navigation menu--footer2">
                  <h2 className="visually-hidden" id="block-footer2-menu">
                  </h2>

                  <ul>
                     
                    <li>
                      <a
                        href="/about-idex"
                        dataDrupalLinkSystemPath="node/81">
                        About iPAD
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact-Us"
                        dataDrupalLinkSystemPath="node/79">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/faq" dataDrupalLinkSystemPath="node/132">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div id="w-node-01f51c9b4b4e-1c9b4b2c" className="footer-list">
              <div className="footer-list-item contact">
                <span className="footer-list-item-light">Mail.</span>
                ipadgov@gmail.com
              </div>
              <div className="footer-icons">
                <a
                  rel="nofollow"
                  href=""
                  target="_blank"
                  className="footer-social-icon-blocks w-inline-block">
                  <img
                    src="/css/sites/all/themes/idex/images/Facebook.svg"
                    alt="facebook"
                    height="20"
                    className="footer-social-icon"
                  />
                </a>
                <a
                  rel="nofollow"
                  href=""
                  target="_blank"
                  className="footer-social-icon-blocks w-inline-block">
                  <img
                    src="/css/sites/all/themes/idex/images/LinkedIn.svg"
                    height="24"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  rel="nofollow"
                  href=""
                  target="_blank"
                  className="footer-social-icon-blocks w-inline-block">
                  <img
                    src="/css/sites/all/themes/idex/images/Twitter__x28_alt_x29_.svg"
                    height="20"
                    alt=""
                    className="footer-social-icon for-bigger-icon"
                  />
                </a>
                <a
                  rel="nofollow"
                  href=""
                  target="_blank"
                  className="footer-social-icon-blocks w-inline-block">
                  <img
                    src="/css/sites/all/themes/idex/images/YouTube__x28_alt_x29_.svg"
                    height="21"
                    alt=""
                    className="footer-social-icon for-bigger-icon"
                  />
                </a>
                <a
                  rel="nofollow"
                  href=""
                  target="_blank"
                  className="footer-social-icon-blocks w-inline-block">
                  <img
                    src="/sites/all/themes/idex/images/instagram__icon_.png"
                    height="21"
                    alt=""
                    className="footer-social-icon for-bigger-icon"
                  />
                </a>
              </div>
              <div className="footer-list-item contact">
                <div>
                  <div id="block-visitors" className="block-visitors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foooter;
