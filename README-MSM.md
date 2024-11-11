# Next.js Full Stack Project

## With Next.js 15 and React 19

In this series, we’ll build a full stack web application for a Computer Repair Shop that manages customers and repair tickets.

### Gratitude 
NextJS Essentials: https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources
Rest of the Course: https://github.com/mschwarzmueller/nextjs-course-code
Discord: https://academind.com/community/

https://tcsglobal.udemy.com/course/master-nextjs-full-stack/learn/lecture/41315982#overview

### installation packages
```
 - https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/lecture-specific/initdb.js
 - npm install better-sqlite3 --legacy-peer-dep
 - Create file initdb.js
 - run command > node initdb.js
 - create file in lib-> add async in the page calling 
```
### Reserved filenames in NextJS -
 - page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)
 - layout.js => Create a new layout that wraps sibling and nested pages
 - not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
 - error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
 - loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
 - route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list official docs: https://nextjs.org/docs/app/api-reference/file-conventions

### Dynamic Routing: 
```
[slug]
[...slug]
(admin)

blog/post-1  or blog/post-2
blog
 [slug] - placeholder
    page.js  - BlogPage({params}){} - passing value from the url, {params.slug}
page.js


app/blog/[slug]/page.js       	  { slug: string }
app/shop/[...slug]/page.js	      { slug: string[] }
app/shop/[[...slug]]/page.js      { slug?: string[] }
app/[categoryId]/[itemId]/page.js	{ categoryId: string, itemId: string }
```

### How to get the path
```
import {usePathname} from 'next/navigation'
const path = usePathname
path.startWith(href)
--------------------------------
'use client'
 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  // ...
}
```

### Images
```
insted of height and with you can use the fill property, which will dynamically fill the space

```

### Throw error on the page 
```
 throw new Error('Customer not found')
```

### Migration in Next 15
 - https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
 - Link, image, page to app, Head/Metadata, Router(pages to app directory)
  - Hooks{next/navigation} - useRouter(), usePathname(), and useSearchParams().
  - Data Fetching Methods - The pages directory uses getServerSideProps and getStaticProps to fetch data for pages. Inside the app directory, these previous data fetching functions are replaced with a simpler API built on top of fetch() and async 
  
 ## React Server Components with caching/memoization and revalidation
  ```
export default async function Page() {
 a) // npm run build && npm run dev - production build version, change in any will change change when only fetch is used 
   const staticData = await fetch(`https://...`)

   or top of page :
   export const dynamic = 'force-dynamic'

  b)
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch(`https://...`, { cache: 'force-cache' })
 
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })
 
  c)
  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },      //3600 - 1hr
  })
 
  return <div>...</div>
}
```
server page 
```
// `app` directory
 
// This function can be named anything
async function getProjects() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const projects = await res.json()
 
  return projects
}
 
export default async function Dashboard() {
  const projects = await getProjects()
 
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}

  ```


### Link pAge
 - Using the <Link> Component : <Link href="/dashboard">Dashboard</Link>
 - Using the useRouter hook (Client Components), const router = useRouter() ->router.push('/dashboard')
 - Using the redirect function (Server Components) ,  redirect('/login')
 - Using the native History API, const searchParams = useSearchParams(), window.history.pushState(), keep browser history. so we can go back.

## Connect MongodB
 - https://www.youtube.com/watch?v=TUhNiEan_UQ
 - https://www.youtube.com/watch?v=RSabWmFz0VM - Next js 15 stable Auth js v5/Next-auth mongodb rtk query Part-57
 - https://github.com/webshakil/authjs-v-5
 - https://github.com/hoangvvo/nextjs-mongodb-app/blob/v2/api-lib/middlewares/session.js (mongo, next)

API Query 

```
{ 
"name" : "mask", 
"email" : "mask@gmail.com", 
"password" : "mk@k122334"
}

```
 - GET: http://localhost:3000/api/users


```

## Setting up JSON server 
 - npm install -g json-server
 - Adding db.json file 
 - change in package.json -  "json-server": "json-server --watch db.json --port 3001"
 - npm run json-server  
 - https://github.com/typicode/json-server