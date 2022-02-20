<template>
	<!-- Main 3 column grid -->
	<div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
		<div class="grid grid-cols-2 gap-4 col-span-2">
			<!-- Left column -->
			<div class="grid grid-cols-1 gap-4">
				<Joke v-if="jokesToVoteOn.length > 1" :joke="jokesToVoteOn[0]" :showPunchline="showPunchline" />
			</div>

			<div class="grid grid-cols-1 gap-4">
				<Joke v-if="jokesToVoteOn.length > 1" :joke="jokesToVoteOn[1]" :showPunchline="showPunchline" />
			</div>

			<div class="grid grid-cols-1 col-span-2 gap-4">
				<div class="flex items-center justify-center">
					<button
						type="button"
						:disabled="showPunchline"
						@click="showPunchline = true"
						class="disabled:opacity-50 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Show me the punchline!
					</button>
				</div>
			</div>
		</div>
		<!-- Right column -->
		<div class="grid grid-cols-1 gap-4">
			<section aria-labelledby="section-2-title">
				<h2 class="sr-only" id="section-2-title">Section title</h2>
				<div class="rounded-lg bg-white overflow-hidden shadow">
					<div class="p-6">
						<div>
							<div class="sm:hidden">
								<label for="tabs" class="sr-only">Select a tab</label>
								<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
								<select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
									<option>My Account</option>

									<option>Company</option>
								</select>
							</div>
							<div class="hidden sm:block">
								<nav class="flex space-x-4 mb-4" aria-label="Tabs">
									<!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
									<a
										href="#"
										@click="sortByAscending = true"
										:class="[sortByAscending ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']"
									>
										Top 5
									</a>

									<a
										href="#"
										@click="sortByAscending = false"
										:class="[!sortByAscending ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']"
										aria-current="page"
									>
										Bottom 5
									</a>
								</nav>

								<ul role="list" class="divide-y divide-gray-200">
									<li
										v-for="joke in topFiveJokes.slice(0, 5)"
										:key="joke.id"
										class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
									>
										<div class="flex justify-between space-x-3">
											<div class="min-w-0 flex-1">
												<a href="#" class="block focus:outline-none">
													<span class="absolute inset-0" aria-hidden="true"></span>
													<p class="text-sm font-medium text-gray-900">{{ joke.setup }}</p>
													<p class="text-sm text-gray-500">{{ joke.delivery }}</p>
												</a>
											</div>
											<time datetime="2021-01-27T16:35" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{{ joke.votes_count }}</time>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import Joke from '../Components/Joke.vue';
	export default {
		data() {
			return {
				sortByAscending: true,
				showPunchline: false,
			};
		},
		components: {
			Joke,
		},
		computed: {
			topFiveJokes() {
				return this.sortByAscending ? this.$store.state.jokes.slice(0, 5) : this.$store.state.jokes.slice(-5);
			},
			jokesToVoteOn() {
				return this.$store.state.jokesToVoteOn;
			},
		},
		methods: {
			getJokesToVote() {
				this.$store.dispatch('getJokesToVote');
			},
		},
		mounted() {
			this.$store.dispatch('getJokes', {});
			if (!this.jokesToVoteOn.length) {
				this.getJokesToVote();
			}
		},
	};
</script>
