
import React from 'react';

export const WandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M12.34 7.76a1.5 1.5 0 1 0-2.12-2.12" />
    <path d="M17.66 12.34a1.5 1.5 0 1 0-2.12-2.12" />
    <path d="m2 2 20 20" />
    <path d="M15 8h2" />
    <path d="M8 15H6" />
  </svg>
);
