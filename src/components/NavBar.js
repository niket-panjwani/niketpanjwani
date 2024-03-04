import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'black', padding: '10px', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ marginRight: '20px' }}>Home</li>
        <li style={{ marginRight: '20px' }}>About</li>
        <li style={{ marginRight: '20px' }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;