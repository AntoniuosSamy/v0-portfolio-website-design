export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "banking-transaction-system",
    title: "Banking Transaction System",
    category: "QA Case Study",
    shortDescription: "A secure Java-based banking platform tested with comprehensive test automation and quality assurance practices.",
    description: [
      "This project involved comprehensive quality assurance for a secure Java-based banking platform designed to manage accounts and financial transactions with high data integrity. The system features robust exception handling and persistent data storage using MySQL and SQLite, built on core OOP principles.",
      "I created and executed a comprehensive Master Test Plan covering functional, regression, and API testing. UI workflows were automated using Selenium WebDriver to ensure consistent transaction processing, while backend operations were validated using Postman for API endpoints.",
      "All defects and test activities were meticulously managed within JIRA following the complete defect lifecycle from identification to resolution, ensuring zero critical issues in production.",
    ],
    features: [
      "Automated UI test scripts for user authentication and account management",
      "API endpoint validation for transaction processing",
      "Database integrity testing for financial data",
      "Error handling and exception scenarios",
      "Security validation for user credentials and transactions",
      "Regression testing across all major features",
    ],
    technologies: ["Java", "Selenium WebDriver", "Postman", "JIRA", "MySQL", "SQLite", "Manual Testing"],
    coverImage: "/banking-project-cover.jpg",
    thumbnailImage: "/banking-project-cover.jpg",
    gallery: [
      { url: "/banking-project-gallery-1.jpg", caption: "QA Testing Dashboard" },
      { url: "/banking-project-cover.jpg", caption: "Test Automation Results" },
    ],
    timeline: "2 months (2025)",
    role: "QA Engineer",
    githubUrl: "https://github.com/AntoniuosSamy/Banking-Transaction-System",
    relatedProjects: [
      {
        slug: "ecommerce-testing",
        title: "E-Commerce Testing Project",
        category: "QA Case Study",
        image: "/qa-testing-2.jpg",
      },
      {
        slug: "automation-framework",
        title: "Selenium Automation Framework",
        category: "Automation Testing",
        image: "/qa-testing-3.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "ecommerce-testing",
    title: "E-Commerce Website Testing Project",
    category: "QA Case Study",
    shortDescription:
      "Comprehensive functional and API testing of an e-commerce platform with detailed test case design and defect management.",
    description: [
      "This QA project involved thorough testing of a sample e-commerce web application with focus on critical user workflows. I designed and executed comprehensive test cases covering registration, product search, shopping cart functionality, and checkout processes.",
      "The testing approach combined manual functional testing with automated regression testing to ensure consistent behavior across releases. API testing was performed using Postman to validate backend endpoints for product data, pricing, and order processing.",
      "All defects were tracked and managed throughout their lifecycle using JIRA, with clear reproduction steps, priority levels, and resolution tracking to ensure rapid developer response and resolution.",
    ],
    features: [
      "Test case design for user registration and authentication",
      "Product search and filtering validation",
      "Shopping cart and checkout process testing",
      "Payment gateway integration testing",
      "API endpoint validation for e-commerce operations",
      "Regression testing across product updates",
      "Performance testing for load scenarios",
    ],
    technologies: ["Manual Testing", "Functional Testing", "API Testing", "Postman", "JIRA", "SQL", "Test Case Design"],
    coverImage: "/ecommerce-testing-cover.jpg",
    thumbnailImage: "/ecommerce-testing-cover.jpg",
    gallery: [
      { url: "/ecommerce-testing-gallery-1.jpg", caption: "API Testing Interface" },
      { url: "/ecommerce-testing-cover.jpg", caption: "Test Case Dashboard" },
    ],
    timeline: "1.5 months (2025)",
    role: "QA Tester",
    relatedProjects: [
      {
        slug: "banking-transaction-system",
        title: "Banking Transaction System",
        category: "QA Case Study",
        image: "/qa-testing-1.jpg",
      },
      {
        slug: "automation-framework",
        title: "Selenium Automation Framework",
        category: "Automation Testing",
        image: "/qa-testing-3.jpg",
      },
    ],
  },
  {
    id: 3,
    slug: "automation-framework",
    title: "Selenium Automation Framework",
    category: "Automation Testing",
    shortDescription:
      "Custom-built test automation framework using Selenium WebDriver for web application testing with reusable scripts and Page Object Model patterns.",
    description: [
      "Developed a comprehensive Selenium automation framework to increase test efficiency and reduce manual effort in regression testing. The framework was built using Java and follows industry best practices including the Page Object Model design pattern for maintainability.",
      "The framework features automated test scripts for common workflows such as user authentication, form submissions, and navigation flows. By creating reusable test components and data-driven test cases, we achieved significant improvements in test coverage and reduced testing cycles.",
      "Integration with CI/CD pipelines enables automated test execution on every code commit, providing rapid feedback to development teams and ensuring quality gates are met before production releases.",
    ],
    features: [
      "Page Object Model architecture for maintainable test scripts",
      "Data-driven testing approach for multiple test scenarios",
      "Comprehensive error handling and logging",
      "Cross-browser testing capabilities",
      "Screenshots and reports on test failures",
      "CI/CD pipeline integration",
      "Test execution reporting and metrics",
    ],
    technologies: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Git", "Jenkins", "Page Object Model"],
    coverImage: "/selenium-framework-cover.jpg",
    thumbnailImage: "/selenium-framework-cover.jpg",
    gallery: [
      { url: "/selenium-framework-gallery-1.jpg", caption: "Automation Framework" },
      { url: "/selenium-framework-cover.jpg", caption: "Test Execution Pipeline" },
    ],
    timeline: "3 months (2025)",
    role: "Automation QA Engineer",
    githubUrl: "https://github.com/AntoniuosSamy",
    relatedProjects: [
      {
        slug: "banking-transaction-system",
        title: "Banking Transaction System",
        category: "QA Case Study",
        image: "/qa-testing-1.jpg",
      },
      {
        slug: "ecommerce-testing",
        title: "E-Commerce Testing Project",
        category: "QA Case Study",
        image: "/qa-testing-2.jpg",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
