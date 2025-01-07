export interface Template {
  id: string;
  category: string;
  title: string;
  content: string;
  platform: string;
  displayPlatform?: string;
  votes?: number;
}