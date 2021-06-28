import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import { FeatureRow } from "../src/components/FeatureRow";
import { Layout } from "../src/components/Layout";

export default function index() {
  return (
    <Layout showHeader>
      <br />
      <br />
      <Pourquoi />
      <br />
      <br />
      <Comment />
      <br />
      <br />
      <Qui />
    </Layout>
  );
}

const SectionTitle = styled.h2`
  color: var(--primary);
`;

function Pourquoi() {
  return (
    <section id="pourquoi">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle>Pourquoi les 1000 premiers jours ?</SectionTitle>
          <br />
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <p className="text-left">
              <strong>
                Le compagnon numérique "les 1000 premiers jours" permet de
                suivre les étapes du projet de parentalité aux 2 ans de votre
                enfant.
              </strong>
            </p>
            <p style={{ color: "var(--info)" }} className="text-left">
              <strong>
                Contient un outil quasi unique en son genre qui aide à détecter
                la dépression post-partum.
              </strong>{" "}
            </p>
          </Col>
        </div>
        <br />
        <br />
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Un outil de prévention"
              image="/img/icone_prevention.png"
              imageSpan="1"
            >
              Un autodiagnostic pour évaluer le risque de la dépression post
              partum spécialement dédié aux parents ainsi qu’une cartographie
              pour trouver un accompagnement adapté et géolocalisé.
            </FeatureRow>
          </Col>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Un outil d'information"
              image="/img/icone_information.png"
              imageSpan="1"
            >
              Des articles rédigés par des professionnels et proposés en
              fonction de l'étape à laquelle vous vous trouver. Ainsi qu'un
              calendrier présentant tous les événements des 1000 premiers jours.
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  );
}

function Comment() {
  return (
    <section id="comment">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Comment ce service fonctionne ?
          </SectionTitle>
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <strong />{" "}
          </Col>
        </div>
        <br />
        <br />
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="La bonne information au bon moment !"
              image="/img/ecran_header.png"
              imageSpan={4}
            >
              Cet outil préventif permet de vous accompagner dès le début de
              cette formidable histoire de vie personnelle et familiale.
              <br />
            </FeatureRow>
            <FeatureRow
              title="Des articles pour comprendre, agir et être accompagné !"
              image="/img/ecran_listearticles.png"
              imageSpan={4}
              reverse
            >
              Consulter les derniers messages de santé publique.
            </FeatureRow>
            <FeatureRow
              title="Des rappels pour alléger la charge mentale et un outil de prévention !"
              image="/img/ecran_calendrier.png"
              imageSpan={4}
            >
              Un calendrier personnalisé afin de suivre chaque étape du parcours
              1000 jours et de consulter les derniers messages de santé
              publique.
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  );
}

function Qui() {
  return (
    <section id="qui">
      <div className="container">
        <br />
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Qui sommes-nous ?
          </SectionTitle>
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <p>
              <strong>
                Ce service est proposé par le ministère de la Solidarité et de
                la Santé dans le cadre de la Protection de l'Enfance.
                <br />
                Il est développé par la Fabrique Numérique des Ministères
                Sociaux.
              </strong>
            </p>
          </Col>
        </div>
      </div>
      <div className="text-center">
        <img
          src="/img/logo-ministere.png"
          alt="Logo Minisères des Solidarités et de la Santé"
          width="20%"
        />
        <img
          src="/img/logo-fabrique.png"
          alt="Logo Fabrique numérique des ministères sociaux"
          width="15%"
        />
      </div>
    </section>
  );
}
