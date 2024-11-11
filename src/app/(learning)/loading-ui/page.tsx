export default async function Page() {
    // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
    let data = await fetch('http://localhost:3001/repos')
    let posts = await data.json()
    return (
         <div className="p-20">
         <h1 className="mb-8 text-xl">Projects</h1>
         <ul className="space-y-8">
           {posts.map((_el:any) => (
             <li key={_el.id}>
               <div className="w-full h-10 animate-pulse bg-neutral-100 dark:bg-neutral-700">{_el.title}</div>
             </li>
           ))}
         </ul>
       </div>
    )
  }
