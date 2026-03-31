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
          "path": "quick-setups/better-auth/lib/auth/auth.ts",
          "type": "registry:lib",
          "target": "src/lib/auth.ts",
        },
        {
          "path": "quick-setups/better-auth/lib/auth-client/auth-client.ts",
          "type": "registry:lib",
          "target": "src/lib/auth-client/auth-client.ts",
        },
        {
          "path": "quick-setups/better-auth/api/auth/route/route.ts",
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
          "path": "quick-setups/drizzle/db/db.ts",
          "type": "registry:file",
          "target": "db/index.ts"
        },
        {
          "path": "quick-setups/drizzle/schema/schema.ts",
          "type": "registry:file",
          "target": "db/schema.ts"
        },
        {
          "path": "quick-setups/drizzle/config/drizzle-config/drizzle.config.ts",
          "type": "registry:file",
          "target": "drizzle.config.ts"
        }
      ]
    }
  ]

} satisfies Registry;
