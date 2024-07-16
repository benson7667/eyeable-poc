"use client";

import IconSpeech from "@/components/icons/speech";
import IconTranslate from "@/components/icons/translate";
import { useEffect } from "react";

export default function Template({ children }) {
  return <div className="absolute">{children}</div>;
}
