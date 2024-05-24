import { CSSObject } from '@mui/material';
import { ComponentType } from 'react';

export type TSidebarItem = {
  title: string;
  redirectTo: string;
  icon?: ComponentType<{ style: CSSObject }>;
  nestedItems?: TSidebarItem[];
};

export type TSidebarGroupItem = {
  title?: string;
  items: TSidebarItem[];
};
