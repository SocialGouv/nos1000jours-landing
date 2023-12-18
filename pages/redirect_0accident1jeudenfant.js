import React, { useEffect } from "react";
import { useRouter } from 'next/router'

import { ContentLayout } from "../src/components/Layout";


export default function redirect_ios() {
  const url = "https://forms.office.com/e/ggBEyZgdEk";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return <ContentLayout title="Redirect">En route vers le questionnaire 1000 premiers jours, 0 accident: un jeu d'enfant !</ContentLayout>;
}
