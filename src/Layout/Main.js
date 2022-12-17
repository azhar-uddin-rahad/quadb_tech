import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Footer from "../pages/Share/Footer/Footer";
import Header from "../pages/Share/Header";
import LeftSidebar from "../pages/LeftSidebar/LeftSidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="4" className="d-none d-lg-block">
            <LeftSidebar></LeftSidebar>
          </Col>

          <Col lg="7">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
