import React from "react";
import './exclusive-square.css';


function ExcluisveSquare()  {
    return (
        <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src="/images/aj1-on-feet.jpg" alt="Air Jordan 1" />
          </div>
          <div className="card_title title-white">
            <p>Air Jordan 1</p>
          </div>
        </div>
      
        <div className="card 2">
          <div className="card_image">
            <img src="/images/yeezy-on-feet.jpg" alt="Yeezy" />
          </div>
          <div className="card_title title-white">
            <p>Yeezy</p>
          </div>
        </div>
      
        <div className="card 3">
          <div className="card_image">
            <img src="/images/dunk-on-feet.jpeg" alt="Dunk Low" />
          </div>
          <div className="card_title">
            <p>Dunk Low</p>
          </div>
        </div>
      
       
      </div>
      
    );
}

export default ExcluisveSquare;
