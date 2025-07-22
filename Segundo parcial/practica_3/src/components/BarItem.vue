<script setup lang="ts">
import type { Bar } from '../types/Bar'

/**
 * COMPONENTE DE PRESENTACIÓN PARA MOSTRAR INFORMACIÓN DE UN BAR
 * 
 * Este componente es responsable de:
 * 1. Recibir UN bar vía props
 * 2. Mostrar la información del bar
 * 3. Emitir eventos cuando el usuario interactúa con el bar
 */

interface Props {
  bar: Bar
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'remove-bar': [id: number]
}>()

const handleRemove = () => {
  emit('remove-bar', props.bar.id)
}
</script>

<template>
  <div class="bar-item">
    <!-- Contenedor principal del bar -->
    <div class="bar-content">
      <img 
        :src="props.bar.imageUrl" 
        :alt="props.bar.nombre"
        class="bar-image"
      />
      
      <div class="bar-info">
        <h3 class="bar-name">{{ props.bar.nombre }}</h3>
        <p class="bar-location">
          📍 {{ props.bar.ubicacion }}
        </p>
        <p class="bar-schedule">
          🕒 {{ props.bar.horario }}
        </p>
        <p class="bar-phone">
          📞 {{ props.bar.telefono }}
        </p>
      </div>
    </div>
    
    <button
      @click="handleRemove"
      class="remove-button"
      :aria-label="`Eliminar bar '${props.bar.nombre}'`"
      title="Eliminar bar"
    >
      🗑️
    </button>
  </div>
</template>

<style scoped>
.bar-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.bar-item:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
  transform: translateY(-2px);
}

.bar-content {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.bar-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.bar-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bar-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}

.bar-location,
.bar-schedule,
.bar-phone {
  margin: 0;
  color: #6c757d;
}

.remove-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.remove-button:hover {
  opacity: 1;
  background-color: #dc3545;
  transform: scale(1.1);
}

@media (max-width: 480px) {
  .bar-content {
    flex-direction: column;
  }
  
  .bar-image {
    width: 100%;
    height: 200px;
  }
  
  .bar-item {
    padding: 0.75rem;
  }
}
</style>