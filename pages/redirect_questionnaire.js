import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_Questionnaire() {
  const url = "https://startupdetat.typeform.com/to/kdw7bOcv";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return (
    <ContentLayout title="Redirect">
      En route vers le questionnaire 1000 premiers jours...
    </ContentLayout>
  );
}
