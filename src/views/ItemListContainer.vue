<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import productsPromise from '@/functions/productsPromise.js';

  const productsArray = ref([])
  
  const route = useRoute()

  /*const { categoryId } = defineProps({
      categoryId: { type: String }
    });
  */

  async function getProducts(catId) {
    const response = await productsPromise(catId)
    productsArray.value = response
  }
    

  onMounted(() => {
    getProducts(route.params.categoryId)
  });

  watch(
    () => route.params.categoryId,
    () => getProducts(route.params.categoryId)
  )
  


</script>

<template>
  <main>
    <h1>PRODUCTOS</h1>

    <ul v-for="product in productsArray" key={{product.id}}>
      
      <li>
          {{ product.name }} 
         <p> {{ product.price }} </p>
         <img :src="product.imageUrl" alt="{{ product.name }}"/>
         <button>
          <router-link :to="{name: 'detail', params: { productId: product.id } }">Detalle</router-link>
          
        </button>
      </li>
    </ul>

  </main>
</template>

<style scoped>

img {
  width: 200px;
  height: auto;
}


</style>