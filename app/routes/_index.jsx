import {getGuitarras} from "../models/guitarras.server"
import {getPosts} from  "../models/posts.server"
import {getCursos} from "../models/cursos.server"
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "../components/listado-guitarras"
import ListadoPosts from "../components/listado-posts"
import Curso from "../components/curso"



export function meta(){


}

export async function loader(){
  const [ guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ])



  return {guitarras: guitarras.data, posts: posts.data, cursos: cursos.data}
}
function Index() {
  const {guitarras, posts,cursos} = useLoaderData()

  return (
  <>
    <main className="contenedor">
     
        <ListadoGuitarras
      guitarras ={guitarras}
      />
     
    </main>
   
      <Curso
      cursos={cursos.attributes}
      />
  
    <section className="contenedor">
      <ListadoPosts
      posts ={posts}
      />

    </section>
   
   
  </>
  )
}

export default Index

  