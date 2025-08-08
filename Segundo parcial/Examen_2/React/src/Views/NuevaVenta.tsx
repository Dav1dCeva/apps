import React, { useState } from "react";
import type { Operador } from "../types/Operador";
import type { Surtidor } from "../types/Surtidor";
import datos from "../Objeto.json";

const NuevaVenta: React.FC = () => {
  const operadores = datos.operadores as Operador[];
  const surtidores = datos.surtidores as Surtidor[];

  const [operadorId, setOperadorId] = useState<number>(operadores[0]?.id || 0);
  const [surtidorId, setSurtidorId] = useState<number>(surtidores[0]?.id || 0);

  const handleNuevaVenta = () => {
    const operador = operadores.find(o => o.id === operadorId);
    const surtidor = surtidores.find(s => s.id === surtidorId);

    alert(`Nueva venta:\nOperador: ${operador?.nombre}\nSurtidor: ${surtidor?.ubicacion}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Nueva Venta</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Operador:{" "}
          <select value={operadorId} onChange={e => setOperadorId(Number(e.target.value))}>
            {operadores.map(op => (
              <option key={op.id} value={op.id}>
                {op.nombre} (Turno: {op.turno})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Surtidor:{" "}
          <select value={surtidorId} onChange={e => setSurtidorId(Number(e.target.value))}>
            {surtidores.map(su => (
              <option key={su.id} value={su.id}>
                {su.ubicacion} - {su.estado}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={handleNuevaVenta} style={{ padding: "5px 10px" }}>
        Nueva Venta
      </button>
    </div>
  );
};

export default NuevaVenta;
