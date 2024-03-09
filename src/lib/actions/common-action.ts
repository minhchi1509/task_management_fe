'use server';

import { redirect, RedirectType } from 'next/navigation';

export const clientRedirect = (url: string, type?: RedirectType) => {
  redirect(url, type);
};
