# Next.js Full Stack Project

## With Next.js 15 and React 19

In this series, we’ll build a full stack web application for a Computer Repair Shop that manages customers and repair tickets.

### Key Feature
 - Server side rendernig/SEO support for search engine, and blend client and server side, featch data from server and render on the client pages.
 - File based routing - No react-router-dom, here based on the file and folders, [id], (), less code, understandable
 - Build FUll stack framework - add backend code, connect to DB, get and store data into tables,  file system, authentiation
 - npx create-next-app@latest  + node.

### Gratitude 

This Next.js Full Stack Project tutorial series is made possible by [Sentry](https://bit.ly/try-sentry-dg). I consider [Sentry](https://bit.ly/try-sentry-dg) to be an essential part of my tech stack, and we will be using [Sentry](https://bit.ly/try-sentry-dg) in this Next.js full stack project.

![Next.js Full Stack Project](./readme-banner.png?raw=true)

## Lesson Help
If you get stuck on any lesson in the series, (1) navigate to the course branch for your current lesson and (2) view or (3) download the code for more help.

![Preview of downloading code in github](./github.png?raw=true)

## Prerequisites
In this series, I’ll assume you have an intermediate skill level and are not a beginner. You should have some experience with React and understand a full stack project includes both client and server code environments. Prior experience with Next.js is not required.

### 💻 You will need:
- [Node.js (npm / npx)](https://nodejs.org/)

### 💻 Recommended Tools:
- [VS Code](https://code.visualstudio.com/)
- [git & git bash](https://git-scm.com/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 📚 References
- 🔗 [Next.js](https://nextjs.org/)
- 🔗 [React](https://react.dev/)
- 🔗 [TypeScript](https://www.typescriptlang.org/)
- 🔗 [TailwindCSS](https://tailwindcss.com/)
- 🔗 [ShadCN/ui](https://ui.shadcn.com/)
- 🔗 [Sentry](https://bit.ly/sentry-docs-dg)
- 🔗 [Kinde Auth](https://kinde.com/dgray-nextjsstack/)
- 🔗 [Neon Postgres](https://fyi.neon.tech/davegray)
- 🔗 [Drizzle ORM](https://orm.drizzle.team/)
- 🔗 [react-hook-form](https://react-hook-form.com/)
- 🔗 [Zod](https://zod.dev/)
- 🔗 [next-safe-action](https://next-safe-action.dev/)
- 🔗 [TanStack Table](https://tanstack.com/table/latest)
- 🔗 [Vercel](https://vercel.com/home)

---

### Author Links

👋 Hello, I'm Dave Gray.

👉 [My Courses](https://courses.devesh.codes/)

✅ [Check out my YouTube Channel with hundreds of tutorials](https://www.youtube.com/watch?v=djDgTYrFMAY&t=559s).

🚩 [Subscribe to my channel](https://bit.ly/3nGHmNn)

💖 [Support My Content](https://patreon.com/devesh)

☕ [Buy Me A Coffee](https://buymeacoffee.com/devesh)

🚀 Follow Me:

- 🔗 [Twitter](https://twitter.com/devesh)
- 🔗 [LinkedIn](https://www.linkedin.com/in/devesh/)
- 🔗 [Blog](https://devesh)

---

### 🎓 Academic Honesty

**DO NOT COPY FOR AN ASSIGNMENT** - Avoid plagiarism and adhere to the spirit of this [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/).


Steps
 - Install next.js 15 with react 19 rc
```
    npx create-next-app@latest
    Need to install the following packages:
    create-next-app@15.0.2
    Ok to proceed? (y)

    √ What is your project named? ... next15-repair-shop
    √ Would you like to use TypeScript? ... Yes
    √ Would you like to use ESLint? ... Yes
    √ Would you like to use Tailwind CSS? ... Yes
    √ Would you like your code inside a `src/` directory? ...Yes
    √ Would you like to use App Router? (recommended) ... Yes
    √ Would you like to use Turbopack for next dev? ... Yes
    √ Would you like to customize the import alias (@/* by default)? ... No ****
    Creating a new Next.js app in D:\sites\Mandir-Next.js\next15-repair-shop.
```
 -  npx shadcn@latest init
 -  npm i @radix-ui/react-slot --legacy-peer-dep


## Neon Database Setup

```
 -   npm i drizzle-orm @neondatabase/serverless --legacy-peer-dep
 -   npm i -D drizzle-kit tsx dotenv --legacy-peer-dep
 - https://console.neon.tech/app/projects/red-sea-65341444/quickstart (DATA BASE LINK)
 - npm run db:genrate
 - npm run db:migrate

```

## Login 
```
 - https://www.youtube.com/watch?v=GjVcSpKCoB8&t=2042s
 - https://techbluehost.kinde.com/admin

```
