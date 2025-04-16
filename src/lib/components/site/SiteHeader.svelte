<script lang="ts">
	import { Sun } from 'lucide-svelte';
</script>

{#snippet link(href: string, label: string)}
	<li>
		<a class="hover:text-marque transition-colors duration-150" {href}>{label}</a>
	</li>
{/snippet}

<header class="fixed top-0 inset-x-0 z-10 bg-ground-0/75 backdrop-filter backdrop-blur-lg">
	<div class="container h-20 flex items-center justify-between">
		<div class="flex items-center gap-16">
			<h1 class="text-3xl font-bold">
				<a href="/"> Veracruz Inclusivo </a>
			</h1>
			<nav>
				<ul class="flex gap-8">
					{@render link('/', 'Inicio')}
					{@render link('/services', 'Servicios')}
					{@render link('/about-us', 'Acerca de Nosotros')}
				</ul>
			</nav>
		</div>
		<div class="flex gap-4">
			<button class="button button--side size-10">
				<Sun />
			</button>
			<a class="button button--side h-10 px-4" href="/dashboard/services/create-service">
				Crear Servicio
			</a>
		</div>
	</div>
</header>
