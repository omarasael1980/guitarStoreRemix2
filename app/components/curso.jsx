import {formatearFecha} from "../../utils/helpers"

function Curso({cursos}) {
    const {titulo, contenido, imagen, createdAt} = cursos
    console.log(imagen)
  return (
   <>
    <section className="curso">
        <style jsx='true'>
            {`.curso { 
                background-image:linear-gradient(to right, rgb(0 0 0 /.55), rgb(0 0 0 /0.7)),url(${imagen.data.attributes.url})
                }`}
        </style>
        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
               
                <p className="fecha">{formatearFecha(createdAt)}</p>
            </div>
        </div>
    </section>
   </>
  )
}

export default Curso
