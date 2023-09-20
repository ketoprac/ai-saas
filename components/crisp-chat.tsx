"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7d34ef03-06ec-4036-a6d6-7a9df8e9cd0c");
  }, []);

  return null;
};