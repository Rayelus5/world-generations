/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'l-ring-2': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      size?: string | number;
      stroke?: string | number;
      'stroke-length'?: string | number;
      'bg-opacity'?: string | number;
      speed?: string | number;
      color?: string;
    }, HTMLElement>;
  }
}
