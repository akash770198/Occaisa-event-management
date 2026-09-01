const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

data.servicesPage = {
  banner: {
    title: "Services",
    image: "/PageBanner.svg",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" }
    ]
  },
  services: {
    badge: "OUR SERVICES",
    titleStart: "Providing quality ",
    titleHighlight: "services",
    items: [
      {
        title: "Event Planning",
        description: "End-to-end planning and coordination\nfor corporate and private events.",
        image: "/Services/main_event_banner.svg",
        link: "#"
      },
      {
        title: "Wedding Management",
        description: "Beautifully planned weddings that\nturn your dream into reality.",
        image: "/Services/01_floral_wedding_stage.svg",
        link: "#"
      },
      {
        title: "Production & Stage Setup",
        description: "Professional production with lighting,\nsound, LED screens and staging.",
        image: "/Services/02_concert_event_stage.svg",
        link: "#"
      },
      {
        title: "Exhibitions & Trade Shows",
        description: "Innovative setups that showcase your brand\nand connect with the right audience.",
        image: "/Services/03_exhibition_trade_booth.svg",
        link: "#"
      },
      {
        title: "Conferences & Seminars",
        description: "Well-organized events that educate,\ninspire and drive meaningful conversations.",
        image: "/Services/04_conference_keynote.svg",
        link: "#"
      },
      {
        title: "Private Parties",
        description: "Personalized celebrations designed\naround your style and happiness.",
        image: "/Services/05_birthday_celebration.svg",
        link: "#"
      }
    ]
  }
};

fs.writeFileSync('data/content.json', JSON.stringify(data, null, 2));
console.log('Services data added to content.json');
