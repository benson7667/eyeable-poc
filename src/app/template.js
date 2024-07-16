"use client";

import IconSpeech from "@/components/icons/speech";
import IconTranslate from "@/components/icons/translate";
import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    // activate lang translation
    // EA.init_localLang(true)
  }, []);

  return (
    <div className="absolute">
      {children}
      <easy-speech right="130px" />
      <translation-select
        langs="en-GB,de,fr,zh"
        selectui="minimal"
        bottom="50px"
        right="15px"
        height="55px"
        borderthickness="1px"
      />

      <div className="fixed right-4 bottom-4 flex flex-col space-y-2">
        {/* <IconSpeech
          onClick={() => {
            console.log("fire text to speech");
            EA.activateEasy();
          }}
        />
        <IconTranslate
          onClick={() => {
            console.log("fire auto translation");
            EA.activateTranslation(tarLang, true);
          }}
        /> */}
      </div>
    </div>
  );
}
