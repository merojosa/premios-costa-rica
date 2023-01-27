<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>

<a href="/award">Award</a>

<ul>
	{#each data.years as item}
		<li>{item}</li>
	{:else}
		<li>No years</li>
	{/each}
</ul>
