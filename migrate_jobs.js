const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

const templateJob = data.careerDetailPage.job;

data.careerPage.jobsList.jobs.forEach(job => {
  job.slug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Clone meta from template but override with job's actual details
  job.meta = [
    { icon: "calendar", label: "Posted On", value: job.posted },
    { icon: "user", label: "Seniority", value: job.title.includes("Senior") || job.title.includes("Manager") ? "Mid-Senior level" : job.title.includes("Intern") ? "Internship" : "Entry-Mid level" },
    { icon: "users", label: "Department", value: job.department },
    { icon: "clock", label: "Employment Type", value: job.type }
  ];
  
  job.workModel = job.location.includes("Remote") ? "Remote" : "On-site";
  job.salary = job.title.includes("Manager") ? "₹ 80,000 - ₹ 1,20,000 / month" : job.title.includes("Intern") ? "₹ 15,000 - ₹ 25,000 / month" : "₹ 40,000 - ₹ 70,000 / month";
  
  // Copy static detailed sections
  job.about = templateJob.about;
  job.responsibilities = templateJob.responsibilities;
  job.skills = templateJob.skills;
  job.benefits = templateJob.benefits;
});

// Update the footer links to point to career instead of career-detail for now, or just leave it.
// We will just let the dynamic routing work.

fs.writeFileSync('data/content.json', JSON.stringify(data, null, 2));
console.log("Updated content.json with dynamic job details.");
