<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('BREAKPOINT', data);
</script>

<h1>Welcome to SvelteKit</h1>

<ul>
	{#each data.years as item}
		<li>{item}</li>
	{:else}
		<li>No years</li>
	{/each}
</ul>
