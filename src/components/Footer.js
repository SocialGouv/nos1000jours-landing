import React from "react";
import Link from "next/link";

const LightLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a
      href={href}
      style={{
        color: "white",
        fontSize: "0.8em",
      }}
    >
      {children}
    </a>
  </Link>
);

const Separator = () => (
  <span style={{ color: "white", marginRight: 5 }}>|</span>
);

export function Footer() {
  return (
    <footer
      style={{
        marginTop: 150,
        background: "var(--primary)",
        color: "white",
      }}
    >
      <div className="container text-center">

        <ul className="list-inline">
          <li className="list-inline-item">
            <LightLink href="/cgu">condititions générales</LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/mentions-legales">mentions légales</LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/politique-confidentialite">
              politique de confidentialité
            </LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/accessibilite">
              accessibilité : non conforme
            </LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="mailto:contact-nos1000jours@fabrique.social.gouv.fr&subject=Démarrage">
              contactez-nous 
            </LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="stats">
               statistiques
            </LightLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
