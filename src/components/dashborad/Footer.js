import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
      <footer className="bg-light py-3">
        <Container>
          <Row>
            <Col md={12} className="text-center text-md-left">
              <p>Adresse : 05 lot bouizgaren, Rte de Safi</p>
              <p>Téléphone : 05244-22222</p>
              <p>Email : contact@example.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
export default Footer;  