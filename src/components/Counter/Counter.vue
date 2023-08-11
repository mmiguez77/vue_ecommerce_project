<script setup>
import { ref } from 'vue'

    const { stock } = defineProps({
        stock: { type: Number, required: true }
    });

    const counter = ref(0)

    function increment() {
        if(counter.value < stock) {
            counter.value++
        }
    }

    function decrement() {
        if(counter.value > 0) {
            counter.value--
        }
    }

</script>

<template>
    <div>

        <p> {{ counter }} </p>
        <div class="pepe">
            <button @click="increment"> + </button>
            <button @click="$emit('emitOnAdd', counter)">Comprar</button>
            <button @click="decrement"> - </button>
        </div>

    </div>


</template>

<style scoped>

div {
    align-items: center;
    text-align: center;
    width: 150px;
}

p {
    font-size: 20px;
    font-weight: 700;
}

.pepe {
    width: 100%;
    display: flex;
    justify-content: space-around ;
}


</style>