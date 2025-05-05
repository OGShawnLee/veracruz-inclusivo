<script>
	import Pagination from './pagination-section.svelte';
	import { Input, Radio, Select } from '@components';
	import { Field, Control } from 'formsnap';
	import { ServiceCard } from '@features/service/components';
	import {
		SearchCategoryEnumeration,
		SearchRegionEnumeration,
		SearchSchema
	} from '@features/search/schema';
	import { Bird } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { useMousePosition, useWindowWidth } from '$lib/hooks.svelte';
	import { goto } from '$app/navigation';
	import { APP_IMAGE_URL, APP_SITE_NAME, APP_URL } from '$lib';

	const PAGE_TITLE = 'Servicios - Veracruz Inclusivo';

	const { data } = $props();

	const form = superForm(data.form, {
		validators: valibotClient(SearchSchema)
	});
	const { form: input } = form;
	const { x } = useMousePosition();
	const width = useWindowWidth();
</script>

<svelte:head>
	<title>{PAGE_TITLE}</title>
	<meta
		name="description"
		content="Explora una amplia gama de servicios inclusivos en Veracruz. Encuentra centros, profesionales y empresas comprometidas con la inclusión."
	/>
	<meta
		name="keywords"
		content="servicios inclusivos, Veracruz, inclusión, discapacidad, directorio inclusivo, empresas inclusivas, centros especializados"
	/>
	<meta name="author" content="Veracruz Inclusivo" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:title" content={PAGE_TITLE} />
	<meta property="og:site_name" content={APP_SITE_NAME} />
	<meta
		property="og:description"
		content="Encuentra servicios inclusivos en Veracruz. Conecta con centros, profesionales y empresas que promueven la inclusión."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{APP_URL}/services" />
	<meta property="og:image" content={APP_IMAGE_URL} />
	<meta property="og:locale" content="es_MX" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={PAGE_TITLE} />
	<meta
		name="twitter:description"
		content="Explora servicios inclusivos en Veracruz. Encuentra centros, profesionales y empresas comprometidas con la inclusión."
	/>
	<meta name="twitter:image" content={APP_IMAGE_URL} />
	<link rel="canonical" href="{APP_URL}/services" />
	{#if $input.page > 1}
		<link rel="prev" href="{APP_URL}/services?page={$input.page - 1}" />
	{/if}
	{#if $input.page < data.totalPages}
		<link rel="next" href="{APP_URL}/services?page={$input.page + 1}" />
	{/if}
</svelte:head>

<main class="container grid gap-16">
	<h1 class="heading text-5xl font-bold text-center">Servicios</h1>
	<section class="grid gap-8">
		<h2 class="sr-only">Busqueda de Servicios</h2>
		<div>
			<form class="flex flex-col items-center justify-center gap-4" method="get">
				<div class="w-full flex items-center justify-center gap-4">
					<Field {form} name="query">
						<Control>
							{#snippet children({ props })}
								<input
									type="text"
									name={props.name}
									class="w-full max-w-2xl h-12 px-4 $bg-ground-1 rounded-lg border $border-ground-2 $text-summit $placeholder"
									placeholder="Busque un servicio de entre nuestro catalogo"
									value={$input.query}
								/>
							{/snippet}
						</Control>
					</Field>
					<button
						class="h-12 px-4 flex items-center gap-2 bg-ground-0-dark text-summit-dark dark:bg-ground-0 dark:text-summit rounded-lg font-medium"
						type="submit"
					>
						Buscar
					</button>
				</div>
				<div class="w-full flex flex-col md:(w-initial flex-row) gap-4">
					<Input.Root>
						<Field {form} name="category">
							<Select
								enumeration={SearchCategoryEnumeration}
								label="Categoria"
								hidden
								placeholder="Seleccione una categoria"
								value={$input.category ?? 'ALL'}
								onValueChange={(value) => {
									const url = new URL(window.location.href);
									url.searchParams.set('category', value);
									url.searchParams.set('page', '1');
									goto(url.toString());
								}}
							/>
						</Field>
					</Input.Root>
					<Field {form} name="region">
						<Input.Root>
							{#if width.value >= 640}
								<Radio
									enumeration={SearchRegionEnumeration}
									label="Región"
									hidden
									value={$input.region ?? 'ALL'}
									onValueChange={(value) => {
										const url = new URL(window.location.href);
										url.searchParams.set('region', value);
										url.searchParams.set('page', '1');
										goto(url.toString());
									}}
								/>
							{:else}
								<Select
									enumeration={SearchRegionEnumeration}
									label="Región"
									hidden
									placeholder="Seleccione una región"
									value={$input.region ?? 'ALL'}
									onValueChange={(value) => {
										const url = new URL(window.location.href);
										url.searchParams.set('region', value);
										url.searchParams.set('page', '1');
										goto(url.toString());
									}}
								/>
							{/if}
						</Input.Root>
					</Field>
				</div>
			</form>
		</div>
	</section>
	<div class="grid gap-4">
		{#if data.services.length === 0}
			<div class="mx-auto flex flex-col gap-4 items-center">
				<Bird
					class="transform -z-10 opacity-05 {x.value > width.value / 2
						? 'rotate-0'
						: 'rotate-y-180'}"
					size={256}
					strokeWidth={1.25}
				/>
				<div class="flex flex-col items-center gap-2">
					<p class="heading text-2xl font-medium">Sin Resultados</p>
					<p class="text-center">
						Parece que no ha sido posible encontrar servicios que coincidan con su busqueda.
					</p>
				</div>
			</div>
		{:else}
			<h3 class="heading text-2xl font-medium">Resultados de Busqueda</h3>
			<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
				{#each data.services as service (service.id)}
					<ServiceCard {service} />
				{/each}
			</div>
			<Pagination count={data.count} bind:page={$input.page} perPage={data.perPage} />
		{/if}
	</div>
</main>
