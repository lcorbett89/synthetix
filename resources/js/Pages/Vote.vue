<template>
    <!-- Main 3 column grid -->
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <div class="grid grid-cols-2 gap-4 col-span-2">
            <div
                v-if="jokesToVoteOn.length <= 1 && finishedFetchingVotes"
                class="grid grid-cols-1 col-span-2 gap-4"
            >
                <div class="rounded-lg bg-white overflow-hidden shadow">
                    <div class="p-6">
                        <p class="text-2xl font-medium text-gray-900">
                            You've voted on all our jokes!
                        </p>
                        <p class="text-lg text-gray-500 mt-4">
                            Come back again soon :)
                        </p>
                    </div>
                </div>
            </div>
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4">
                <transition>
                    <Joke
                        v-if="jokesToVoteOn.length > 1"
                        :joke="jokesToVoteOn[0]"
                        @voted="voted"
                    />
                </transition>
            </div>

            <div class="grid grid-cols-1 gap-4">
                <transition>
                    <Joke
                        v-if="jokesToVoteOn.length > 1"
                        :joke="jokesToVoteOn[1]"
                        @voted="voted"
                    />
                </transition>
            </div>
        </div>
        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
            <jokes-list :jokes="jokes" />
        </div>
    </div>
</template>

<script>
import Joke from "../Components/Joke.vue";
import JokesList from "../Components/JokesList.vue";
import Button from "../Components/Button.vue";

export default {
    data() {
        return {
            finishedFetchingVotes: true,
        };
    },
    components: {
        Joke,
        Button,
        JokesList,
    },
    computed: {
        jokes() {
            return this.$store.state.jokes;
        },
        jokesToVoteOn() {
            return this.$store.state.jokesToVoteOn;
        },
    },
    methods: {
        getJokesToVote() {
            this.finishedFetchingVotes = false;

            this.$store
                .dispatch("getJokesToVote")
                .finally(() => (this.finishedFetchingVotes = true));
        },
        voted() {
            // refresh jokes
            this.$store.dispatch("getJokes", {});

            // get 2 more jokes
            this.getJokesToVote();
        },
    },
    mounted() {
        this.$store.dispatch("getJokes", {});

        if (!this.jokesToVoteOn.length) {
            this.getJokesToVote();
        }
    },
};
</script>
