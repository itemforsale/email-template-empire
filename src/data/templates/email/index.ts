import { Template } from '../types';
import { directOfferTemplates } from './categories/direct-offer';
import { enterpriseFocusTemplates } from './categories/enterprise-focus';
import { digitalTransformationTemplates } from './categories/digital-transformation';
import { startupFocusTemplates } from './startup-focus';

export const emailTemplates: Template[] = [
  ...directOfferTemplates,
  ...enterpriseFocusTemplates,
  ...digitalTransformationTemplates,
  ...startupFocusTemplates
];