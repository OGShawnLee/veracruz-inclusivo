<script>
	import { Rabbit } from 'lucide-svelte';
	import { useMousePosition, useWindowWidth } from '$lib/hooks.svelte';
	import { page } from '$app/state';

	const width = useWindowWidth();
	const { x } = useMousePosition();
</script>

<main class="mx-auto flex flex-col gap-4 items-center">
	<Rabbit
		class="transform -z-10 {x.value > width.value / 2 ? 'rotate-0' : 'rotate-y-180'}"
		size={256}
		strokeWidth={1.25}
	/>
	<div class="flex flex-col items-center gap-4">
		<h1 class="heading text-3xl font-medium">
			{page.status === 404 ? 'Nada Aquí' : 'Error Inesperado'}
		</h1>
		<div>
			{#if page.status === 404}
				<p class="text-center">La página que está buscando no existe o ha sido eliminada.</p>
			{:else}
				<p class="text-center">
					Ha ocurrido un error inesperado. Por favor, intente nuevamente más tarde.
				</p>
				<p class="text-center">
					Si el problema persiste, por favor contáctenos a través de nuestro correo electrónico.
				</p>
			{/if}
		</div>
		<a class="button button--side button--rectangle h-12 mt-4" href="/"> Página de Inicio </a>
	</div>
</main>
