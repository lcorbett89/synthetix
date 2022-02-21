<template>
    <section class="h-full">
        <h2 class="sr-only">{{ joke?.setup }}</h2>
        <div class="rounded-lg bg-white overflow-hidden shadow">
            <div class="p-6">
                <p class="text-2xl font-medium text-gray-900">
                    {{ joke?.setup }}
                </p>
                <div class="mt-4">
                    <p class="text-lg text-gray-500 mb-4">
                        {{ joke?.delivery }}
                    </p>
                    <div class="flex items-center justify-start">
                        <Button @click="voteOnThisJoke">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                                />
                            </svg>
                            {{ label }}</Button
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Button from "./Button.vue";
export default {
    components: {
        Button,
    },
    props: {
        joke: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            responses: [
                "*Slow Clap*",
                "Heh..heh",
                "Ha Ha Ha..",
                "So funny",
                "Perfect!",
                "So true!",
                "*Snort through nose*",
                "LMAO",
            ],
        };
    },
    computed: {
        label() {
            return this.responses[
                Math.floor(Math.random() * this.responses.length)
            ];
        },
    },
    methods: {
        voteOnThisJoke() {
            this.$store.dispatch("voteOnJoke", this.joke.id).then(() => {
                this.$emit("voted");
            });
        },
    },
};
</script>
