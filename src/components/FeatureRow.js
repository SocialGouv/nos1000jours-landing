import React from "react";
import { Row, Col } from "react-bootstrap";

export function FeatureRow({
  image,
  width = "100%",
  imageSpan = 3,
  title,
  reverse = false,
  children,
  noMarginBottom = false,
}) {
  return (
    <React.Fragment>
      <Row
        style={{
          alignItems: "center",
          flexDirection: reverse ? "row-reverse" : "row",
          marginBottom: noMarginBottom ? 0 : 30,
        }}
      >
        <Col xs={12} md={imageSpan} className="mb-3 mb-md-0">
          <img width={width} src={image} alt={title} />
        </Col>
        <Col
          xs={12}
          md={12 - imageSpan}
          className={`text-center ${
            reverse ? "text-md-right" : "text-md-left"
          }`}
        >
          <h3 style={{ color: "var(--primary)" }}>{title}</h3>
          {children}
        </Col>
      </Row>
    </React.Fragment>
  );
}
