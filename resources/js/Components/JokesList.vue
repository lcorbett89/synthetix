<template>
	<section>
		<div class="overflow-hidden bg-white rounded-lg shadow">
			<div class="p-6">
				<div class="block">
					<div class="flex justify-between">
						<nav class="flex mb-4 space-x-4" aria-label="Tabs">
							<a
								href="#"
								@click="sortByAscending = true"
								:class="[sortByAscending ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']"
							>
								Top {{ limit }}
							</a>

							<a
								href="#"
								@click="sortByAscending = false"
								:class="[!sortByAscending ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']"
								aria-current="page"
							>
								Bottom {{ limit }}
							</a>
						</nav>
						<span
							>{{ totalTopFiveVotes }} of
							{{ totalVotes }}
							votes
						</span>
					</div>
					<ul role="list" class="divide-y divide-gray-200">
						<li v-for="joke in topFiveJokes" :key="joke.id" class="relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
							<div class="flex justify-between space-x-3">
								<div class="flex-1 min-w-0">
									<a href="#" class="block focus:outline-none">
										<span class="absolute inset-0" aria-hidden="true"></span>
										<p class="text-sm font-medium text-gray-900">
											{{ joke.setup }}
										</p>
										<p class="text-sm text-gray-500">
											{{ joke.delivery }}
										</p>
									</a>
								</div>
								<span class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full whitespace-nowrap">{{
									joke.votes_count
								}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			jokes: {
				type: Array,
				default: () => [],
			},
			limit: { type: Number, default: 5 },
		},
		data() {
			return {
				sortByAscending: true,
			};
		},
		computed: {
			topFiveJokes() {
				return this.sortByAscending
					? this.jokes.slice(0, this.limit).sort((a, b) => b.votes_count - a.votes_count)
					: this.jokes.slice(-this.limit).sort((a, b) => a.votes_count - b.votes_count);
			},
			totalTopFiveVotes() {
				return this.topFiveJokes.reduce((total, joke) => total + joke.votes_count, 0);
			},
			totalVotes() {
				return this.jokes.reduce((total, joke) => total + joke.votes_count, 0);
			},
		},
	};
</script>
