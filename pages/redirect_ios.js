import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_IOS() {
  const url = "https://apps.apple.com/fr/app/1000-premiers-jours/id1573729958";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return (
    <ContentLayout title="Redirect">
      En route vers les 1000 premiers jours...
    </ContentLayout>
  );
}

// http://localhost:3000/redirect?mtm_campaign=insta&mtm_kwd=juillet2021
