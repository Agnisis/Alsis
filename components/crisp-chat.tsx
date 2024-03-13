"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("756aca62-7efe-45ce-8392-2b0b496f8090");
  }, []);

  return null;
};
