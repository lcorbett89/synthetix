<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST">
                <p class="text-2xl font-medium text-gray-900">
                    Sign in to your account
                </p>

                <div>
                    <Label for="email">Email address</Label>
                    <div class="mt-1">
                        <TextInput
                            v-model="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Label for="password">Password</Label>
                    <div class="mt-1">
                        <TextInput
                            v-model="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        @click="handleSubmit"
                        class="w-full inline-flex justify-center"
                        >Sign in</Button
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
            email: "test@test.com",
            password: "password",
            error: null,
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.password.length > 0) {
                this.$store
                    .dispatch("login", {
                        email: this.email,
                        password: this.password,
                    })
                    .then((response) => {
                        this.$router.push({ name: "vote" });
                    })
                    .catch((errors) => {
                        this.errors = errors;
                    });
            }
        },
    },
};
</script>
