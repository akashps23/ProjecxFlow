import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
