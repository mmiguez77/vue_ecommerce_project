<script setup>
import { RouterView } from 'vue-router';

import NavBar from './components/NavBar/NavBar.vue'
import './style.css'

</script>

<template>
  
  <header>
    <NavBar/>
  </header>
  <body class="app">
    
    <RouterView/>
  </body>
</template>
<style scoped>

</style>
