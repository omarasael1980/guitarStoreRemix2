import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"
import ListadosPosts from "../components/listado-posts"


export async function loader(){
  const posts = await getPosts()
  return posts.data
}


function Blog() {
  const posts  = useLoaderData()
 
  return (
    
      <ListadosPosts
      posts={posts}
      />
    
  )
}

export default Blog

