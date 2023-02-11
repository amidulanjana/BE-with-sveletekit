<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	let loading = false;

	const loadData = async () => {
		loading = true;
		loading = false;
	};
</script>

<h6>Loading data in red<br /><code>+page.svelte</code></h6>

<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={loading}
	on:click|preventDefault={loadData}>Load</a
>

{#await trpc().getUser.query()}
	<p>awaiting</p>
{:then data}
	<p>{JSON.stringify(data.greeting)}</p>
{/await}

{#await trpc().getUsers.query()}
	<p>awaiting</p>
{:then data}
	<p>{JSON.stringify(data.greeting)}</p>
{/await}

{#await trpc().getPet.query()}
	<p>awaiting</p>
{:then data}
	<p>{JSON.stringify(data.greeting)}</p>
{/await}
