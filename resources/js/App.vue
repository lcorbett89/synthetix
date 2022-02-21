<template>
    <div class="min-h-screen flex-col flex bg-gray-200">
        <SiteHeader />
        <main class="-mt-24 pb-8 flex-1">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>
import SiteHeader from "./Components/SiteHeader.vue";
export default {
    components: {
        SiteHeader,
    },
};
</script>
