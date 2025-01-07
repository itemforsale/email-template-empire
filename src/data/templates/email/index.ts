import { Template } from '../types';
import { directOfferTemplates } from './categories/direct-offer';
import { digitalTransformationTemplates } from './categories/digital-transformation';
import { startupFocusTemplates } from './startup-focus';
import { premiumDomainTemplates } from './categories/premium-domains';
import { brandableDomainsTemplates } from './categories/brandable-domains';
import { geoDomainsTemplates } from './categories/geo-domains';
import { industrySpecificTemplates } from './categories/industry-specific';
import { brandingFocusedTemplates } from './categories/branding-focused';

export const emailTemplates: Template[] = [
  ...directOfferTemplates,
  ...digitalTransformationTemplates,
  ...startupFocusTemplates,
  ...premiumDomainTemplates,
  ...brandableDomainsTemplates,
  ...geoDomainsTemplates,
  ...industrySpecificTemplates,
  ...brandingFocusedTemplates
];