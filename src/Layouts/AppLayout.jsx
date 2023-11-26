import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Col, Row } from "reactstrap";

export default function AppLayout({ children }) {
  return (
    <Row>
      <Col lg={3} md={3}>
        <Navbar />
      </Col>
      <Col lg={9} md={9}>
        {children}
      </Col>
    </Row>
  );
}
