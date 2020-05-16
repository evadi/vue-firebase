<template>
    <div class="images">
        <h1>
            My Images
        </h1>
        <ul>
            <li v-for="cat in categories" :key="cat.name">
                <Category v-bind:cat="cat"></Category>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.images {
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
            margin: 0;
            padding: 0; 
        }
    }
}
</style>

<script>
import { db } from "../db.js"
import Category from "../components/Category"

export default {
    name: "Images",
    data: function() {
        return{
            categories: []
        }
    },
    mounted() {
        db.collection("categories")
            .orderBy("name")
            .get()
            .then(s => {
                this.categories = [];
                s.forEach((d) => {
                    this.categories.push(d.data())
                })
            })
    },
    components: {
        Category
    }
}
</script>