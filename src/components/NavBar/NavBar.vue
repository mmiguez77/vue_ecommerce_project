<script>
import { RouterLink } from 'vue-router'


</script>

<template>
      <nav >
        <span>Logo</span>
        <div>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products/all">Todos</RouterLink>
          <RouterLink to="/products/motorola">Motorola</RouterLink>
          <RouterLink to="/products/iphone">Iphone</RouterLink>
          <RouterLink to="/products/samsung">Samsung</RouterLink>
          <RouterLink to="/products/nokia">Nokia</RouterLink>
        </div>
          <span>Bag</span>
      </nav>
</template>



<style scoped>

nav {
  display: flex;
  justify-content: space-around;
}

div {
  display: flex;
  justify-content: space-around;
  background: red;
  width: 550px;
}

</style>