import Head from "next/head";
import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";

export function Layout({ showHeader, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>L'application des 1000 premiers jours</title>
      </Head>
      <Nav />
      {showHeader && <Header />}
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}

export function ContentLayout({ title, children }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Row>
        <Col xs={{ offset: 1, span: 10 }}>
          <Jumbotron style={{ padding: "2em", marginTop: 30 }}>
            <h1>{title}</h1>
          </Jumbotron>
          {children}
        </Col>
      </Row>
    </Layout>
  );
}

export function SimpleLayout({ title, children }) {
  return (
    <Row>
      <Col xs={{ offset: 1, span: 10 }}>
        <Jumbotron style={{ padding: "2em", marginTop: 30 }}>
          <h1>{title}</h1>
        </Jumbotron>
        {children}
      </Col>
    </Row>
  );
}
