import React from 'react';

const TwitterButton = (props) => {
  return (
    <button id="twitterButton" className="color-red get-another ml-md-3">
      <a className="twitter-share-button" href="https://twitter.com/intent/tweet?url=https://godesignsomething.co&hashtags=GDSChallenge&text=Check out my latest GDS project:">
        <i className="fa fa-twitter" aria-hidden="true"></i> Tweet it Out
      </a>
    </button>
  );
}

export default TwitterButton;
