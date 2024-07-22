import React from 'react';
import Button from './Button';
import './Tile.css';

const Tile = ({ title, description, buttonText, buttonLink, photo }) => {
  return (
    <div className="tile">
      <img src={photo} alt={title} className="tile-photo" />
      {/* <h2>{title}</h2> */}
      <p></p>
      <Button text={buttonText} link={buttonLink} />
    </div>
  );
};

export default Tile;
