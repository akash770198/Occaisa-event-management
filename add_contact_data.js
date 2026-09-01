const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

data.contactPage = {
  banner: {
    title: "Contact Us",
    image: "/PageBanner.svg",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  heading: {
    badge: "GET IN TOUCH",
    titleStart: "We'd Love To ",
    titleHighlight: "Hear From You!",
    description: "Have a question, idea, or ready to start planning your next event?\nWe're here to help and make it unforgettable."
  },
  form: {
    title: "Write to us",
    submitText: "Send Message",
    securityText: "Your information is safe with us. We never share your details."
  },
  details: {
    title: "Our Contact Details",
    description: "We're here to help you create extraordinary events.",
    items: [
      {
        icon: "MapPin",
        title: "Address",
        value: "123 Celebration Avenue,\nMumbai, Maharashtra 400001"
      },
      {
        icon: "Phone",
        title: "Phone",
        value: "+1 1234567890"
      },
      {
        icon: "Mail",
        title: "Email",
        value: "hello@occasia.com"
      },
      {
        icon: "Clock",
        title: "Working Hours",
        value: "Mon - Sat: 10:00 AM - 7:00 PM\nSunday: Closed"
      }
    ],
    social: {
      title: "Follow Us"
    }
  },
  map: {
    title: "Occasia Events",
    address: "123 Celebration Avenue,\nMumbai, Maharashtra 400001",
    linkText: "View on Google Maps"
  }
};

fs.writeFileSync('data/content.json', JSON.stringify(data, null, 2));
console.log('Added contactPage to content.json');
