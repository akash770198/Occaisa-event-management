const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

// Generate slug helper
const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const detailedData = {
  badge: "EVENT PLANNING",
  mainTitle: "Seamless planning. Memorable experiences.",
  paragraphs: [
    "From concept to execution, we plan every detail to create flawless events that leave a lasting impression. Whether it's a corporate gathering, wedding, or private celebration - we make it extraordinary.",
    "At Occasia, we believe every event tells a story. Our expert planners work closely with you to understand your vision, objectives, and preferences to craft events that inspire, engage, and create lasting memories. We handle everything — from the big picture to the smallest details — so you can relax and enjoy your special moments while we bring your vision to life."
  ],
  features: [
    { title: "End-to-End Planning", description: "Complete planning and coordination from the initial concept to the final execution.", icon: "CalendarCheck" },
    { title: "Expert Team", description: "Experienced professionals dedicated to delivering creative and flawless events.", icon: "Users" },
    { title: "On-Time Delivery", description: "We value your time and ensure punctual execution without compromising quality.", icon: "Clock" },
    { title: "Unforgettable Experiences", description: "Our goal is to create moments that you and your guests will cherish forever.", icon: "Star" }
  ],
  whyChooseUs: {
    title: "Why Choose Occasia?",
    description: "We combine creativity, strategy, and flawless execution to deliver events that stand out. From intimate gatherings to large-scale celebrations, our attention to detail and commitment to excellence set us apart.",
    list: [
      { title: "Personalized Approach", description: "We take the time to understand your goals and tailor every detail to match your vision and style." },
      { title: "Creative & Innovative", description: "Our creative ideas and innovative concepts make your event unique, engaging and truly memorable." },
      { title: "Vendor Network", description: "Strong relationships with trusted vendors help us get the best quality and value for your event." },
      { title: "Stress-Free Experience", description: "We handle everything, so you can relax and enjoy your event without any worries or last-minute stress." }
    ]
  },
  whatWeOffer: {
    title: "What We Offer",
    description: "We offer a comprehensive range of event planning services to make your event seamless, successful and unforgettable.",
    items: [
      { title: "Concept & Strategy", description: "We create creative concepts and strategic plans tailored to your objectives and audience.", icon: "Lightbulb" },
      { title: "Venue Selection", description: "We help you find the perfect venue that fits your event needs, guest count and budget.", icon: "MapPin" },
      { title: "Vendor Management", description: "We work with trusted vendors and manage contracts, coordination and execution.", icon: "Users" },
      { title: "Timeline & Coordination", description: "We build detailed timelines and coordinate every aspect to ensure a smooth and organized event.", icon: "CalendarCheck" },
      { title: "On-Site Management", description: "Our team manages everything on the big day so you can focus on your guests and enjoy the moment.", icon: "Mic" },
      { title: "Post-Event Support", description: "We handle post-event tasks, feedback collection and reports to help you evaluate your event's success.", icon: "Headset" }
    ]
  }
};

data.services.items = data.services.items.map(item => {
  const slug = generateSlug(item.title);
  
  // Set the common link to the new detail page
  item.slug = slug;
  item.linkUrl = `/services/${slug}`;
  item.link = `/services/${slug}`;
  
  // Add the details data
  item.details = {
    ...detailedData, // We use the same rich structure for all for demo purposes, just changing badge and title
    badge: item.title.toUpperCase(),
    mainTitle: item.title === "Event Planning" ? "Seamless planning. Memorable experiences." : `Expert ${item.title} services for you.`,
  };

  return item;
});

// Update the menu to not be a dropdown for Services, if we need it (the user already did this manually, but just in case)
data.navigation = data.navigation || [];
const servicesNav = data.navigation.find(n => n.label === "Services");
if (servicesNav) {
  servicesNav.href = "/services";
  servicesNav.hasDropdown = false;
}

fs.writeFileSync('data/content.json', JSON.stringify(data, null, 2));
console.log('Successfully embedded detail data into services.items');
