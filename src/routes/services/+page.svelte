<script>
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

	const { data } = $props();

	const form = superForm(data.form, {
		validators: valibotClient(SearchSchema)
	});
	const { form: input } = form;
	const { x } = useMousePosition();
	const width = useWindowWidth();
</script>

<svelte:head>
	<title>Servicios - Veracruz Inclusivo</title>
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
								/>
							{:else}
								<Select
									enumeration={SearchRegionEnumeration}
									label="Región"
									hidden
									placeholder="Seleccione una región"
									value={$input.region ?? 'ALL'}
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
					class="transform -z-10 {x.value > width.value / 2 ? 'rotate-0' : 'rotate-y-180'}"
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
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.services as service (service.id)}
					<ServiceCard {service} />
				{/each}
			</div>
		{/if}
	</div>
</main>
