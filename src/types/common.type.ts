import { SVGProps } from 'react';

export interface TURLPageProps {
  params: Record<string, string | undefined>;
  searchParams?: Record<string, string | undefined>;
}

export interface ISvgComponentProps {
  style?: SVGProps<any>;
}
