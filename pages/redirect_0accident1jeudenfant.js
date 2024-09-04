import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_ZeroAccident() {
  const url = "https://tally.so/r/mBDz14";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return (
    <ContentLayout title="Redirect">
      En route vers le questionnaire 1000 premiers jours, 0 accident: un jeu
      d'enfant !
    </ContentLayout>
  );
}
