import React from 'react';

const Layout = ({ children }) => {
  return (
    <div id="main-content" className="feature">
      <div className="row justify-content-md-center">
        <div className="col-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
