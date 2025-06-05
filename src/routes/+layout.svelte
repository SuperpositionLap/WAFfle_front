<script lang="ts">
	import '../app.css';
	import { Navigation } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<title>WAFfle</title>
	<meta name="description" content="WAFfle Application" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation />

	<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		{@render children()}
	</main>
</div>
