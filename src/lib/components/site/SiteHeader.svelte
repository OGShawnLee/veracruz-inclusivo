<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';
</script>

{#snippet link(href: string, label: string)}
	<li>
		<a class="hover:(text-marque dark:text-marque-dark)  transition-colors duration-150" {href}>{label}</a>
	</li>
{/snippet}

<header class="fixed top-0 inset-x-0 z-10 bg-ground-0/75 backdrop-filter backdrop-blur-lg border-b border-ground-2 dark:(bg-ground-0-dark/75 border-ground-2-dark)">
	<div class="container h-20 flex items-center justify-between">
		<div class="flex items-center gap-16">
			<h1 class="heading text-3xl font-bold">
				<a href="/"> Veracruz Inclusivo </a>
			</h1>
			<nav class="hidden lg:block">
				<ul class="flex gap-8">
					{@render link('/', 'Inicio')}
					{@render link('/services', 'Servicios')}
					{@render link('/about-us', 'Acerca de Nosotros')}
				</ul>
			</nav>
		</div>
		<div class="flex gap-4">
			<button class="button button--side size-10" onclick={toggleMode}>
				{#if mode.current === 'dark'}
					<Sun />
				{:else}
					<Moon />	
				{/if}
			</button>
			<a class="button button--side h-10 px-4" href="/dashboard/create-service">
				Crear Servicio
			</a>
		</div>
	</div>
</header>
