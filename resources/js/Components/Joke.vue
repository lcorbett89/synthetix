<template>
	<section aria-labelledby="section-1-title h-full">
		<h2 class="sr-only" id="section-1-title">{{ joke?.setup }}</h2>
		<div class="rounded-lg bg-white overflow-hidden shadow">
			<div class="p-6">
				<p class="text-2xl font-medium text-gray-900">{{ joke?.setup }}</p>
				<p v-show="showPunchline" class="text-lg text-gray-500">{{ joke?.delivery }}</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			joke: {
				type: Object,
				required: true,
			},
			showPunchline: {
				type: Boolean,
				required: true,
			},
		},
	};
</script>
