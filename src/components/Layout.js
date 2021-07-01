import React from "react";
import Head from "next/head";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ showHeader, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>1000 premiers jours</title>
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
