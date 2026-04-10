export type TechStack = {
  key: string
  title: string
  href: string
  icon: TechStackIcon
  categories: string[]
  theming?: boolean
}

export type TechStackIcon =
  | "typescript"
  | "javascript"
  | "java"
  | "spring"
  | "kafka"
  | "drizzle"
  | "betterauth"
  | "neon"
  | "nodejs"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "shadcn"
  | "git"
  | "docker"
  | "mysql"
  | "redis"
  | "figma"
  | "flutter"


// 1. TypeScript
// 2. JavaScript
// 3. Java
// 4. Spring Boot
// 5. Apache Kafka
// 6. Drizzle ORM
// 7. BetterAuth
// 8. Neon DB
// 10. Node.js
// 11. React
// 12. Next.js
// 13. Tailwind CSS
// 14. shadcn / ui
// 18. Git
// 19. Docker
// 20. MySQL
// 21. Redis
// 22. Figma