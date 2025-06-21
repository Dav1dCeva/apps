interface Ipelicula{
    id: string;
    nombre: string;
    sinopsis: string;
    imagen: string;
}

interface IpeliculaProps{
    nombre: string;
    imagen: string;
}

const Pelicula=({nombre, imagen}:IpeliculaProps)=>{
    return (
        <div className="pelicula">
            <h1 style={{backgroundColor: 'darkblue'}}>{nombre}</h1>
            <img src={imagen} alt={nombre} style={{width: '450px', height: '450px'}}/>
        </div>
    );
}

export default Pelicula;
export type { Ipelicula};