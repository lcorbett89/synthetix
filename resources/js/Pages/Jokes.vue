<template>
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <JokesList :jokes="jokes" :limit="jokeLimit" />
        </div>
    </div>
</template>

<script>
import JokesList from "../Components/JokesList.vue";
export default {
    components: {
        JokesList,
    },
    computed: {
        jokes() {
            return this.$store.state.jokes;
        },
        jokeLimit() {
            return Math.ceil(this.jokes.length / 2);
        },
    },
    mounted() {
        this.$store.dispatch("getJokes", {});
    },
};
</script>
