import { Template } from '../types';
import { directOfferTemplates } from './categories/direct-offer';
import { digitalTransformationTemplates } from './categories/digital-transformation';
import { startupFocusTemplates } from './categories/startup-focus';
import { premiumDomainTemplates } from './categories/premium-domains';
import { brandableDomainsTemplates } from './categories/brandable-domains';
import { geoDomainsTemplates } from './categories/geo-domains';
import { industrySpecificTemplates } from './categories/industry-specific';
import { brandingFocusedTemplates } from './categories/branding-focused';
import { seoFocusedTemplates } from './categories/seo-focused';
import { startupEntrepreneurTemplates } from './categories/startup-entrepreneur';
import { nicheMarketsTemplates } from './categories/niche-markets';
import { expiredPremiumTemplates } from './categories/expired-premium';
import { problemSolutionTemplates } from './categories/problem-solution';
import { emotionalAppealTemplates } from './categories/emotional-appeal';
import { followUpTemplates } from './categories/follow-up';

export const emailTemplates: Template[] = [
  ...directOfferTemplates,
  ...digitalTransformationTemplates,
  ...startupFocusTemplates,
  ...premiumDomainTemplates,
  ...brandableDomainsTemplates,
  ...geoDomainsTemplates,
  ...industrySpecificTemplates,
  ...brandingFocusedTemplates,
  ...seoFocusedTemplates,
  ...startupEntrepreneurTemplates,
  ...nicheMarketsTemplates,
  ...expiredPremiumTemplates,
  ...problemSolutionTemplates,
  ...emotionalAppealTemplates,
  ...followUpTemplates
];