export interface Publication {
  id: number;
  filename: string;
  filenameAlt: string | undefined;
  origloc: string;
  origlocAlt: string | undefined;
  title: string;
  reference: string;
  description: string;
  url: string;
  urlAlt: string | undefined;
  authors: string;
  year: number;
}
