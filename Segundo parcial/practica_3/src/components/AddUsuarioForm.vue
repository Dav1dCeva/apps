<script setup lang="ts">
import { ref } from 'vue'

const newUsuarioText = ref('')

const emit = defineEmits<{
  'add-usuario': [usuarioText: string]
}>()

const handleSubmit = () => {
  const trimmedText = newUsuarioText.value.trim()

  if (trimmedText === '') {
    return
  }

  emit('add-usuario', trimmedText)

  newUsuarioText.value = ''
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSubmit()
  }
}
</script>

<template>
  <div class="add-usuario-form">
    <h2>Agregar Nuevo Usuario</h2>
    
    <div class="form-container">

      <input
        v-model.trim="newUsuarioText"
        type="text"
        placeholder="Escribe el nombre del usuario..."
        class="usuario-input"
        @keypress="handleKeyPress"
        aria-label="Nuevo usuario"
      />

      <button
        @click="handleSubmit"
        :disabled="newUsuarioText.trim() === ''"
        class="add-button"
        type="button"
      >
        ➕ Agregar
      </button>
    </div>

    <p class="hint">
      💡 Presiona Enter o haz clic en "Agregar" para crear el usuario
    </p>
  </div>
</template>

<style scoped>
.add-usuario-form {
  margin-bottom: 2rem;
}

.add-usuario-form h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.form-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.usuario-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ecf0f1;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.usuario-input:focus {
  outline: none;
  border-color: #3498db;
}

.usuario-input::placeholder {
  color: #bdc3c7;
}

.add-button {
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-button:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-1px);
}

.add-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
  transform: none;
}

.hint {
  color: #7f8c8d;
  font-size: 0.85rem;
  margin: 0;
  font-style: italic;
}

@media (max-width: 480px) {
  .form-container {
    flex-direction: column;
  }
  
  .add-button {
    width: 100%;
  }
}
</style>
