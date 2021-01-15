<template>
    <div class="container pt-4">
        <div v-for="product in products.data" :key="product.id">
            <div>{{ product.name }}</div>
        </div>
    </div>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
export default {
    layout: AppLayout,

    props: {
        products: Object
    }
};
</script>
