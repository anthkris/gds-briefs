import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <ul className="list-inline justify-content-center">
              <li>
                <a href="https://twitter.com/anthkris" className="link-color-red footer-links">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://dearinstructionaldesigner.com" className="link-color-red footer-links">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-podcast fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://gumroad.com/l/eOwj" className="link-color-red footer-links">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-book fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">Copyright © Go Design Something 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
