<template>
    <header class="pb-24 bg-blue-600">
        <div
            class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-5 lg:py-0"
        >
            <div
                class="relative py-5 flex items-center justify-center lg:justify-between"
            >
                <!-- Logo -->
                <div class="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                        <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                            alt="Workflow"
                        />
                    </a>
                </div>

                <!-- Right section on desktop -->
                <div
                    v-show="isLoggedIn"
                    class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5"
                >
                    <button
                        type="button"
                        class="flex-shrink-0 p-1 text-blue-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>

                    <!-- Profile dropdown -->
                    <div class="ml-4 relative flex-shrink-0">
                        <div>
                            <button
                                type="button"
                                @click="showDropdown = true"
                                class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </button>
                        </div>

                        <div
                            v-show="showDropdown"
                            @click="showDropdown = false"
                            class="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a
                                @click="logout"
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-2"
                                >Sign out</a
                            >
                        </div>
                    </div>
                </div>

                <!-- Menu button -->
                <div class="absolute right-0 flex-shrink-0 lg:hidden">
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        @click="showDropdown = true"
                        class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-blue-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
                        <svg
                            class="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
                        <svg
                            class="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                class="hidden lg:block border-t border-white border-opacity-20 py-5"
            >
                <div class="grid grid-cols-3 gap-8 items-center">
                    <div class="col-span-2">
                        <nav class="flex space-x-4 text-blue-100">
                            <router-link
                                to="/jokes"
                                active-class="text-white bg-opacity-10"
                                class="text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                            >
                                All Jokes
                            </router-link>

                            <router-link
                                to="/jokes/vote"
                                active-class="text-white bg-opacity-10"
                                class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                                aria-current="page"
                            >
                                Vote On Jokes
                            </router-link>

                            <router-link
                                to="/jokes/create"
                                active-class="text-white bg-opacity-10"
                                class="text-blue-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                            >
                                Add Joke
                            </router-link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on mobile menu state. -->
        <div class="lg:hidden" v-show="showDropdown">
            <div
                class="z-20 fixed inset-0 bg-black bg-opacity-25"
                aria-hidden="true"
            ></div>

            <div
                class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
            >
                <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200"
                >
                    <div class="pt-3 pb-2">
                        <div class="flex items-center justify-between px-4">
                            <div>
                                <img
                                    class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                                    alt="Workflow"
                                />
                            </div>
                            <div class="-mr-2">
                                <button
                                    @click="showDropdown = false"
                                    type="button"
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <!-- Heroicon name: outline/x -->
                                    <svg
                                        class="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            class="mt-3 px-2 space-y-1"
                            @click="showDropdown = false"
                        >
                            <router-link
                                to="/jokes"
                                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                >All Jokes</router-link
                            >
                            <router-link
                                to="/jokes/vote"
                                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                >Vote On Jokes</router-link
                            >
                            <router-link
                                to="/jokes/create"
                                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                >Add Joke</router-link
                            >
                        </div>
                    </div>
                    <div class="pt-4 pb-2">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                <img
                                    class="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div class="ml-3 min-w-0 flex-1">
                                <div
                                    class="text-base font-medium text-gray-800 truncate"
                                >
                                    {{ user?.name }}
                                </div>
                                <div
                                    class="text-sm font-medium text-gray-500 truncate"
                                >
                                    {{ user?.email }}
                                </div>
                            </div>
                            <button
                                type="button"
                                class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <span class="sr-only">View notifications</span>
                                <!-- Heroicon name: outline/bell -->
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            class="mt-3 px-2 space-y-1"
                            @click="showDropdown = false"
                        >
                            <a
                                href="#"
                                @click="logout"
                                class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                >Sign out</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false,
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters["isLoggedIn"];
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => this.$router.push({ name: "login" }));
        },
    },
};
</script>
