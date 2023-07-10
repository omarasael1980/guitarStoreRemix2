import { Outlet } from "@remix-run/react"

function Blog() {

 
  return (
    <main className="contenedor">
        <Outlet/>
    </main>
  )
}

export default Blog

