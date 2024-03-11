import "bootstrap/dist/css/bootstrap.css";
import "../src/bootstrap-theme.scss";
import "../src/main.scss";

import { init } from "@socialgouv/matomo-next";
import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {},
};

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />
          <meta
            name="description"
            content="Le compagnon numérique 'les 1000 premiers jours' 
            permet de suivre les étapes du projet de parentalité aux 2 ans de votre enfant.
            Des articles rédigés par des professionnels et proposés en fonction de l'étape 
            à laquelle vous vous trouvez. Ainsi qu'un calendrier présentant tous les événements 
            des 1000 premiers jours."
          />
          <meta name="author" content="" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
