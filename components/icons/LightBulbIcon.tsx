
import React from 'react';

export const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15.09 16.05A6.47 6.47 0 0 1 12 20a6.47 6.47 0 0 1-3.09-3.95" />
    <path d="M9 12.45V16h6v-3.55" />
    <path d="M12 12.45a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5z" />
    <path d="M8.5 2C12.5 2 15 5.5 15 8c0 2-1 3-3 4h-2c-2-1-3-2-3-4c0-2.5 2.5-6 6.5-6z" />
    <path d="M12 22v-2" />
  </svg>
);
