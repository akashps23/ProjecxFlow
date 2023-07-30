import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title,type,year }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-type">{type}</p>
        <p className="card-year">{year}</p>
      </div>
    </div>
  );
};

export default CardComponent;
