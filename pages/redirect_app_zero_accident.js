import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ContentLayout } from "../src/components/Layout";
import { isIOS } from "../src/utils/utils";

export default function Redirect_AppZeroAccident() {
  const zeroAccidentAppUrlAndroid =
    "https://play.google.com/store/apps/details?id=com.fabrique.millejours";
  const zeroAccidentHttpsiOSAppUrl =
    "https://apps.apple.com/us/app/1000-premiers-jours/id1573729958";

  const [isRunningOnIOS, setIsRunningOnIOS] = useState(null);

  useEffect(() => {
    setIsRunningOnIOS(isIOS());
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (isRunningOnIOS !== null) {
      const url = isRunningOnIOS
        ? zeroAccidentHttpsiOSAppUrl
        : zeroAccidentAppUrlAndroid;
      setTimeout(() => {
        router.push(url);
      }, 200);
    }
  }, [router, isRunningOnIOS]);

  return (
    <ContentLayout title="Redirection">
      En route vers l'application...
    </ContentLayout>
  );
}

// http://localhost:3000/redirect?mtm_campaign=insta&mtm_kwd=juillet2021
