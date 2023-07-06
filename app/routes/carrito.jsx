import styles from "../styles/carrito.css"

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export function meta(){
    return [
        {
            title: 'GuitarraLA-carrito',
            description: 'Venta de guitarras, compra en linea'
    
        }
    ]
}

function Carrito() {
  return (
   <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">

        </div>
        <aside className="resumen">
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $</p>
        </aside>

   </main>
  )
}

export default Carrito
