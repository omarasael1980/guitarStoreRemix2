import { useState, useEffect } from 'react'
import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '../models/guitarras.server'


export async function loader(params){

  const {guitarraUrl} = await params.params
  
  const guitarra = await getGuitarra(guitarraUrl)
  if(guitarra.data.length === 0){
    throw new Response("",{
      status:404,
      statusText: "Guitarra no encontrada"
    })
  }
  
return guitarra
}

export function meta(data){
  if(!data){
    return{
      title:"GuitarraLA -- Guitarra no encontrada",
      description:"Guitarra no encontrada"
    }
  }else{
    return [
      {
        title: `GuitarraLA ${data.data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras,  ${data.data.data[0].nombre}`
      }
    ]
  }
 
 
}



function Guitarra() {
  const [cantidad, setCantidad] =useState(0)
  const guitarraUrl = useLoaderData()
  
  const {nombre, precio, descripcion, imagen} = guitarraUrl.data[0].attributes
 const handleSubmit = e=>{
  e.preventDefault()
  if(cantidad <1){
    alert('Debes seleccionar una cantidad')
    return
  }
  //se guarda la info en localstorage 
  const guitarraSeleccionada = {
    id: guitarraUrl.data[0].id,
    imagen: imagen.data.attributes.formats.medium.url,
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  }
  console.log(guitarraSeleccionada)
 }
    return (
      <main className='contenedor guitarra'>
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen de la guitarra ${nombre}`} />
        <div className='contenido'>
          <h3 className='heading'>{nombre}</h3>
          <p className='texto'>{descripcion}</p>
          <p className="precio">${precio}</p>
          <form onSubmit={handleSubmit} className='formulario'>
            <label htmlFor="cantidad">Cantidad</label>
            <select 
                    name="cantidad" 
                    id="cantidad"    
                    onChange = {e=>setCantidad(+e.target.value)}
                    >
                     
              <option value="">==Selecciona==</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>

            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>

       
      </main>
    )
  }
  
  export default Guitarra