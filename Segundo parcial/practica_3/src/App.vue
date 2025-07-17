<script setup lang="ts">
import UsuarioView from './views/usuario_view.vue'
</script>

<template>
  <div id="app">
    <UsuarioView />
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 1rem;
}

#app {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;
}

button:focus,
input:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

button,
input,
.task-item {
  transition: all 0.3s ease;
}
</style>