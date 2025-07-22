Práctica 3 - Gestión de Usuarios, Bares y Bebidas con Vue 3 + TypeScript

Objetivo

- Aplicar la separación de componentes en "contenedores" e "inteligentes".
- Usar `ref`, `computed`, `v-model`, `v-if`, `v-for`, y eventos personalizados.
- Manejar datos de usuarios, bares y bebidas usando listas reactivas.
- Implementar formularios con validación básica.
- Reforzar buenas prácticas en Vue 3 + TS.

## 🧩 Estructura
src/
│
├── components/
│ ├── AddUsuarioForm.vue
│ ├── UsuarioItem.vue
│ ├── UsuarioList.vue
│ ├── AddBarForm.vue
│ ├── BarItem.vue
│ ├── BarList.vue
│ ├── AddBebidaForm.vue
│ ├── BebidaItem.vue
│ └── BebidaList.vue
│
├── views/
│ ├── UsuarioView.vue
│ ├── BaresView.vue
│ └── BebidasView.vue
│
├── types/
│ ├── Usuario.ts
│ ├── Bar.ts
│ └── Bebida.ts
│
└── App.vue

Funcionalidades

Usuarios
- Añadir usuarios con nombre.
- Cambiar estado (activo/inactivo).
- Contador de usuarios activos.
- Eliminar usuarios.

Bares
- Agregar bares con nombre, ubicación, horario, teléfono e imagen.
- Marcar como abierto/cerrado.
- Ver bares abiertos.
- Eliminar bares.

Bebidas
- Añadir bebidas con nombre, descripción, imagen, precio y stock.
- Mostrar información completa.
- Eliminar bebida de la lista.

Técnicas usadas

- Componentes reutilizables.
- Eventos personalizados (`@add-*`, `@remove-*`, `@toggle-*`).
- Reactividad con `ref()` y `computed()`.
- Tipado fuerte con interfaces en carpeta `types/`.
- Estilos `scoped` y diseño responsive simple.
- Uso de `v-if` para mostrar mensajes cuando las listas están vacías.

Ejecución

npm install
npm run dev

Delgado Cuadros ----->Bares
Velez Diego ------->Bebidas
Cevallos David ---->Usuarios
