<script>
	import Masonry from 'svelte-bricks';
	import { ServiceCard } from '@features/service/components';

	let { data } = $props();
</script>

<svelte:head>
	<title>Servicios - Veracruz Inclusivo</title>
</svelte:head>

<main class="container grid gap-16">
	<div class="grid gap-8">
		<h1 class="text-4xl $text-summit font-bold">Servicios</h1>
		<form class="max-w-2xl w-full" method="get">
			<div class="w-full flex items-center gap-4">
				<input
					type="text"
					name="search-query"
					class="w-full h-12 px-4 $bg-ground-1 rounded-lg border $border-ground-2 $text-summit $placeholder"
					placeholder="Busque un servicio de entre nuestro catalogo"
				/>
				<button
					class="h-12 px-4 flex items-center gap-2 bg-ground-0-dark text-summit-dark dark:bg-ground-0 dark:text-summit rounded-lg font-medium"
					type="submit"
				>
					Buscar
				</button>
			</div>
		</form>
	</div>
	<Masonry items={data.services} minColWidth={350} maxColWidth={730} gap={32}>
		{#snippet children(item)}
			<ServiceCard service={item.item} />
		{/snippet}
	</Masonry>
</main>
