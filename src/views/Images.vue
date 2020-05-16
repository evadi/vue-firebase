<template>
    <div>
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