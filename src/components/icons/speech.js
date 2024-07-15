"use client";

export default function IconSpeech({ onClick }) {
  return (
    <div
      className="w-[50px] h-[50px] bg-[#222] flex justify-center items-center rounded-full shadow-md"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="#fff"
          d="M13 26h-2c-3.9 0-7-3.1-7-7v-2h2v2c0 2.8 2.2 5 5 5h2zm5-8h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2.4l-1.7 3l-1.7-1l2.3-4H28v-6H18v6h3v2h-3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2m10-4h-2v-2c0-2.8-2.2-5-5-5h-4V5h4c3.9 0 7 3.1 7 7zM2 11h6v2H2zm0-4h12v2H2zm0-4h12v2H2z"
        />
      </svg>
    </div>
  );
}
