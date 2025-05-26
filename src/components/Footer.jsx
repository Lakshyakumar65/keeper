import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 py-4">
      <Container>
        <p className="text-center text-muted small mb-0">
          Copyright ⓒ {year} - Built by Lakshya
        </p>
      </Container>
    </footer>
  );
};

export default Footer;