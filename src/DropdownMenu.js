import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option.label);
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelect(option)}
                onKeyDown={() => handleSelect(option)}
              >
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
