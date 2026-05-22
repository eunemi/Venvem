import React from 'react';

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export const GradientButton = ({ href = "#", children = "Projects" }: ButtonProps) => {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group relative inline-flex items-center justify-center rounded-full bg-zinc-950 px-8 py-3.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-zinc-900 hover:shadow-lg hover:-translate-y-1"
        href={href}
      >
        {children}
        <svg
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
          <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
        </svg>
      </a>
    </div>
  );
};
