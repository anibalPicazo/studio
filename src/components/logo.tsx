import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 20.255v-15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15l-8-3.5-8 3.5" fill="hsl(var(--primary))" stroke="none" />
      <path d="m4 20.255 8-3.5 8 3.5" stroke="hsl(var(--primary-foreground))" opacity="0.5" />
      <path d="m12 16.5-8 3.755v-15a2 2 0 0 1 2-2h8.5" stroke="hsl(var(--primary))" />
      <path d="m20 19-8-3.5" stroke="hsl(var(--primary))" />
    </svg>
  );
}
