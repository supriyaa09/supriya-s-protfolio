import React from 'react';

export const Github: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block select-none ${className}`}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const StarDoodle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#C8795C',
  size = 20
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none ${className}`}
  >
    <path
      d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
      fill={color}
    />
  </svg>
);

export const HandDrawnArrow: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#C8795C'
}) => (
  <svg
    width="48"
    height="32"
    viewBox="0 0 48 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M4 16C16 12 28 8 42 16M42 16L32 8M42 16L34 24"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UnderlineSwoosh: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#C8795C'
}) => (
  <svg
    viewBox="0 0 240 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full overflow-visible select-none ${className}`}
  >
    <path
      d="M3 14C50 6, 150 4, 237 11C180 15, 90 17, 35 15"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const CurlyBrackets: React.FC<{ className?: string; color?: string; side?: 'left' | 'right' }> = ({
  className = '',
  color = '#788568',
  side = 'left'
}) => (
  <svg
    width="16"
    height="48"
    viewBox="0 0 16 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    {side === 'left' ? (
      <path
        d="M14 4C6 4, 10 20, 2 24C10 28, 6 44, 14 44"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    ) : (
      <path
        d="M2 4C10 4, 6 20, 14 24C6 28, 10 44, 2 44"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    )}
  </svg>
);

export const TapeStrip: React.FC<{ className?: string; text?: string; rotate?: string }> = ({
  className = '',
  text,
  rotate = '-rotate-2'
}) => (
  <div
    className={`inline-flex items-center justify-center px-4 py-1 text-xs font-mono font-bold tracking-wider uppercase text-charcoal bg-beige/90 border-y border-dashed border-charcoal/30 shadow-sm ${rotate} ${className}`}
  >
    {text || 'EDITORIAL ✦ ARCHIVE'}
  </div>
);
