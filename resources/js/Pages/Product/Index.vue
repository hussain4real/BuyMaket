<template>
    <div class="container mx-auto pt-4">
        <div v-for="product in products.data" :key="product.id">{{product.name}}</div>
    </div>

</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
export default {
   layout: AppLayout,

    props:{
        products: {
            type: Object,
            default: null
        }
    }

}
</script>
