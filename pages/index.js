/* eslint-disable jsx-a11y/no-static-element-interactions */
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
      <WidgetEpds />
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

function WidgetEpds() {
  return (
    <section id="widgetepds">
      <div className="container">
        <br />
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Évaluez-vous dès aujourd&apos;hui
          </SectionTitle>
          <br />
          <iframe
            title="Widget EPDS"
            src="https://nos1000jours-blues-epds-widget.fabrique.social.gouv.fr?source=1000j-landing"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
          <br />
          <br />
          <div className="zero-accident bg-bleu-france">
            <div className="container">
              <div className="main">
                <img
                  className="rep-francaise-img"
                  src="/img/logo-ministere.png"
                  height="100"
                  alt="Logo Minisères des Solidarités et de la Santé"
                />
                <Row>
                  <Col>
                    <img
                      src="/img/acvc.png"
                      width="150"
                      height="150"
                      alt="Logo Zéro accident : Une jeu d'enfant"
                    />
                  </Col>
                  <Col>
                    <img
                      src="/img/logo-jouer.png"
                      width="140"
                      height="140"
                      alt="Logo 1000 premiers jours"
                    />
                  </Col>
                </Row>
                <div className="slogan">
                  Futurs parents, nouveaux parents, testez, en jouant, vos
                  connaissances en prévention des accidents de la vie courantes
                  chez les enfants entre 0 et 4 ans
                </div>
                <br />
                <a
                  className="fr-btn fr-btn--lg start-btn"
                  href="./zeroaccident/index.html"
                >
                  Commencer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Qui() {
  const [displayDetails, setDisplayDetails] = React.useState(false);
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
              <div className="border-top border-bottom">
                <div
                  onClick={() => {
                    setDisplayDetails(!displayDetails);
                  }}
                  onKeyDown={() => {
                    setDisplayDetails(!displayDetails);
                  }}
                >
                  <div style={{ paddingTop: 16 }}>
                    <FeatureRow
                      width={10}
                      image={!displayDetails && "/img/icone_collapse.png"}
                      imageSpan="1"
                      reverse
                      noMarginBottom
                    >
                      <div className="text-left">
                        Les 1000 premiers jours est un service proposé par le
                        ministère de la Solidarité et de la Santé en
                        collaboration avec les professionnels de santé et les
                        parents.
                      </div>
                    </FeatureRow>
                  </div>
                </div>
                <br />
                {displayDetails && (
                  <div className="text-left">
                    Le compagnon numérique privilégié des parents durant les
                    1000 premiers jours : du projet de parentalité aux 3 ans de
                    l’enfant
                    <br />
                    Pour faciliter l’accès des (futurs) parents à l’information
                    et aux services aux familles, l’application propose quatre
                    fonctionnalités adaptées à leur quotidien :
                    <br />
                    <br />
                    <FeatureRow
                      width="150%"
                      image="/img/icone_timeline.png"
                      imageSpan="1"
                    >
                      1. Le parcours structuré en huit étapes clefs du projet de
                      parentalité aux 3 ans de l’enfant. Il propose une{" "}
                      <strong>sélection d’articles adaptée au moment</strong>,
                      en fonction de son avancée dans le parcours des 1000
                      premiers jours. Il permet de{" "}
                      <strong>
                        disposer au bon moment de l’information la plus utile
                        pour le bien-être et la santé de l’enfant et santé de
                        l’enfant et de ses parents.
                      </strong>
                    </FeatureRow>
                    <FeatureRow
                      width="150%"
                      image="/img/icone_calendrier.png"
                      imageSpan="1"
                    >
                      2. Le calendrier offre aux parents{" "}
                      <strong>
                        une visibilité d’ensemble sur les évènements et
                        rendez-vous
                      </strong>{" "}
                      qui ponctuent le parcours 1000 jours. Il participe au bon
                      suivi de de leur santé et de celle de leur enfant. ,
                      répond à un besoin d’organisation dans le quotidien des
                      parents , et{" "}
                      <strong>
                        permet de réduire la charge mentale liée à la
                        parentalité.
                      </strong>
                    </FeatureRow>
                    <FeatureRow
                      width="150%"
                      image="/img/icone_cartographie.png"
                      imageSpan="1"
                    >
                      3. La cartographie permet aux parents, via la
                      géolocalisation, d’identifier en un coup d’œil leurs
                      territoire des 1000 premiers jou rs :{" "}
                      <strong>
                        les lieux et les ressources présents autour d’eux.
                      </strong>
                    </FeatureRow>
                    <FeatureRow
                      width="150%"
                      image="/img/icone_epds.png"
                      imageSpan="1"
                    >
                      4. Un outil de prévention de la{" "}
                      <strong>dépression post-partum</strong> est rendu
                      accessible via l’application. En invitant à{" "}
                      <strong>se poser les bonnes questions</strong>, il permet
                      aux parents d’être sensibilisés sur ce sujet et, le cas
                      échéant, d’être incités à{" "}
                      <strong>
                        prendre contact avec un professionnel de santé et être
                        orientés
                      </strong>{" "}
                      vers les professionnels qui pourront prendre le relai en
                      cas de difficulté.
                    </FeatureRow>
                    <p className="text-left">
                      <strong>
                        Une application conçue pour et avec les parents
                      </strong>
                      , développée par une start-up d’Etat.
                      <br />
                      L’application 1000 premiers jours est portée par la
                      Direction générale de la cohésion sociale et développée au
                      sein d’une start-up d’Etat de la Fabrique Numérique des
                      Ministères sociaux.
                      <br />
                      Conçue pour répondre aux besoins concrets des parents tout
                      au long du parcours 1000 jours, l’application, repose
                      essentiellement sur une démarche de co-construction avec
                      les (futurs) parents de jeunes enfants, les
                      professionnels, et les associations qui les entourent et
                      les accompagnent.
                      <br />A ce titre,{" "}
                      <strong>
                        5000 parents ont été consultés dans la phase
                        d’investigation
                      </strong>{" "}
                      en 2020. Des ateliers participatifs « expérience
                      utilisateurs » sont organisés avec le laboratoire
                      d’innovation publique de la Caisse nationale des
                      allocations familiales, le CafLab, en lien avec les
                      partenaires du chantier. Ils permettent de poursuivre
                      cette démarche de co-construction et de réfléchir – avec
                      des (futurs) parents et des professionnels des 1000
                      premiers jours – aux usages de l’application.
                    </p>
                  </div>
                )}
              </div>
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
