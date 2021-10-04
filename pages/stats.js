import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { ContentLayout } from "../src/components/Layout";

import stats from "../stats.yml"

// convert yaml format to recharts format
const toGraphData = ({ valeurs }) => Object.keys(valeurs).map(key => ({
  date: key,
  value: valeurs[key]
}))

const ChiffreCle = () => <div>Chiffre clé</div>
const Tableau = () => <div>Tableau</div>

const Graph = ({ kpi }) => {
  const data = toGraphData(kpi);
  return <p>
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" name={kpi.titre} />
    </LineChart>
    <hr/>
  </p>
}

const Graph2 = ({ kpi }) => {
  const data = toGraphData(kpi);
  const myArr = data.value.split(" ");
  return <p>
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="myArr[0]" stroke="#8884d8" name={kpi.titre} />
      <Line type="monotone" dataKey="value" stroke="#8884d8" name={kpi.titre} />
    </LineChart>
    <hr/>
  </p>
}

export default function Stats() {
  // console.log(stats);
  // const data = toGraphData(stats.kpis.find(k => k.titre === "connexions par jour"));
  // console.log(data);
  return (
    <ContentLayout title="Statistiques">
      <h3>Work in progress</h3>
      {stats.kpis.map(kpi => {
        switch (kpi.affichage) {
          case "graphWithOneLine":
            return <Graph kpi={kpi}/>
          case "graphWithTwoLine":
            return <Graph2 kpi={kpi}/>
          case "chiffre_cle":
            return <h4>{kpi.titre}: {kpi.valeur}</h4>
        }
        //return <h4>{kpi.titre}</h4>
      })}


    </ContentLayout>
  );
}

