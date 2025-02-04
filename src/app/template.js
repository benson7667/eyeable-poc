"use client";

export default function Template({ children }) {
  return (
    <div>
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
    </div>
  );
}
