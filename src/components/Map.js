import "leaflet/dist/leaflet.css";

import Leaflet from "leaflet";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref && ref.openPopup) {
      ref.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

export function Map() {
  return (
    <Row>
      <Col sm={6}>
        <MapContainer
          center={[48.655152, 2.313537]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: 400 }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarker
            position={[48.655152, 2.313537]}
            icon={Leaflet.icon({ iconUrl: "/img/marker.png" })}
          >
            <Popup>
              Centre Hospitalier
              <br />
              Barthélémy Durand
            </Popup>
          </MyMarker>
        </MapContainer>
      </Col>
      <Col sm={6}>
        <h5>Établissement Public de Santé Barthélémy Durand</h5>
        2 Route de Longpont, 91700 Sainte-Geneviève-des-Bois
        <br />
        <br />
        Contactez-nous par email{" "}
        <a href="mailto:xxx@fabrique.social.gouv.fr&subject=xxx">xxx</a>
      </Col>
    </Row>
  );
}
