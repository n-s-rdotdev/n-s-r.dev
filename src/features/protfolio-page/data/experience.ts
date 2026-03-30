import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "capgemini",
    companyName: "Capgemini",
    companyLogo:
      "/capgemini-logo.png",
    companyWebsite: "https://capgemini.com",
    description: "Worked with **Cisco** on the `Cisco Optical Network Planner (CONP)` and `Cisco Optical Network Controller (CONC)` projects.",
    positions: [
      {
        id: "1",
        title: "Software Engineer 2",
        employmentPeriod: {
          start: "01.2024",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "work",
        description: `- Built the **Connection Testing feature** across **Java, Spring Boot, PostgreSQL, JavaScript, and Next JS**, helping clients validate device health before onboarding and avoid post-deployment failures.
- Built the **Notification Replay** feature with **Java, Spring Boot, PostgreSQL, JavaScript, and Next JS**, **reducing reconnection time from 40 minutes to 2 minutes** for short-term (< 1 hour) disconnections.
- Led **debugging** of **production** and **development** issues, improving **feature stability** and **code quality, readability, and maintainability** across the stack.
- Built the **Live Network Import** feature from **Cisco Optical Network Controller (CONC)** to **Cisco Optical Network Planner (CONP)**, covering **end-to-end network import, data persistence, entity mapping, analysis, and network upgrades** for accurate network migration.
- Delivered features for the **New Network Platform** with **Spring Boot REST APIs**, **PostgreSQL schemas and entity mappings**, and **responsive React JS UI** updates.
- Refactored the **React JS Network Tree implementation**, achieving **>80% reduction in UI load time** and improving frontend scalability and maintainability.
`,
        skills: [
          "TypeScript",
          "Next.js",
          "Java",
          "Springboot",
          "Microservices",
          "Kafka",
          "Kubernetes",
          "Figma",
        ],
        isExpanded: true,
      },
      {
        id: "2",
        title: "Software Engineer 1",
        employmentPeriod: {
          start: "06.2022",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: "work",
        description: `- Developed a **full-stack network** filtering system leveraging **Spring Boot**, **PostgreSQL**, and **React JS**, enabling dynamic filtering of network eleåments and parameters, and improving search efficiency by 50% for critical network data.
- Redesigned the UI menu system, transforming a context menu into an options menu and integrating commonly used features, improving usability, accessibility, and overall frontend efficiency.
`,
        skills: [
          "JavaScript",
          "React.js",
          "Java",
          "Springboot",
          "Microservices",
          "Kafka",
          "Docker",
          "Figma",
        ],
        isExpanded: false,
      },
      {
        id: "3",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "02.2022",
          end: "05.2022",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a full-stack network simulation feature allowing users to create custom networks and view all available or user-defined paths, implementing Dijkstra’s shortest path and K-Path algorithms for optimized route computation, using Java, Spring Boot, PostgreSQL, React JS, and JavaScript.
`,
        skills: [
          "JavaScript",
          "React.js",
          "Java",
          "Springboot",
          "Figma",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
]
