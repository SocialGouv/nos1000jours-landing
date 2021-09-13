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
      <br />
      <br />
      <NousContacter />
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
          <SectionTitle>
            Pourquoi une appli des 1000 premiers jours ?
          </SectionTitle>
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
              partum spécialement dédié aux parents, ainsi qu’une cartographie
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
              fonction de l'étape à laquelle vous vous trouvez. Ainsi qu'un
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
            Comment ce service fonctionne-t-il ?
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
              image="/img/timeline_landingpage.png"
              imageSpan={4}
            >
              Cet outil préventif permet de vous accompagner dès le début de
              cette formidable histoire de vie personnelle et familiale.
              <br />
            </FeatureRow>
            <FeatureRow
              title="Des articles pour comprendre, agir et être accompagné !"
              image="/img/listearticles_landingpage.png"
              imageSpan={4}
              reverse
            >
              Consultez les derniers messages de santé publique.
            </FeatureRow>
            <FeatureRow
              title="Des rappels pour alléger la charge mentale et un outil de prévention !"
              image="/img/calendrier_landingpage.png"
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
              <br />
              <br />
              Pour nous partager vos différents retours et idées d'amélioration
              de votre part, vous pouvez répondre en quelques minutes à&nbsp;
              <a
                href="https://startupdetat.typeform.com/to/kdw7bOcv"
                target="noopener noreferrer"
              >
                <u>ce questionnaire</u>
              </a>
              <br />
              Cette application est faite pour et avec vous.
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

function NousContacter() {
  return (
    <section id="nouscontacter">
      <div className="container">
        <br />
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Nous contacter
          </SectionTitle>
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Mail"
              image="/img/icone_information.png"
              imageSpan="1"
            >
              Vous avez une question ou une amélioration concernant
              l&apos;application 1000 premiers jours ?
              <br />
              Vous pouvez nous contacter à l&apos;adresse&nbsp;
              <a href="mailto:contact-nos1000jours@fabrique.social.gouv.fr">
                contact-nos1000jours@fabrique.social.gouv.fr
              </a>
              <br />
              <br />
              Vous avez passé le test EPDS sur l&apos;application et vous
              souhaitez dialoguer avec un référent maman blues&nbsp;?
              <br />
              Vous pouvez nous contacter à l&apos;adresse&nbsp;
              <a href="mailto:1000joursblues@fabrique.social.gouv.fr">
                1000joursblues@fabrique.social.gouv.fr
              </a>
            </FeatureRow>
          </Col>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Réseaux sociaux"
              image="/img/icone_information.png"
              imageSpan="1"
            >
              <Row>
                <Col>
                  <a
                    href="https://www.facebook.com/1000premiersjours-102432918754700"
                    target="noopener noreferrer"
                  >
                    <img
                      width={45}
                      src="/img/logo-facebook.png"
                      alt="Lien pour accéder à la page Facebook"
                    />
                  </a>
                  {"   "}
                  <a
                    href="https://www.instagram.com/1000premiersjours/"
                    target="noopener noreferrer"
                  >
                    <img
                      width={50}
                      src="/img/logo-instagram.png"
                      alt="Lien pour accéder à la page Instagram"
                    />
                  </a>
                  {"   "}
                  <a
                    href="https://www.linkedin.com/company/1000premiersjours/"
                    target="noopener noreferrer"
                  >
                    <img
                      width={50}
                      src="/img/logo-linkedin.png"
                      alt="Lien pour accéder à la page Linkedin"
                    />
                  </a>
                </Col>
              </Row>
              Nous sommes à votre écoute sur les réseaux sociaux
              <br />
              Retrouvez-nous sur Facebook, Instagram et Linkedin
              <br />
            </FeatureRow>
          </Col>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Nos partenaires"
              image="/img/icone_information.png"
              imageSpan="1"
            >
              Vous êtes un professionnel des 1000 premiers jours et travaillez
              auprès des (futurs) parents ou de leurs enfants
              <br />
              <br />
              <a href="/pdf/Affiche ETAT_pro.pdf" target="noopener noreferrer">
                Télécharger l&apos;affiche
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/pdf/Flyer ETAT_pro.pdf" target="noopener noreferrer">
                Télécharger le flyer
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
              <br />
              <br />
              Vous êtes parents
              <br />
              <br />
              <a
                href="/pdf/Affiche ETAT_parents.pdf"
                target="noopener noreferrer"
              >
                Télécharger l&apos;affiche
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="/pdf/Flyer ETAT_parents.pdf"
                target="noopener noreferrer"
              >
                Télécharger le flyer
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
              <br />
              <br />
              Vous êtes de la presse
              <br />
              <br />
              <a
                href="/pdf/Affiche ETAT_presse.pdf"
                target="noopener noreferrer"
              >
                Télécharger l&apos;affiche
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/pdf/Flyer ETAT_presse.pdf" target="noopener noreferrer">
                Télécharger le flyer
                <img width={50} src="/img/logo-pdf.png" alt="" />
              </a>
            </FeatureRow>
          </Col>
        </div>
      </div>
    </section>
  );
}
