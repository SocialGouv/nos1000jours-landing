import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_Android() {
  const url =
    "https://play.google.com/store/apps/details?id=com.fabrique.millejours";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 500);
  }, [router]);

  return (
    <ContentLayout title="Redirect">
      En route vers les 1000 premiers jours...
    </ContentLayout>
  );
}

// http://localhost:3000/redirect?mtm_campaign=insta&mtm_kwd=juillet2021
