import type { Ipelicula } from "./pelicula";
import Pelicula from "./pelicula";

interface Icartelera {
    listaPeliculas: Ipelicula[]
}

const Cartelera = ({ listaPeliculas }: Icartelera) => {
    return(
        <div className="cartelera">
            <h1>Cartelera</h1>
            {listaPeliculas.map((pelicula)=>(
                <Pelicula key={pelicula.id} nombre={pelicula.nombre} imagen={pelicula.imagen}/>
            ))}
        </div>
    )
}

export default Cartelera;