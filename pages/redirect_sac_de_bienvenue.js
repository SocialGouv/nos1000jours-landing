import React, { useEffect } from "react";
import { useRouter } from 'next/router'

import { ContentLayout } from "../src/components/Layout";


export default function redirect_ios() {
  const url = "https://startupdetat.typeform.com/to/ciFdrdSK";
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url);
    }, 200);
  }, [router]);

  return <ContentLayout title="Redirect">En route vers le sac de bienvenue 1000 premiers jours...</ContentLayout>;
}


