// export default async function Page() {
//     let data = await fetch('https://api.vercel.app/blog')
//     let posts = await data.json()
//     return (
//       <ul>
//         {posts.map((post:any) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     )
//   }

export default async function ProjectsPage() {
  const response = await fetch('http://localhost:3001/repos')
  const repos = await response.json()
  return (
    <div className="p-20">
      <h1 className="mb-8 text-xl">Projects</h1>
      <ul>
        {repos.map((repo:any) => (
          <li key={repo.id} className="mb-4">
            <div>{repo.title}</div>
            <div>{repo.description}</div>
            <div>{repo.stargazers_count}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}