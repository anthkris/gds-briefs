import React from 'react';
import GimmeAnother from './GimmeAnotherButton';
import TwitterButton from './TwitterButton';

const Briefs = (props) => {
  return (
    <div className="design-brief">
      <h2 className="brief-title">{props.brief.title}</h2>
      <GimmeAnother getNewBrief={props.getNewBrief} />
      <TwitterButton />
      <h3 className="post-subtitle">Audience</h3>
      <p>{props.brief.audience}</p>
      <h3 className="brief-subtitle">
        <i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;Brief
      </h3>
      <div dangerouslySetInnerHTML={{__html: props.brief.brief }}/>
      <h3 className="deliverables">
        <i className="fa fa-archive" aria-hidden="true"></i>&nbsp;Deliverables
      </h3>
      <ul>
        {Object.values(props.brief.deliverables).map((deliverable, i) => {
           // Return the element. Also pass key
           return (<li key={i}>{deliverable}</li>)
        })}
      </ul>
      <h3 className="brief-subtitle">
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;Inspiration
      </h3>
      <ul>
        {Object.values(props.brief.inspiration).map((link, i) => {
           // Return the element. Also pass key
           return (<li key={i}><a href={link}>{link}</a></li>)
        })}
      </ul>
    </div>
  );
}

export default Briefs;
