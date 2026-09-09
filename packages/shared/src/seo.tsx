import type { Metadata } from 'next';

export function siteMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, url: path },
  };
}
