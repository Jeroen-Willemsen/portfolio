export interface PopularScienceArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  authors: string;
  year: number;
  language: "English" | "Dutch" | "Danish";
  type: "pop-sci" | "blog";
}
