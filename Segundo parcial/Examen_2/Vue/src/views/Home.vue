<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Estación de Servicio</h1>

    <div v-for="gas in gasolinas" :key="gas.id" class="p-4 border rounded mb-4">
      <h2 class="text-xl font-semibold">{{ gas.tipo }}</h2>
      <p>Precio por litro: ${{ gas.precioPorLitro.toFixed(2) }}</p>
      <p>Stock disponible: {{ gas.stockLitros }} litros</p>

      <label class="block mt-2">
        Cantidad en galones:
        <input 
          type="number" 
          min="0" 
          step="0.1"
          v-model.number="cantidades[gas.id]" 
          class="border p-1 rounded w-24 ml-2"
        />
      </label>

      <p v-if="cantidades[gas.id] > 0" class="mt-2 font-semibold">
        Total: ${{ calcularPrecio(gas, cantidades[gas.id]).toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Gasolina } from '../types/Gasolina';
import datos from '../Objeto.json';
import { ref } from 'vue';

const gasolinas = (datos.gasolinas as any[]).map(gas => ({
  ...gas,
  stockLitros: gas.stockLitro
})) as Gasolina[];

const cantidades = ref<Record<number, number>>({});

function calcularPrecio(gas: Gasolina, galones: number): number {
  const litros = galones * 3.785;
  return litros * gas.precioPorLitro;
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
}
</style>
