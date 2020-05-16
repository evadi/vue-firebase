<template>
    <router-link class="nav-item nav-link" :to="{ name: 'image', params: { id: cat.name }}">{{cat.name}}</router-link>
</template>

<script>
export default {
    name: "Category",
    props: {
        cat: Object
    }
}
</script>