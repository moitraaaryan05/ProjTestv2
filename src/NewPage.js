import React from 'react';
import DropdownMenu from './DropdownMenu';
import Form from './Form';
import Button from './Button';
import Tile from './Tile';
import './NewPage.css';
import emblem1 from './bwlogo.png';

const NewPage = () => {

  return (
    <div className="main-page">
      <div className='page-head'>
        <h2 className='page-title'>Welcome to DBTree</h2>
        <h5 className='page-descript'>Get suggestion generating and comparison tools for your database solutions</h5>
      </div>
      <div className='home-section'>
        <h3 className='hsec-title'>Personalised Suggestion Generator</h3>
        <div className='question'></div>
        <hr></hr>
        <p className='sentence'>Get started with one of our customisable project templates</p>
        <section className="form-section">
          <Form />
        </section>
        <hr className='sepor'></hr><p className='separor'>OR</p>
        <p className='sentence'>Get creative and build your template from scratch</p>
        <Button text="Customise an empty template" link="/linkemptem" />
      </div>
      <div className='home-section'>
        <h3 className='hsec-title'>Solutions by DBTree</h3>
        <div className='question'></div>
        <hr></hr>
        <section className="tiles-section">
        <Tile
            title="Tile 1"
            description="This is the first tile."
            buttonText="Go to Page 1"
            buttonLink="/page1"
            photo={emblem1}
          />
          <Tile
            title="Tile 2"
            description="This is the second tile."
            buttonText="Go to Page 2"
            buttonLink="/page2"
            photo={emblem1}
          />
          <Tile
            title="Tile 3"
            description="This is the third tile."
            buttonText="Go to Page 3"
            buttonLink="/page3"
            photo={emblem1}
          />
        </section>
      </div>
    </div>
  );
};

export default NewPage;
