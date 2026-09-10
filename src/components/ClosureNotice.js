import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

export function ClosureNotice() {
  return (
    <Container as="section" id="fermeture" className="mt-4 mb-2">
      <Row>
        <Col xs={{ offset: 1, span: 10 }}>
          <Alert variant="warning" className="p-4 mb-0">
            <Alert.Heading as="h2">
              L’application 1000 jours fermera le 30 septembre 2026
            </Alert.Heading>
            <p>
              Après plusieurs années à accompagner les futurs parents et les
              parents au quotidien, l’application 1000 jours fermera
              définitivement le 30 septembre 2026.
            </p>
            <p>
              Jusqu’à cette date, vous pouvez continuer à utiliser
              l’application normalement.
              <br />
              Après le 30 septembre, l’application et ses fonctionnalités ne
              seront plus accessibles.
            </p>
            <p>
              Pour continuer à bénéficier d’informations fiables et de conseils
              pendant la grossesse et les deux premières années de votre
              enfant, rendez-vous sur le site{" "}
              <a
                href="https://www.1000-premiers-jours.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="alert-link"
              >
                1000-premiers-jours.fr
              </a>
              .
            </p>
            <p>
              Nous vous invitons également à télécharger l’application et à
              activer{" "}
              <a
                href="https://www.monespacesante.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="alert-link"
              >
                Mon espace santé
              </a>{" "}
              pour retrouver des informations et des conseils pendant votre
              grossesse, et suivre votre santé ainsi que celle de votre famille
              tout au long de la vie.
            </p>
            <p>
              Nous remercions chaleureusement toutes celles et ceux qui ont
              utilisé l’application et contribué, par leurs retours, à la faire
              évoluer au fil des années.
            </p>
            <p className="mb-0">
              <strong>L’équipe 1000 jours</strong>
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
