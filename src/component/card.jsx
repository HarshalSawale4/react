import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return<div className="card">
    <div className="top">
      <img src={props.logo} alt="" />
      <p >save <Bookmark height={20} /></p>
    </div>
    <div className="mid">
      <div className="ps">
        <h1>{props.company}</h1>
        <p>{props.post}</p>
      </div>
      <h1 id='des'>{props.posting}</h1>
      <div className="but">
        <p>{props.t1}</p>
        <p>{props.t2}</p>
      </div>
    </div>
    <div className="bottom">
      <div className="price">
        <h3>{props.pay}</h3>
        <p >{props.loca}</p>
      </div>
      <p id='pbut'>Apply Now</p>
    </div>
   </div>
};

export default Card;