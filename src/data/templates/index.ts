import { Template } from './types';
import { emailTemplates } from './email';

export const templates: Template[] = [
  ...emailTemplates
];

export const categories = Array.from(new Set(templates.map(t => t.category)));
export const platforms = Array.from(new Set(templates.map(t => t.platform)));

export type { Template };