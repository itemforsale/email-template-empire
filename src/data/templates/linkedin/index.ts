import { Template } from '../types';
import { professionalOutreachTemplates } from './categories/professional-outreach';
import { techFocusedTemplates } from './categories/tech-focused';
import { strategicAcquisitionTemplates } from './categories/strategic-acquisition';

export const linkedinTemplates: Template[] = [
  ...professionalOutreachTemplates,
  ...techFocusedTemplates,
  ...strategicAcquisitionTemplates
];