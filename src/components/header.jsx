import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="gradient-header shadow-lg mb-4">
      <Container>
        <div className="py-4">
          <h1 className="text-white text-center display-4 fw-bold mb-0" style={{letterSpacing: '2px'}}>
            Keeper
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;