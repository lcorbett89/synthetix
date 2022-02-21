<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST">
                <p class="text-2xl font-medium text-gray-900">
                    Add a joke of your own
                </p>
                <div>
                    <Label for="setup">Setup</Label>
                    <div class="mt-1">
                        <TextInput
                            v-model="setup"
                            name="setup"
                            type="text"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Label for="delivery">Delivery</Label>
                    <div class="mt-1">
                        <TextInput
                            v-model="delivery"
                            name="delivery"
                            type="text"
                            required
                        />
                    </div>
                </div>

                <div v-show="error">
                    <p class="text-red-600 text-sm">{{ error }}</p>
                </div>

                <div>
                    <Button
                        type="submit"
                        @click="handleSubmit"
                        class="w-full inline-flex justify-center"
                        >Submit</Button
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import TextInput from "../Components/TextInput.vue";
import Button from "../Components/Button.vue";
import Label from "../Components/Label.vue";
export default {
    components: { TextInput, Button, Label },
    data() {
        return {
            setup: "",
            delivery: "",
            error: null,
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            this.$store
                .dispatch("submitJoke", {
                    setup: this.setup,
                    delivery: this.delivery,
                })
                .then((response) => {
                    this.setup = "";
                    this.delivery = "";
                    this.error = null;
                })
                .catch((error) => {
                    this.error = error.response.data.message;
                });
        },
    },
};
</script>
