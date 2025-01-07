import { Template } from './types';
import { emailTemplates } from './email';
import { twitterTemplates } from './twitter';
import { linkedinTemplates } from './linkedin';

export const templates: Template[] = [
  ...emailTemplates,
  ...twitterTemplates,
  ...linkedinTemplates
];

export const categories = Array.from(new Set(templates.map(t => t.category)));
export const platforms = Array.from(new Set(templates.map(t => t.platform)));

export type { Template };