
### getServerSideProps	getStaticProps vs Next.js15

```
 {/* https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md */}
Understanding getServerSideProps and getStaticProps in Next.js

Next.js provides two primary methods for fetching data on the server side: getServerSideProps and getStaticProps. These functions are essential for building dynamic, SEO-friendly, and performant web applications.

### getServerSideProps

Execution: Runs on every request to the server.
Data Freshness: Fetches the latest data on each request.
Use Cases:
Dynamic content that changes frequently (e.g., real-time data, user-specific data).
Secure data that shouldn't be exposed in the client-side JavaScript.
SEO-critical pages that require up-to-date content.


// `pages` directory
 
export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
  const response = await fetch(`https://...`)
  const projects = await response.json()
 
  return { 
     props: { 
        projects or responseObject: projects
    } 
 }
}
 
export default function Dashboard({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}


### getStaticProps

Execution: Runs during the build process or on-demand revalidation.
Data Freshness: Fetches data once during the build or on revalidation.
revalidation will genrate the fresh page after 10 sec or 3600

Use Cases:
Static content that doesn't change often (e.g., blog posts, product listings).
Improving initial load performance by pre-rendering pages.
SEO-friendly pages that need to be indexed by search engines.


// `pages` directory
 
export async function getStaticProps() {
  const res = await fetch(`https://...`)
  const projects = await res.json()
 
  return { props: { projects } }
}
 
export default function Index({ projects }) {
  return projects.map((project) => <div>{project.name}</div>)
}


### Key Differences
Execution Time	Server-side on every request	Build time or on-demand revalidation
Data Freshness	Always fresh	Can be stale if not revalidated
SEO	Excellent for SEO as it fetches data on every request	Good for SEO, but can be less optimal for frequently changing content
Performance	Can be slower for initial load due to server-side rendering	Faster initial load due to pre-rendering
Cost	Higher server costs due to server-side rendering on every request	Lower server costs as data is fetched during build or revalidation





### Next.js 15 Changes

Next.js 15, with its introduction of the App Router, brings significant changes to data fetching and routing. While getServerSideProps and getStaticProps are still supported, there are new approaches to consider:

React Server Components (RSC):
RSCs allow you to fetch data directly within your components, making data fetching more declarative and efficient.
They offer a more flexible and performant way to build server-rendered applications.
Data Fetching with RSCs:
Use fetch or other data fetching methods directly within your RSCs.
Leverage the power of streaming responses to deliver content incrementally.
Hybrid Approach:
You can continue to use getServerSideProps and getStaticProps alongside RSCs for specific use cases.
Choosing the Right Approach

The best approach depends on your specific needs:

For dynamic content that requires frequent updates, use getServerSideProps or RSCs with fetch.
For static content that doesn't change often, use getStaticProps.
For a hybrid approach, combine getServerSideProps, getStaticProps, and RSCs to optimize performance and user experience.
By understanding the nuances of getServerSideProps, getStaticProps, and the new features in Next.js 15, you can build efficient, scalable, and SEO-friendly web applications.

// `app` directory
 
// This function can be named anything
async function getProjects() {
  const res = await fetch(`https://...`)
  const projects = await res.json()
 
  return projects
}
 
export default async function Index() {
  const projects = await getProjects()
 
  return projects.map((project) => <div>{project.name}</div>)
}


--------------------------
Dynamic paths (getStaticPaths)
In the pages directory, the getStaticPaths function is used to define the dynamic paths that should be pre-rendered at build time.

// `app` directory
import PostLayout from '@/components/post-layout'
 
export async function generateStaticParams() {
  <!-- return [{ id: '1' }, { id: '2' }] -->
  return {
    fallback: true,
    paths:[
      { meetupID:'m1'}, { meetupID:'m2'}
    ]
  }
}
 
async function getPost(params) {
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()
 
  return post
}
 
export default async function Post({ params }) {
  const post = await getPost(params)
 
  return <PostLayout post={post} />
}

```