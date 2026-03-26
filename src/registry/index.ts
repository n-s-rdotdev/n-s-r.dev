import type { Registry } from "shadcn/schema";

export const registry = {
  "name": "n-s-r.dev",
  "homepage": "https://n-s-r.dev/components",
  "items": [
    {
      "name": "better-auth",
      "title": "Better Auth",
      "author": "rakshith <rakshith@n-s-r.dev>",
      "description": "A collection of authentication components and utilities for Next.js applications.",
      "type": "registry:block",
      "dependencies": ["better-auth"],
      "files": [
        {
          "path": "/lib/auth/auth.ts",
          "type": "registry:lib",
          "target": "src/lib/auth.ts",
        },
        {
          "path": "/lib/auth-client/auth-client.ts",
          "type": "registry:lib",
          "target": "src/lib/auth-client/auth-client.ts",
        },
        {
          "path": "/api/auth/route/route.ts",
          "type": "registry:file",
          "target": "src/api/auth/route/route.ts",
        },
      ]
    },
    {
      "name": "drizzle",
      "title": "Drizzle ORM",
      "author": "rakshith <rakshith@n-s-r.dev>",
      "description": "A collection of database utilities and configurations for Drizzle ORM.",
      "type": "registry:block",
      "dependencies": [
        "drizzle-orm",
        "@neondatabase/serverless"
      ],
      "devDependencies": [
        "drizzle-kit",
        "tsx"
      ],
      "files": [
        {
          "path": "/db/db/db.ts",
          "type": "registry:file",
          "target": "db/index.ts"
        },
        {
          "path": "/db/schema/schema.ts",
          "type": "registry:file",
          "target": "db/schema.ts"
        },
        {
          "path": "/db/config/drizzle-config/drizzle.config.ts",
          "type": "registry:file",
          "target": "drizzle.config.ts"
        }
      ]
    }
  ]

} satisfies Registry;