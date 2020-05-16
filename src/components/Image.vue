<template>
    <img v-bind:src="url" />
</template>

<script>
export default {
    name: "CategoryImage",
    props: {
        url: String
    },
    created() {
        console.log(this.image);
    }
}
</script>