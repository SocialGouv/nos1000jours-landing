import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ContentLayout } from "../src/components/Layout";

export default function Redirect_AppZeroAccident() {
  const isIOS = () => {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  };

  const zeroAccidentAppUrlAndroid =
    "https://play.google.com/store/apps/details?id=com.fabrique.millejours";
  // const zeroAccidentAppUrliOS = "itms-apps://itunes.com/app/1000-premiers-jours/id1573729958";
  const zeroAccidentHttpsiOSAppUrl =
    "https://apps.apple.com/us/app/1000-premiers-jours/id1573729958";

  const url = isIOS ? zeroAccidentHttpsiOSAppUrl : zeroAccidentAppUrlAndroid;
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router, url]);

  return (
    <ContentLayout title="Redirect">
      En route vers l'application...
    </ContentLayout>
  );
}

// http://localhost:3000/redirect?mtm_campaign=insta&mtm_kwd=juillet2021
