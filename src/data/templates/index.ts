import { Template } from './types';
import { emailTemplates } from './email-templates';
import { twitterTemplates } from './twitter-templates';
import { linkedinTemplates } from './linkedin-templates';

export const templates: Template[] = [
  ...emailTemplates,
  ...twitterTemplates,
  ...linkedinTemplates
];

export const categories = Array.from(new Set(templates.map(t => t.category)));
export const platforms = Array.from(new Set(templates.map(t => t.platform)));

export type { Template };