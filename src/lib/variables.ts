// Set any item to undefined to remove it from the site or to use the default value
const BASE = import.meta.env.BASE_URL;

export const GLOBAL = {
  // Site metadata
  username: "Jeremias Panozzo",
  rootUrl: "https://jeremiaspanozzo.github.io",
  shortDescription: "Cybersecurity | Hakcing",
  longDescription: "Personal website.",
  
  // Social media links
  githubProfile: "https://github.com/JeremiasPanozzo",
  linkedinProfile: "https://www.linkedin.com/in/jeremiaspanozzo",
  
  // Common text names used throughout the site
  articlesName: "Articles",
  projectsName: "Projects",
  viewAll: "View All",
  
  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",

  // Blog metadata
  blogTitle: "My Thoughts & Takes",
  blogShortDescription: "Practical wisdom, unfiltered thoughts, and hot takes.",
  blogLongDescription: "Web development, tech trends, and the occasional programming mishap.",

  // Project metadata
  projectTitle: "Projects and Code",
  projectShortDescription: "A list of my web development projects and developer tools.",
  projectLongDescription: "All of my projects, including both frontend and full-stack applications.",

  // Profile image
  profileImage: `${BASE}/public/avatar.jpg`,

  // Menu items
  menu: {
    home: BASE,
    projects: `${BASE}/projects`,
    blog: `${BASE}/blog`,
  }
};