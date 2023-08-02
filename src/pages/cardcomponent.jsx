import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title,type,year,handleClick }) => {
  return (
    <div className="card">
      <button className="card-content" onClick={handleClick} style={{color:'white', opacity:'0.8'}}>
        <h1 className="card-title">{title}</h1>
        <p className="card-type">{type}</p>
        <p className="card-year">{year}</p>
      </button>
    </div>
  );
};

export default CardComponent;
