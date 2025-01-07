import { Template } from '../types';
import { directOutreachTemplates } from './direct-outreach';
import { enterpriseTemplates } from './enterprise';
import { startupTemplates } from './startup';

export const linkedinTemplates: Template[] = [
  ...directOutreachTemplates,
  ...enterpriseTemplates,
  ...startupTemplates
];