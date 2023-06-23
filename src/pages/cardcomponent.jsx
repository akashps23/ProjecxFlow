import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title }) => {
  return <div className="card">{title}</div>;
};

export default CardComponent;
