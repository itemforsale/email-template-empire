import { Template } from '../types';
import { directOfferTemplates } from './direct-offer';
import { startupFocusTemplates } from './startup-focus';

export const emailTemplates: Template[] = [
  ...directOfferTemplates,
  ...startupFocusTemplates
];