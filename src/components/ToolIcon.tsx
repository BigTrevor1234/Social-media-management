import React from 'react';

interface ToolIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ToolIcon: React.FC<ToolIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  const normalized = name.toLowerCase().trim();

  // Clean, official SVG vector paths for each platform/tool
  if (normalized.includes('instagram')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="#E1306C" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="4.2" stroke="#ffffff" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#ffffff" />
        <defs>
          <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FD1D1D" />
            <stop offset="0.5" stopColor="#E1306C" />
            <stop offset="1" stopColor="#833AB4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalized.includes('tiktok')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#000000" />
        <path
          d="M16.5 8.2c-1.1-.3-1.9-1.2-2.1-2.2H12v10.3c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6.1.9.2v-2.5c-.3 0-.6-.1-.9-.1-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2V10c1.3.9 2.8 1.4 4.4 1.4V8.9c-.8 0-1.6-.3-2.1-.7z"
          fill="#ffffff"
        />
        <path
          d="M17.2 8.4c-1.1-.3-1.9-1.2-2.1-2.2H13v.8c.2 1 1 1.9 2.1 2.2v-.8z"
          fill="#25F4EE"
        />
        <path
          d="M11.3 16.3c0 1.5-1.2 2.7-2.7 2.7-.4 0-.8-.1-1.1-.3.5.7 1.3 1.1 2.2 1.1 1.5 0 2.7-1.2 2.7-2.7v-2.8h-1.1v2z"
          fill="#FE2C55"
        />
      </svg>
    );
  }

  if (normalized.includes('linkedin')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0A66C2" />
        <path
          d="M7.8 9H5.2V18h2.6V9zM6.5 5.5C5.7 5.5 5 6.2 5 7s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM18.8 13.2c0-2.4-1.3-3.6-3.1-3.6-1.4 0-2.1.8-2.4 1.4V9h-2.6v9h2.6v-5c0-1.3.2-2.6 1.8-2.6 1.6 0 1.6 1.5 1.6 2.7V18h2.6v-4.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized === 'x' || normalized.includes('twitter') || normalized.includes('(twitter)')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#111111" />
        <path
          d="M15.7 5.5h2.1l-4.6 5.3 5.4 7.2h-4.2l-3.3-4.3-3.8 4.3H5.2l4.9-5.6L4.9 5.5h4.3l3 4 3.5-4zM15 16.7h1.2L9 6.7H7.7l7.3 10z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('facebook')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1877F2" />
        <path
          d="M15 12h-2.5v7.5H9.5V12H8v-2.5h1.5V7.8C9.5 6.3 10.4 5 12.6 5H15v2.5h-1.5c-.7 0-.9.4-.9.9v1.1H15L15 12z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('meta') || normalized.includes('business suite')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0081FB" />
        <path
          d="M17.4 8.2c-1.3 0-2.4.7-3.1 1.7-.7-1-1.8-1.7-3.1-1.7-2.3 0-4.2 2-4.2 4.4 0 2.3 1.9 4.2 4.2 4.2 1.4 0 2.6-.7 3.2-1.8.6 1.1 1.8 1.8 3.2 1.8 2.3 0 4.2-1.9 4.2-4.2 0-2.4-1.9-4.4-4.2-4.4zm-6.2 6.5c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 1.1 0 2 .7 2.2 1.8-.3 1.6-1.1 2.8-2.2 2.8zm6.2 0c-1.1 0-1.9-1.2-2.2-2.8.2-1.1 1.1-1.8 2.2-1.8 1.3 0 2.3 1 2.3 2.3 0 1.3-1 2.3-2.3 2.3z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('buffer')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#231F20" />
        <path d="M6 7.5L12 4.5L18 7.5L12 10.5L6 7.5Z" fill="#ffffff" />
        <path d="M6 12L12 15L18 12L16 11L12 13L8 11L6 12Z" fill="#ffffff" fillOpacity="0.85" />
        <path d="M6 16.5L12 19.5L18 16.5L16 15.5L12 17.5L8 15.5L6 16.5Z" fill="#ffffff" fillOpacity="0.65" />
      </svg>
    );
  }

  if (normalized.includes('capcut')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#141414" />
        <path
          d="M6 7h4l4.5 4.5L10 16H6l4-4.5L6 7zM18 7h-4l-4.5 4.5L14 16h4l-4-4.5L18 7z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('canva')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#00C4CC" />
        <circle cx="12" cy="12" r="7.5" fill="#7D2AE8" />
        <path
          d="M14.5 9.5C13.8 8.6 12.6 8.5 11.5 8.8c-1.8.6-2.5 2.5-2.5 4.2 0 2.2 1.4 3.5 3.3 3.5 1.2 0 2.3-.6 2.8-1.5l-1.3-.8c-.3.5-1 .8-1.6.8-1.1 0-1.8-.7-1.8-2 0-1.2.6-2.6 1.7-2.9.6-.2 1.3 0 1.6.5l1.3-.9z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normalized.includes('inshot')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FF3366" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="#ffffff" />
        <circle cx="12" cy="12" r="3.2" fill="#FF3366" />
        <circle cx="15.8" cy="8.2" r="0.9" fill="#FF3366" />
      </svg>
    );
  }

  if (normalized.includes('notion')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
        <path
          d="M6 6.5l8.5-1.5c.8-.1 1.5.5 1.5 1.3V18c0 .6-.5 1-1 1l-9 1c-.6.1-1-.4-1-1V7.5c0-.6.4-1 1-1zm3 3v7h2v-4.5l3.2 4.5h1.8V9.5h-2v4.5L10.8 9.5H9z"
          fill="#000000"
        />
      </svg>
    );
  }

  if (normalized.includes('airtable')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
        <path d="M12 5.5l5.5 3v5L12 10.5v-5z" fill="#FCB400" />
        <path d="M6.5 8.5L12 5.5v5L6.5 13.5v-5z" fill="#18BFFF" />
        <path d="M6.5 14.5L12 11.5l5.5 3-5.5 3-5.5-3z" fill="#2D7FF9" />
      </svg>
    );
  }

  if (normalized.includes('trello')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0052CC" />
        <rect x="6.5" y="6" width="4.5" height="11" rx="1" fill="#ffffff" />
        <rect x="13" y="6" width="4.5" height="7.5" rx="1" fill="#ffffff" />
      </svg>
    );
  }

  if (normalized.includes('zapier')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FF4A00" />
        <path
          d="M12 6v12M6 12h12M7.7 7.7l8.6 8.6M16.3 7.7l-8.6 8.6"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (normalized.includes('google analytics') || normalized.includes('analytics')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFF3E0" stroke="#FFE0B2" strokeWidth="1" />
        <rect x="6" y="13" width="3" height="6" rx="1.2" fill="#F9AB00" />
        <rect x="10.5" y="9" width="3" height="10" rx="1.2" fill="#E37400" />
        <rect x="15" y="5" width="3" height="14" rx="1.2" fill="#E37400" />
        <circle cx="16.5" cy="5.5" r="1.5" fill="#E37400" />
      </svg>
    );
  }

  if (normalized.includes('google trends') || normalized.includes('trends')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
        <path
          d="M5 16l4-5 3.5 3.5 5.5-7.5"
          stroke="#4285F4"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 7H18v3.5"
          stroke="#EA4335"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="11" r="1.5" fill="#34A853" />
        <circle cx="12.5" cy="14.5" r="1.5" fill="#FBBC05" />
      </svg>
    );
  }

  if (normalized.includes('google') || normalized.includes('workspace')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
        <path
          d="M12 5.5c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 2 15.2 1 12 1 7.4 1 3.5 3.6 1.7 7.4l4 3.1C6.7 7.6 9.1 5.5 12 5.5z"
          fill="#EA4335"
        />
        <path
          d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2c-.3 1.5-1.1 2.8-2.3 3.6l3.7 2.9c2.2-2 3.4-5 3.4-8.7z"
          fill="#4285F4"
        />
        <path
          d="M5.7 14.5c-.3-.8-.4-1.6-.4-2.5 0-.9.1-1.7.4-2.5L1.7 6.4C.6 8.6 0 10.2 0 12s.6 3.4 1.7 5.6l4-3.1z"
          fill="#FBBC05"
        />
        <path
          d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-2.9 0-5.3-2-6.3-4.8l-4 3.1C3.5 20.4 7.4 23 12 23z"
          fill="#34A853"
        />
      </svg>
    );
  }

  // Generic fallback for custom portal
  return (
    <div className={`rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center font-mono text-[10px] font-bold text-stone-700 ${className}`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};
