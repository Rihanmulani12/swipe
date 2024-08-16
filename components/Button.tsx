'use client';

import { ReactElement } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
  svgElement?: ReactElement;
}

function Button({ title, onClick, className = '', svgElement }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      {svgElement && <span className="mr-2">{svgElement}</span>}
      {title}
    </button>
  );
}

export default Button
