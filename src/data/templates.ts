export interface Template {
  id: string;
  category: string;
  title: string;
  content: string;
  platform: 'email' | 'twitter' | 'linkedin';
}

export const templates: Template[] = [
  {
    id: '1',
    category: 'Direct Offer',
    title: 'Premium Domain Direct Offer',
    content: `Hi [Name],

I noticed your growing brand presence and wanted to reach out about [DomainName.com].

This premium domain perfectly aligns with your business and could significantly enhance your brand's digital presence.

Current Market Value: [Price]
Payment Plans Available
Instant Transfer Process

Would you be interested in a brief discussion about acquiring this domain?

Best regards,
[Your Name]`,
    platform: 'email'
  },
  {
    id: '2',
    category: 'Startup Focus',
    title: 'Perfect Startup Domain',
    content: `Hey [Founder Name],

Congratulations on [Company Name]'s recent [achievement/funding/launch]!

I have a domain that could be perfect for your brand: [DomainName.com]

✓ Memorable
✓ Brandable
✓ Industry-relevant

Interested in learning more?

Best,
[Your Name]`,
    platform: 'email'
  },
  {
    id: '3',
    category: 'Social Announcement',
    title: 'Premium Domain Available',
    content: `🔥 Premium Domain Alert 🔥

[DomainName.com] is now available!

Perfect for:
• [Industry Type]
• [Use Case 1]
• [Use Case 2]

DM for details
#Domains #Branding #Business`,
    platform: 'twitter'
  },
  {
    id: '4',
    category: 'LinkedIn Outreach',
    title: 'Professional Domain Opportunity',
    content: `Exciting Domain Opportunity: [DomainName.com]

Looking to connect with decision-makers in [Industry] interested in acquiring this premium domain name.

✓ Instant brand recognition
✓ SEO advantages
✓ Perfect for [specific use case]

Comment "info" or DM for details.

#DomainNames #DigitalAssets #Branding`,
    platform: 'linkedin'
  },
  // Add more templates here...
];

export const categories = Array.from(new Set(templates.map(t => t.category)));
export const platforms = Array.from(new Set(templates.map(t => t.platform)));