import type { Gasolina } from './Gasolina';
import type { Operador } from './Operador';
import type { Surtidor } from './Surtidor';
import type { Usuario } from './Usuario';

export interface Persistencia {
  gasolinas: Gasolina[];
  operadores: Operador[];
  surtidores: Surtidor[];
  usuarios: Usuario[];
}