<template>
    <div>
        <h1>
            {{ id }}
        </h1>
        <ul>
            <li v-for="image in images" :key="image.name">
                <CategoryImage v-bind:url="image.url" ></CategoryImage>
            </li>
        </ul>
    </div>
</template>

<script>
import { db, storage } from "../db.js"
import CategoryImage from "../components/Image"

export default {
    name: "CategoryImages",
    props:["id"],
    components: {
        CategoryImage
    },
    data: () => {
        return {
            images: []
        }
    },
    created() {
        db.collection("images")
            .where("category", "==", this.id)
            .get()
            .then(s => {
                var i = [];
                s.forEach((d) => {
                    var data = d.data();
                    var newImage = {
                        name: data.name,
                        category: data.category,
                        imagePath: data.imagePath,
                        url: "",
                        downloadUrl: function() {
                            var folderRef = storage.child(this.category + "/" + this.imagePath)

                            return folderRef.getDownloadURL()
                                .then((url) => {
                                    this.url = url;
                                });
                        }
                    }
                    newImage.downloadUrl();
                    i.push(newImage);       
                })  
                this.images.push(...i)
            })
    }
}
</script>