const fs = require('fs');
const path = require('path');

const pageMapping = {
  'about-us': 'EventsAboutPageData',
  'awards': 'EventsAwardsPageData',
  'blog': 'EventsBlogPageData',
  'career': 'EventsCareerPageData',
  'contact': 'EventsContactPageData',
  'events': 'EventsEventsPageData',
  'faq': 'EventsFaqPageData',
  'gallery': 'EventsGalleryPageData',
  'get-a-quote': 'EventsGetQuotePageData',
  'mission': 'EventsMissionPageData',
  'our-partners': 'EventsPartnersPageData',
  'our-story': 'EventsStoryPageData',
  'our-team': 'EventsTeamPageData',
  'privacy-policy': 'EventsPrivacyPolicyPageData',
  'services': 'EventsServicesPageData',
  'sitemap': 'EventsSitemapPageData',
  'testimonial': 'EventsTestimonialData',
  'vision': 'EventsVisionPageData',
  'why-choose-us': 'EventsWhyChooseUsPageData'
};

// Wait, the property accessed in siteMap is usually camelCase.
// Let's create a map from the exported type to the siteMap property.
const typeToProp = {
  'EventsAboutPageData': 'aboutPage',
  'EventsAwardsPageData': 'awardsPage',
  'EventsBlogPageData': 'blogPage',
  'EventsCareerPageData': 'careerPage',
  'EventsContactPageData': 'contactPage',
  'EventsEventsPageData': 'eventsPage',
  'EventsFaqPageData': 'faqPage',
  'EventsGalleryPageData': 'galleryPage',
  'EventsGetQuotePageData': 'getQuotePage',
  'EventsMissionPageData': 'missionPage',
  'EventsPartnersPageData': 'partnersPage',
  'EventsStoryPageData': 'storyPage',
  'EventsTeamPageData': 'teamPage',
  'EventsPrivacyPolicyPageData': 'privacyPolicyPage',
  'EventsServicesPageData': 'servicesPage',
  'EventsSitemapPageData': 'sitemapPage',
  'EventsTestimonialData': 'testimonial',
  'EventsVisionPageData': 'visionPage',
  'EventsWhyChooseUsPageData': 'whyChooseUsPage'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (dirPath.includes('components')) return; // skip
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('[slug]')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Determine which folder this is in
    let folder = filePath.split(path.sep).reverse()[1];
    let typeName = pageMapping[folder];
    
    if (typeName && content.includes('SectionProps<any>')) {
      let propName = typeToProp[typeName];
      
      // 1. Import Type
      content = content.replace(/import \{ site, SectionProps \} from "([^"]+)";/, `import { site, SectionProps, ${typeName} } from "$1";`);
      
      // 2. Replace SectionProps<any>
      content = content.replace(/SectionProps<any>/g, `SectionProps<${typeName}>`);
      
      // 3. Fix destructuring
      // Case A: `const { abc } = (data || site).somePage;` -> `const { abc } = data || site.somePage;`
      content = content.replace(new RegExp(`\\(data \\|\\| site\\)\\.${propName}`), `(data || site.${propName})`);
      
      // Case B: `const { somePage } = data || site;` -> `const somePage = data || site.somePage;`
      let regexDestruct = new RegExp(`const \\{\\s*${propName}\\s*\\} = data \\|\\| site;`);
      content = content.replace(regexDestruct, `const ${propName} = data || site.${propName};`);
      
      // Case C: `const { abc } = data || site;` (if it destructured properties of the page itself?)
      // Wait, earlier the script replaced `= data as any;` with `= data || site;`.
      // So some files might have `const { banner, photoGallery } = data || site;` which is WRONG if data is the page data.
      // Wait! If they had `const { banner } = data as any;` it means they were destructuring from the page data directly!
      // But how did they get it? Ah, `import { site as data }`. So `data` was the whole site object!
      // If `data` was the whole site object, `data` didn't have `banner`. `data.galleryPage.banner` has banner.
      
      fs.writeFileSync(filePath, content);
      console.log('Fixed ' + filePath + ' with ' + typeName);
    }
  }
});
