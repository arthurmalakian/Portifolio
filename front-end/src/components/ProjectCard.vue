<template>
    <div class="project-card col-lg-4">
        <div class="card my-2 mx-2 px-2 py-2">
            <img class="card-img-top border border-dark img-fluid" :src="image" alt="...">
            <div class="card-body">
                <h5 class="card-title text-justify">{{title}}</h5>
                <p class="card-text text-justify mt-4">{{description}}</p>
                <a target="_blank" :href="url" class="btn btn-dark border border-light">Visitar</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        image: String,
        url: String,
    }
}
</script>

<style>

</style>