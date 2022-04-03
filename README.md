# Next.js Boilerplate with TypeScript, Tailwind, and GraphQL 🚀

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Todos 👩‍💻

-   Animations.
-   Testing.

## Environment Variables 💁

```
NEXT_PUBLIC_SITE_URL=https://website.com // used for sitemap generation
NEXT_PUBLIC_DEFAULT_LOCALE=en-US
NEXT_PUBLIC_API=https://graphql.datocms.com
NEXT_PUBLIC_API_TOKEN=5bc901b83d013770d0625e9f39ccc9
NEXT_PUBLIC_TITLE=GraphQL Consumer
```

## Features 🦸

-   **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
-   **TailwindCSS** - A utility-first CSS framework
-   **GraphQL** - with Apollo
-   **ESLint** - Extended
-   **Stylelint** - Not really used now because of TailwindCSS but it's necessary later.
-   **Sitemaps** - Generated with each build.
-   **Aliases** - Managed from package.json.
-   **Progress bar** - With NProgress.
-   Clean and beautiful **responsive** design.

## Utility functions 🛠

-   formatDate
-   truncate

## Folders and files structure 🗺

```
-   .vscode // local settings for VS Code

-   components // reusable react components

    -   CategoryItem
    -   Footer
    -   Image
    -   Link
    -   PageTitle
    -   PostItem
    -   ReservationDetails
    -   ThemeSwitch
    index.ts // Exports all the public components

    // Each component has the following structure:

    -   -   ComponentName
            -   ComponentName.tsx
            -   index.ts

-   containers

    -   LayoutWrapper
    -   SectionContainer

-   DUMMY_DATA

    -   allArticles.json
    -   article.json

-   lib // helpers

    -   queries
        -   posts // all posts and the single post queries
    - apolloClient.ts
    -   helpers.ts

-   pages

    -   posts
        -   [slug].tsx
    -   _app.tsx
    -   _document.tsx // to add custom font and favicons
    -   index.tsx

-   public

    -   media/favicons

-   styles

    -   global.scss // imports tailwind

-   Types // Just the global types
    -   Elements.ts
    -   Pages.ts
    -   Posts.ts

-   .env
-   .eslintignore
-   .eslintrc.js
-   .prettierignore
-   .prettierrc
-   .stylelintrc
-   babel.config.json // adds "plugin-proposal-export-default-from"
-   next-env.d.ts
-   next-sitemap.js // sitemaps configuration
-   next.config.js
-   package-lock.json
-   package.json
-   postcss.config.js
-   README.md
-   tailwind.config.js
-   tsconfig.json

```

## Dependencies that were added 👷🏼‍♀️

### Production

-   @apollo/client
-   graphql
-   next-sitemap
-   next-themes
-   nprogress
-   react-markdown
-   remove-markdown

### Development

-   @babel/core
-   @babel/eslint-parser
-   @babel/plugin-proposal-class-properties
-   @babel/plugin-proposal-export-default-from
-   @babel/plugin-syntax-dynamic-import
-   @babel/plugin-transform-modules-commonjs
-   @babel/plugin-transform-react-constant-elements
-   @babel/plugin-transform-react-inline-elements
-   @babel/preset-env
-   @babel/preset-react
-   @babel/register
-   @tailwindcss/typography
-   @types/nprogress
-   @types/remove-markdown
-   ajv
-   autoprefixer
-   eslint
-   eslint-config-airbnb
-   eslint-config-airbnb-base
-   eslint-config-next
-   eslint-config-prettier
-   eslint-import-resolver-alias
-   eslint-import-resolver-webpack
-   eslint-plugin-import
-   eslint-plugin-jsx-a11y
-   eslint-plugin-prettier
-   eslint-plugin-react
-   eslint-plugin-react-hooks
-   postcss
-   postcss-scss
-   prettier
-   sass
-   stylelint
-   stylelint-config-standard
-   stylelint-config-standard-scss
-   stylelint-scss
-   stylelint-webpack-plugin
-   tailwindcss

## How to launch the project 🏁

Install [Node.js](https://nodejs.org/) and then open the Terminal/CMD and navigate to the project's folder.
Run the following command:

```bash
npm insatll
```

### Development evnironment

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## `Stay safe 😷`
