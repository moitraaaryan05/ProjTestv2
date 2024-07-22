import React from 'react';
import Button from './Button';
import './Tile.css';

// Define the prop types for the Tile component
interface TileProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  photo: string;
}

const Tile: React.FC<TileProps> = ({ title, description, buttonText, buttonLink, photo }) => {
  return (
    <div className="tile">
      <img src={photo} alt={title} className="tile-photo" />
      {/* <h2>{title}</h2> */}
      <p>{description}</p>
      <Button text={buttonText} link={buttonLink} />
    </div>
  );
};

export default Tile;
