import { Outlet, useLoaderData } from '@remix-run/react'

import {getGuitarras} from '../models/guitarras.server'
import ListadoGuitarras from '../components/listado-guitarras'

export async function loader(){
  const guitarras = await getGuitarras()
 
  return guitarras.data

}
function Tienda() {
  
const guitarras = useLoaderData()

 
  return (
    <div>
   <ListadoGuitarras
   guitarras={guitarras}
   />
    </div>
  )
}

export default Tienda
