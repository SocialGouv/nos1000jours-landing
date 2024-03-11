import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_SacDeBienvenue() {
  const url =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=klJeAyVaCUW7CKVV99Mai1PpHvPcZL9FsUnhmLJvXehUN1dWMlg4VlVPTEk0UVlFOFpHQUZYR1VRMS4u";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return (
    <ContentLayout title="Redirect">
      En route vers le sac de bienvenue des 1000 premiers jours...
    </ContentLayout>
  );
}
