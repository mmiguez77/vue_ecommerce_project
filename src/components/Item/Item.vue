<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Counter from '../Counter/Counter.vue'
import getProductById from '@/functions/getProductById.js';

    const route = useRoute()
    const productRef = ref(null)
    async function getProduct () {
        const prod = await getProductById(parseInt(route.params.productId))
        productRef.value = prod
    }
    
    onMounted(() => {
        getProduct()
    });
    
    function onAdd(counter){
        console.log(counter);
    }


</script>

<template>
    <div>
        
        <h1 v-if="!productRef"> Aguarde ...</h1>
        
        <div v-else> 
            <h1>{{ productRef.name }}</h1>
            <img :src="productRef.imageUrl" alt="{{ productRef.name }}">
            <h3> Precio: {{ productRef.price  }}</h3>
            <span>{{  productRef.category  }}</span>
            <Counter 
                :stock="productRef.stock"
                @emit-on-add="(counter) => onAdd(counter)"
            />
        </div>

    </div>
</template>


<style scoped>

img {
    width: 200px;
}

</style>