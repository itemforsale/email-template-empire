import { Template } from '../types';
import { premiumDomainTemplates } from './categories/premium-domains';
import { techDomainTemplates } from './categories/tech-domains';
import { investmentTemplates } from './categories/investment-opportunities';
import { generalAnnouncementTemplates } from './categories/general-announcements';

export const twitterTemplates: Template[] = [
  ...premiumDomainTemplates,
  ...techDomainTemplates,
  ...investmentTemplates,
  ...generalAnnouncementTemplates
];