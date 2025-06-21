import './App.css'
import Cartelera from './componentes/cartelera'
import type { Ipelicula } from './componentes/pelicula'

const peliculas: Ipelicula[] = [
  {
    id: '1', 
    nombre: 'Avatar', 
    sinopsis: 'Un mundo de fantasía', 
    imagen: 'https://example.com/avatar.jpg'},
  {
    id: '2', 
    nombre: 'Titanic', 
    sinopsis: 'Una historia de amor trágica', 
    imagen: 'https://example.com/titanic.jpg'},
  {
    id: '3', 
    nombre: 'Inception', 
    sinopsis: 'Un viaje a través de los sueños', 
    imagen: 'https://example.com/inception.jpg'},
]

function App() {
  return (
    <>
      <Cartelera listaPeliculas={peliculas}/>
    </>
  )
}

export default App
