import React from "react";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1*/}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
            </ul>
          </div>
          {/* Column 2*/}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
            </ul>
          </div>
          {/* Column 3*/}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
            </ul>
          </div>
          {/* Column 4*/}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
              <li>Lorem </li>
            </ul>
          </div>
        </div>
        {/* Footer bottom*/}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App - All Right
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
