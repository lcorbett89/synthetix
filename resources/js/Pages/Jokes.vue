<template>
	<!-- Main 3 column grid -->
	<div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
		<!-- Left column -->
		<div class="grid grid-cols-1 gap-4 lg:col-span-2">
			<section aria-labelledby="section-1-title">
				<h2 class="sr-only" id="section-1-title">Section title</h2>
				<div class="rounded-lg bg-white overflow-hidden shadow">
					<div class="p-6">
						<!-- Your content -->
					</div>
				</div>
			</section>
		</div>

		<!-- Right column -->
		<div class="grid grid-cols-1 gap-4">
			<section aria-labelledby="section-2-title">
				<h2 class="sr-only" id="section-2-title">Section title</h2>
				<div class="rounded-lg bg-white overflow-hidden shadow">
					<div class="p-6">
						<!-- Your content -->
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		created() {},
		methods: {},
	};
</script>
