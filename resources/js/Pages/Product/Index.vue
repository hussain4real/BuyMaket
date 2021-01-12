<template>
    <div>
        <div v-for="product in products" :key="product.id">{{product.name}}</div>
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
