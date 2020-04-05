import React from 'react';

const GimmeAnother = (props) => {
  return (
    <button id="getAnother" className="get-another color-red" onClick={props.getNewBrief}>
      <i className="fa fa-refresh" aria-hidden="true"></i> Gimme Another
    </button>
  );
}

export default GimmeAnother;
