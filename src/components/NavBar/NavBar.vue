<script>
import { RouterLink } from 'vue-router'
import './navbar.css'

</script>

<template>
      <nav class="nav-nav">
        <RouterLink to="/">Home</RouterLink>
        <div class="div-nav">
          <RouterLink to="/products/all">Todos</RouterLink>
          <RouterLink to="/products/motorola">Motorola</RouterLink>
          <RouterLink to="/products/iphone">Iphone</RouterLink>
          <RouterLink to="/products/samsung">Samsung</RouterLink>
          <RouterLink to="/products/nokia">Nokia</RouterLink>
        </div>
          <span>Bag</span>
      </nav>
</template>



