<template>
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							v-model="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<input
							id="password"
							v-model="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						@click="handleSubmit"
						class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: 'test@test.com',
				password: 'password',
				error: null,
			};
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault();
				if (this.password.length > 0) {
					this.$store
						.dispatch('login', {
							email: this.email,
							password: this.password,
						})
						.then((response) => {
							this.$router.push({ name: 'vote' });
						})
						.catch((errors) => {
							this.errors = errors;
						});
				}
			},
		},
	};
</script>
