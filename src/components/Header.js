import React from "react";
import { Row, Col } from "react-bootstrap";

export function Header() {
  return (
    <header style={{ height: 700, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          backgroundImage: `url(/img/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div style={{ position: "absolute", top: 150, width: "100%" }}>
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-lg-8 my-auto"
              style={{
                background: "rgb(66,66,66,0.5)",
                borderRadius: 10,
                padding: "2em",
              }}
            >
              <div style={{ color: "white" }}>
                <h1 className="mb-5">
                  <b>L'application 1000 premiers jours</b>
                </h1>
                <h3>Le compagnon privilégié des 1000 premiers jours</h3>
                Un service proposé par le ministère de la Santé et des
                solidarités en collaboration avec les professionnels de santé et
                les parents
                <br />
                <br />
                <Row>
                  <Col
                    xs={12}
                    md={{ span: 4, offset: 2 }}
                    className="text-center"
                  >
                    <a href="https://apps.apple.com/us/app/1000-premiers-jours/id1573729958" target="noopener noreferrer">
                      <img
                        width={200}
                        src="/img/dnl_apple.svg"
                        alt="Lien pour télécharger l'application sur l'Apple store"
                      />
                    </a>
                    <br />
                    <br />
                    <a href="#" target="noopener noreferrer" className="d-none d-sm-block">
                      <img
                        width={149}
                        src="/img/QR_apple.png"
                        alt="QR code pour l'Apple store"
                      />
                    </a>
                  </Col>
                  <Col
                    xs={12}
                    md={{ span: 4, offset: -2 }}
                    className="text-center"
                  >
                    <a href="https://play.google.com/store/apps/details?id=com.fabrique.millejours" target="noopener noreferrer">
                      <img
                        width={200}
                        src="/img/dnl_google.svg"
                        alt="Lien pour télécharger l'application sur le Google Play store"
                      />
                    </a>
                    <br />
                    <br />
                    <a href="#" target="noopener noreferrer" className="d-none d-sm-block">
                      <img
                        width={149}
                        src="/img/QR_google.png"
                        alt="QR code pour le Google store"
                      />
                    </a>
                  </Col>

                </Row>
              </div>
            </div>
            <div className="col-lg-4 my-auto d-none d-lg-block">
              <img
                src="/img/timeline_landingpage.png"
                className="img-fluid"
                alt=""
                width={300}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
