
import React from 'react';

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.94 14.34A2.5 2.5 0 0 0 12 12a2.5 2.5 0 0 0-2.06-2.34" />
    <path d="M14.06 9.66A2.5 2.5 0 0 0 12 12a2.5 2.5 0 0 0 2.06 2.34" />
    <path d="M12 3v2" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
    <path d="M12 19v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);
