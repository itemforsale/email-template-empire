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
  {
    id: '5',
    category: 'Direct Offer',
    title: 'Premium Domain Investment Opportunity',
    content: `Dear [Name],

I represent [DomainName.com], a premium domain that aligns perfectly with your industry.

Key Benefits:
• Instant Brand Recognition
• High SEO Value
• One-Word Domain
• Multiple TLDs Available

Current Market Value: [Price]
Flexible Payment Options Available

Would you be interested in a brief call to discuss this opportunity?

Best regards,
[Your Name]`,
    platform: 'email'
  },
  {
    id: '6',
    category: 'Startup Focus',
    title: 'Domain for Tech Startups',
    content: `Hi [Founder Name],

As your startup gains traction, having the right domain is crucial.

I noticed [Company Name]'s innovative approach to [Industry], and I have a domain that could elevate your brand: [DomainName.com]

Key Features:
• Short & Memorable
• Tech-Friendly
• Brand-Ready
• High Authority Potential

Let me know if you'd like to discuss this opportunity.

Best,
[Your Name]`,
    platform: 'email'
  },
  {
    id: '7',
    category: 'Social Announcement',
    title: 'Exclusive Domain Launch',
    content: `🚀 Exclusive Domain Launch Alert!

[DomainName.com] - A Premium Domain Name

Perfect for:
📱 Tech Companies
🎯 Digital Brands
💼 Online Businesses

Limited Time Offer
DM for Details

#Domains #DigitalAssets #Startup`,
    platform: 'twitter'
  },
  {
    id: '8',
    category: 'LinkedIn Outreach',
    title: 'Premium Tech Domain',
    content: `🎯 Premium Domain Name Available: [DomainName.com]

Perfect for tech companies and digital brands looking to:
• Establish instant credibility
• Build a memorable brand
• Dominate their niche

Investment opportunity for:
✓ Tech Startups
✓ Digital Agencies
✓ Online Platforms

Serious inquiries only.
#TechStartup #DigitalBranding`,
    platform: 'linkedin'
  },
  {
    id: '9',
    category: 'Direct Offer',
    title: 'Exclusive Domain Partnership',
    content: `Hello [Name],

I noticed [Company Name]'s recent expansion and wanted to discuss an opportunity that could significantly impact your digital presence.

I own [DomainName.com], which perfectly matches your brand's trajectory.

Benefits:
• Perfect Brand Match
• Established History
• Clean Background
• Immediate Transfer Available

Current Valuation: [Price]
Flexible Terms Available

Would you be interested in exploring this opportunity?

Regards,
[Your Name]`,
    platform: 'email'
  },
  {
    id: '10',
    category: 'Social Announcement',
    title: 'Domain Investment Opportunity',
    content: `💎 Premium Domain Investment Alert

[DomainName.com]

✨ Key Features:
• One-Word Domain
• Brandable
• High-Value Potential

Perfect for:
🎯 [Industry Type]
💼 [Use Case]

Limited Time Offer
DM for Details

#DomainNames #Investment`,
    platform: 'twitter'
  },
  {
    id: '11',
    category: 'LinkedIn Outreach',
    title: 'Strategic Domain Acquisition',
    content: `🌟 Strategic Domain Acquisition Opportunity

[DomainName.com] - A premium domain name that could transform your digital presence.

Why This Domain?
• Industry-Specific Appeal
• High Brand Value
• Immediate Market Impact
• SEO Advantages

Ideal for companies in:
✓ [Industry 1]
✓ [Industry 2]
✓ [Industry 3]

Serious inquiries only.
#DigitalAssets #BusinessGrowth`,
    platform: 'linkedin'
  },
  {
    id: '12',
    category: 'Startup Focus',
    title: 'Domain for Growing Startups',
    content: `Hey [Founder Name],

Congratulations on [Company Name]'s recent [milestone/achievement]!

As you scale, having the right domain becomes crucial. I have a domain that could be perfect for your next phase of growth: [DomainName.com]

Why Consider This Domain:
• Matches Your Brand Vision
• Growth-Ready
• Industry-Specific Appeal
• High SEO Potential

Would you be interested in a quick discussion?

Best regards,
[Your Name]`,
    platform: 'email'
  }
];

export const categories = Array.from(new Set(templates.map(t => t.category)));
export const platforms = Array.from(new Set(templates.map(t => t.platform)));
