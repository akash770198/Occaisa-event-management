const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

data.teamDetailPage = {
  banner: {
    title: 'Our Teams',
    image: '/PageBanner.svg',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Teams', href: '/our-team' },
      { label: 'Team Detail', href: '/team-detail' }
    ]
  },
  breadcrumb2: [
    { label: 'Home', href: '/' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Rohit Sharma', href: '/team-detail' }
  ],
  profile: {
    image: '/Team/01_man_wider_shorter.svg',
    name: 'Rohit Sharma',
    role: 'Founder & CEO',
    badge: 'OUR TEAM',
    description: 'With a vision to turn celebrations into unforgettable experiences, Rohit leads Occasia with passion, creativity and a client-first approach.',
    contact: {
      phone: '+1 1234567890',
      email: 'hello@occasia.com',
      location: 'Mumbai, Maharashtra, India'
    },
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  about: {
    badge: 'ABOUT ROHIT',
    paragraphs: [
      'Rohit Sharma is the driving force behind Occasia Events. His leadership, innovative thinking and commitment to excellence have helped Occasia become a trusted name in the event management industry.',
      'He believes every event tells a story and his mission is to bring that story to life in the most magical way.'
    ],
    quote: "We don't just plan events, we create memories that last a lifetime."
  },
  expertise: {
    badge: 'EXPERTISE',
    skills: [
      { name: 'Event Strategy & Planning', percent: 95 },
      { name: 'Client Relationship', percent: 92 },
      { name: 'Team Leadership', percent: 90 },
      { name: 'Creative Direction', percent: 88 },
      { name: 'Business Development', percent: 85 }
    ]
  },
  relatedTeam: {
    badge: 'OUR TEAM',
    members: [
      data.teamPage.team.items[1],
      data.teamPage.team.items[2],
      data.teamPage.team.items[4],
      data.teamPage.team.items[7]
    ],
    buttonText: 'View All Team Members →',
    buttonLink: '/our-team'
  }
};

fs.writeFileSync('data/content.json', JSON.stringify(data, null, 2));
