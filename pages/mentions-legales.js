import React from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Mentions() {
  return (
    <ContentLayout title="Mentions légales">
      <h3>Éditeur du site</h3>
      <p>
        Ce site est édité par la Direction générale de la Cohésion sociale au
        sein de la Fabrique numérique des ministères sociaux :
      </p>
      <p>
        18 place des 5-Martyrs-du-Lycée-Buffon
        <br />
        75014 PARIS
      </p>
      <p>
        <b>Directeur de la publication</b>
        <br />
        Monsieur Jean-Benoît DUJOL, Directeur général de la cohésion sociale
      </p>
      <h3>Hébergement du site</h3>
      <p>
        Ce site est hébergé par :
        <br />
        <br />
        <a target="_blank" href="https://www.ovh.com" rel="noreferrer">
          OVH SAS
        </a>
        <br />
        Siège social : 2 rue Kellermann - 59100 Roubaix - France.
        <br />
      </p>
      <h3>Accessibilité</h3>
      <p>
        La conformité aux normes d’accessibilité numérique est un objectif
        ultérieur mais nous tâchons de rendre ce site accessible à toutes et à
        tous.
      </p>
      <h4> Signaler un dysfonctionnement</h4>
      <p>
        Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder à
        un contenu ou une fonctionnalité du site, merci de nous en faire part.
        Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
        droit de faire parvenir vos doléances ou une demande de saisine au
        Défenseur des droits.
      </p>
      <h4> En savoir plus</h4>
      <p>
        Pour en savoir plus sur la politique d’accessibilité numérique de l’État
        : http://references.modernisation.gouv.fr/accessibilite-numerique
      </p>
      <h4>Sécurité</h4>
      <p>
        L’application est protégée par un certificat électronique, matérialisé
        pour la grande majorité des navigateurs par un cadenas. Cette protection
        participe à la confidentialité des échanges. En aucun cas les services
        associés à la plateforme ne seront à l’origine d’envoi de courriels pour
        demander la saisie d’informations personnelles.
      </p>
    </ContentLayout>
  );
}
