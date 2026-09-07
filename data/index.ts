import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type EventsSchema = typeof siteData.Events;
export type EventsSections = EventsSchema["sections"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type EventsTopbarData = EventsSections["Topbar"]["variants"]["EventsTopbar1"];
export type EventsHeaderData = EventsSections["Header"]["variants"]["EventsHeader1"];
export type EventsHeroData = EventsSections["Hero"]["variants"]["EventsHero1"];
export type EventsAboutData = EventsSections["About"]["variants"]["EventsAbout1"];
export type EventsServicesData = EventsSections["Services"]["variants"]["EventsServices1"];
export type EventsStatsData = EventsSections["Stats"]["variants"]["EventsStats1"];
export type EventsTeamData = EventsSections["Team"]["variants"]["EventsTeam1"];
export type EventsTestimonialData = EventsSections["Testimonial"]["variants"]["EventsTestimonial1"];
export type EventsBlogData = EventsSections["Blog"]["variants"]["EventsBlog1"];
export type EventsFooterData = EventsSections["Footer"]["variants"]["EventsFooter1"];

export type EventsAboutPageData = EventsSections["AboutPage"]["variants"]["EventsAboutPage1"];
export type EventsAwardsPageData = EventsSections["AwardsPage"]["variants"]["EventsAwardsPage1"];
export type EventsBlogPageData = EventsSections["BlogPage"]["variants"]["EventsBlogPage1"];
export type EventsBlogDetailPageData = EventsSections["BlogDetailPage"]["variants"]["EventsBlogDetailPage1"];
export type EventsCareerPageData = EventsSections["CareerPage"]["variants"]["EventsCareerPage1"];
export type EventsCareerDetailPageData = EventsSections["CareerDetailPage"]["variants"]["EventsCareerDetailPage1"];
export type EventsContactPageData = EventsSections["ContactPage"]["variants"]["EventsContactPage1"];
export type EventsEventsPageData = EventsSections["EventsPage"]["variants"]["EventsEventsPage1"];
export type EventsFaqPageData = EventsSections["FaqPage"]["variants"]["EventsFaqPage1"];
export type EventsGalleryPageData = EventsSections["GalleryPage"]["variants"]["EventsGalleryPage1"];
export type EventsGetQuotePageData = EventsSections["GetQuotePage"]["variants"]["EventsGetQuotePage1"];
export type EventsMissionPageData = EventsSections["MissionPage"]["variants"]["EventsMissionPage1"];
export type EventsNavigationData = EventsSections["Navigation"]["variants"]["EventsNavigation1"];
export type EventsPartnersPageData = EventsSections["PartnersPage"]["variants"]["EventsPartnersPage1"];
export type EventsPrivacyPolicyPageData = EventsSections["PrivacyPolicyPage"]["variants"]["EventsPrivacyPolicyPage1"];
export type EventsServicesPageData = EventsSections["ServicesPage"]["variants"]["EventsServicesPage1"];
export type EventsSitemapPageData = EventsSections["SitemapPage"]["variants"]["EventsSitemapPage1"];
export type EventsStoryPageData = EventsSections["StoryPage"]["variants"]["EventsStoryPage1"];
export type EventsTeamDetailPageData = EventsSections["TeamDetailPage"]["variants"]["EventsTeamDetailPage1"];
export type EventsTeamDetailsData = EventsSections["TeamDetails"]["variants"]["EventsTeamDetails1"];
export type EventsTeamPageData = EventsSections["TeamPage"]["variants"]["EventsTeamPage1"];
export type EventsVisionPageData = EventsSections["VisionPage"]["variants"]["EventsVisionPage1"];
export type EventsWhyChooseUsPageData = EventsSections["WhyChooseUsPage"]["variants"]["EventsWhyChooseUsPage1"];

// ── Site Map for Standalone Site ──
const sec = siteData.Events.sections;

const siteMap = {
  topbar: sec.Topbar.variants.EventsTopbar1,
  header: sec.Header.variants.EventsHeader1,
  hero: sec.Hero.variants.EventsHero1,
  about: sec.About.variants.EventsAbout1,
  services: sec.Services.variants.EventsServices1,
  stats: sec.Stats.variants.EventsStats1,
  team: sec.Team.variants.EventsTeam1,
  testimonial: sec.Testimonial.variants.EventsTestimonial1,
  blog: sec.Blog.variants.EventsBlog1,
  footer: sec.Footer.variants.EventsFooter1,
  
  aboutPage: sec.AboutPage.variants.EventsAboutPage1,
  awardsPage: sec.AwardsPage.variants.EventsAwardsPage1,
  blogPage: sec.BlogPage.variants.EventsBlogPage1,
  blogDetailPage: sec.BlogDetailPage.variants.EventsBlogDetailPage1,
  careerPage: sec.CareerPage.variants.EventsCareerPage1,
  careerDetailPage: sec.CareerDetailPage.variants.EventsCareerDetailPage1,
  contactPage: sec.ContactPage.variants.EventsContactPage1,
  eventsPage: sec.EventsPage.variants.EventsEventsPage1,
  faqPage: sec.FaqPage.variants.EventsFaqPage1,
  galleryPage: sec.GalleryPage.variants.EventsGalleryPage1,
  getQuotePage: sec.GetQuotePage.variants.EventsGetQuotePage1,
  missionPage: sec.MissionPage.variants.EventsMissionPage1,
  navigation: sec.Navigation.variants.EventsNavigation1,
  partnersPage: sec.PartnersPage.variants.EventsPartnersPage1,
  privacyPolicyPage: sec.PrivacyPolicyPage.variants.EventsPrivacyPolicyPage1,
  servicesPage: sec.ServicesPage.variants.EventsServicesPage1,
  sitemapPage: sec.SitemapPage.variants.EventsSitemapPage1,
  storyPage: sec.StoryPage.variants.EventsStoryPage1,
  teamDetailPage: sec.TeamDetailPage.variants.EventsTeamDetailPage1,
  teamDetails: sec.TeamDetails.variants.EventsTeamDetails1,
  teamPage: sec.TeamPage.variants.EventsTeamPage1,
  visionPage: sec.VisionPage.variants.EventsVisionPage1,
  whyChooseUsPage: sec.WhyChooseUsPage.variants.EventsWhyChooseUsPage1,
  
  Events: siteData.Events
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default siteData;
