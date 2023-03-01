import React from "react";
import {
  Area,
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { ContentLayout, SimpleLayout } from "../src/components/Layout";

import stats from "../stats.yml";
import stats_blues from "../stats_blues.yml";

// convert yaml format to recharts format
const toGraphData = ({ valeurs }) =>
  Object.keys(valeurs).map((key) => ({
    date: key,
    value: valeurs[key],
  }));

const ChiffreCle = () => <div>Chiffre clé</div>;
const Tableau = () => <div>Tableau</div>;

// affichage d'un graphe avec une seule ligne
const Graph = ({ kpi }) => {
  const data = toGraphData(kpi);
  return (
    <p>
      <h2>{kpi.titre}</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          name={kpi.legende}
        />
      </LineChart>
      <hr />
    </p>
  );
};

// affichage d'un graph avec deux lignes
const Graph2 = ({ kpi }) => {
  return (
    <p>
      <h2>{kpi.titre}</h2>
      <AreaChart width={500} height={300} data={kpi.valeurs}>
        <XAxis dataKey="x_val" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Area type="monotone" dataKey="y_val1" stroke="#8fca9f" fill="#82ca9d" name={kpi.label1} />
        <Area type="monotone" dataKey="y_val2" stroke="#8884d8" fill="#8884d8" name={kpi.label2} />
      </AreaChart>
      <hr />
    </p>
  );
};

// affichage d'un camembert
const Graph3 = ({ kpi }) => {
  return (
    <p>
      <h2>{kpi.titre}</h2>
    </p>
  );
};

export default function Stats() {
  //console.log(stats);
  // const data = toGraphData(stats.kpis.find(k => k.titre === "connexions par jour"));
  // console.log(data);
  return (
    <ContentLayout title="Statistiques 1000 premiers jours">
      <SimpleLayout title="Statistiques de l'application mobile">
        {stats.kpis.map((kpi) => {
          switch (kpi.affichage) {
            case "graphWithOneLine":
              return <Graph kpi={kpi} />;
            case "graphWithTwoLine":
              return <Graph2 kpi={kpi} />;
            case "chiffreCle":
              return (
                <h3>
                  {kpi.titre}: {kpi.valeur}
                  <hr/>
                </h3>
              );
            case "camembert":
              return <Graph3 kpi={kpi} />;
          }
        })}
      </SimpleLayout>
      {/* <SimpleLayout title="Statistiques du test EPDS">
        {stats_blues.kpis.map((kpi) => {
          switch (kpi.affichage) {
            case "graphWithOneLine":
              return <Graph kpi={kpi} />;
            case "graphWithTwoLine":
              return <Graph2 kpi={kpi} />;
            case "chiffreCle":
              return (
                <h3>
                  {kpi.titre}: {kpi.valeur}
                  <hr/>
                </h3>
              );
            case "camembert":
              return <Graph3 kpi={kpi} />;
          }
        })}
      </SimpleLayout> */}
  </ContentLayout>
  );
}
