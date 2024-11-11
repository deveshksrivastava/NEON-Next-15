export default async function Page() {
    // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
    let data = await fetch('http://localhost:3001/repos')
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post:any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
