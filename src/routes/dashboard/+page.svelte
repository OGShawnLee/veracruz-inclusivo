<script lang="ts">
	import {
		ServiceCategoryEnumeration,
		ServiceRegionEnumeration
	} from '@features/service/schema.js';

	const { data } = $props();
</script>

{#snippet th(colSpan: string, label: string)}
	<th class="{colSpan} h-12 flex items-center justify-start $text-summit">
		{label}
	</th>
{/snippet}

{#snippet td(colSpan: string, label: string, highlight = false)}
	<td
		class="{colSpan} min-h-18 py-4 flex items-center"
		class:$text-summit={highlight}
		class:font-medium={highlight}
	>
		{label}
	</td>
{/snippet}

<main class="container grid gap-16">
	<h1 class="heading text-5xl font-bold">Dashboard</h1>
	<section class="grid gap-8">
		<h2 class="heading text-4xl font-bold">Servicios</h2>
		<div class="overflow-x-auto">
			<table class="min-w-6xl w-full">
				<thead class="h-12 border-b $border-ground-2">
					<tr class="px-2 grid grid-cols-12 gap-12">
						{@render th('col-span-2', 'Nombre')}
						{@render th('col-span-4', 'Descripción')}
						{@render th('col-span-2', 'Asociado')}
						{@render th('col-span-2', 'Categoría')}
						{@render th('col-span-1', 'Región')}
						{@render th('col-span-1', 'Acciones')}
					</tr>
				</thead>
				<tbody>
					{#each data.services as service (service.id)}
						<tr
							class="px-2 grid grid-cols-12 gap-12 border-b $border-ground-2 hover:($bg-ground-1 $text-summit)"
						>
							{@render td('col-span-2', service.name, true)}
							{@render td('col-span-4', service.description)}
							{@render td('col-span-2', service.associate_full_name)}
							{@render td('col-span-2', ServiceCategoryEnumeration[service.category])}
							{@render td('col-span-1', ServiceRegionEnumeration[service.region])}
							<td class="col-span-1 min-h-18 py-4 flex items-center">
								<a href="/dashboard/{service.id}/service"> Editar </a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</main>
