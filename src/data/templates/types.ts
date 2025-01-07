export interface Template {
  id: string;
  category: string;
  title: string;
  content: string;
  platform: 'email' | 'twitter' | 'linkedin';
  displayPlatform?: string;
}