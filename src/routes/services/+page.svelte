<script>
	import Masonry from 'svelte-bricks';
	import { Input, Radio, Select } from '@components';
	import { Field, Control } from 'formsnap';
	import { ServiceCard } from '@features/service/components';
	import {
		SearchCategoryEnumeration,
		SearchRegionEnumeration,
		SearchSchema
	} from '@features/search/schema';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { ServiceCategoryEnumeration, ServiceRegionEnumeration } from '@features/service/schema.js';

	const { data } = $props();

	const form = superForm(data.form, {
		validators: valibotClient(SearchSchema)
	});
	const { form: input } = form;
</script>

<svelte:head>
	<title>Servicios - Veracruz Inclusivo</title>
</svelte:head>

<main class="container grid gap-16">
	<h1 class="heading text-5xl font-bold">Servicios</h1>
	<section class="grid gap-8">
		<h2 class="sr-only">Busqueda de Servicios</h2>
		<div>
			<form class="grid gap-4" method="get">
				<div class="w-full flex items-center gap-4">
					<Field {form} name="query">
						<Control>
							{#snippet children({ props })}
								<input
									type="text"
									name={props.name}
									class="w-full h-12 px-4 $bg-ground-1 rounded-lg border $border-ground-2 $text-summit $placeholder"
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
				<div class="flex flex-col md:flex-row gap-4">
					<Input.Root>
						<Field {form} name="category">
							<Select
								enumeration={SearchCategoryEnumeration}
								label="Categoria"
								placeholder="Seleccione una categoria"
								value={$input.category ?? 'ALL'}
							/>
						</Field>
					</Input.Root>
					<Field {form} name="region">
						<Input.Root>
							<div class="hidden sm:block">
								<Radio
									enumeration={SearchRegionEnumeration}
									label="Región"
									value={$input.region ?? 'ALL'}
								/>
							</div>
							<div class="sm:hidden">
								<Select
									enumeration={SearchRegionEnumeration}
									label="Región"
									placeholder="Seleccione una región"
									value={$input.region ?? 'ALL'}
								/>
							</div>
						</Input.Root>
					</Field>
				</div>
			</form>
		</div>
	</section>
	<Masonry items={data.services} class="flex" minColWidth={350} maxColWidth={730} gap={32}>
		{#snippet children(item)}
			<ServiceCard service={item.item} />
		{/snippet}
	</Masonry>
</main>
