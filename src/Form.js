import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Button from './Button';
import './Form.css';

const Form = () => {
  const dropdownOptions = [
    { label: 'Main Template 1', link: '/option1' },
    { label: 'Main Template 2', link: '/option2' },
    { label: 'Main Template 3', link: '/option3' },
    { label: 'Main Template 4', link: '/option2' },
    { label: 'Main Template 5', link: '/option3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedOption }),
    });
    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <DropdownMenu options={dropdownOptions} onSelect={handleSelect} />
      <Button className="home-temp" text="Submit" />
    </form>
  );
};

export default Form;
