<script lang="ts">
	import { type Icon, CircleHelp, Computer, Home, LayoutList, Menu, Moon, Plus, Sun, X } from 'lucide-svelte';
	import { mode, setMode, toggleMode } from 'mode-watcher';
	import { Dialog } from 'bits-ui';

	let open = false;
</script>

{#snippet logo()}
	<span class="heading text-3xl font-chillax">
		<a href="/" onclick={() => open = false}> 
			<span class="font-medium"> Veracruz </span>
			<span class="$text-marque"> Inclusivo </span>
		</a>
	</span>
{/snippet}

{#snippet link(href: string, label: string)}
	<li>
		<a class="hover:(text-marque dark:text-marque-dark) transition-colors duration-150" {href}>
			{label}
		</a>
	</li>
{/snippet}

{#snippet mobileLink(href: string, label: string, icon: typeof Icon)}
	<li>
		<a
			class="h-10 mx-2 px-2 flex items-center justify-between rounded-md"
			{href}
			onclick={() => (open = false)}
		>
			<span class="$text-summit"> {label} </span>
			<svelte:component this={icon} />
		</a>
	</li>
{/snippet}

<header
	class="fixed top-0 inset-x-0 z-10 bg-ground-0/75 backdrop-filter backdrop-blur-lg border-b border-ground-2 dark:(bg-ground-0-dark/75 border-ground-2-dark)"
>
	<div class="container h-20 flex items-center justify-between">
		<div class="flex items-center gap-16">
			{@render logo()}
			<nav class="hidden md:block">
				<ul class="flex gap-8">
					{@render link('/', 'Inicio')}
					{@render link('/services', 'Servicios')}
					{@render link('/about-us', 'Acerca de Nosotros')}
				</ul>
			</nav>
		</div>
		<Dialog.Root bind:open>
			<Dialog.Trigger class="button button--side size-10 lg:hidden">
				<Menu />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Content
					class="fixed top-0 bottom-0 inset-x-0 z-20 bg-ground-0/75 backdrop-filter backdrop-blur-lg border-b border-ground-2 dark:(bg-ground-0-dark/75 border-ground-2-dark)"
				>
					<header
						class="container h-20 flex items-center justify-between border-b border-b-ground-2 dark:(border-b-ground-2-dark)"
					>
						{@render logo()}
						<button class="button button--side size-10" onclick={() => (open = false)}>
							<X />
						</button>
					</header>
					<nav class="py-8">
						<ul class="grid gap-4">
							{@render mobileLink('/', 'Inicio', Home)}
							{@render mobileLink('/services', 'Servicios', LayoutList)}
							{@render mobileLink('/about-us', 'Acerca de Nosotros', CircleHelp)}
							<div class="h-10 mx-2 px-2 flex items-center justify-between rounded-md">
								<span class="$text-summit">Modo de Color</span>
								<div class="flex items-center gap-2">
									<button class="button button--side size-10" onclick={() => setMode('dark')}>
										<Moon />
									</button>
									<button class="button button--side size-10" onclick={() => setMode('light')}>
										<Sun />
									</button>
									<button class="button button--side size-10" onclick={() => setMode('system')}>
										<Computer />
									</button>
								</div>
							</div>
							{@render mobileLink('/dashboard/create-service', 'Crear Servicio', Plus)}
						</ul>
					</nav>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
		<div class="hidden lg:flex gap-4">
			<button class="button button--side size-10" onclick={toggleMode}>
				{#if mode.current === 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
			<a class="button button--side h-10 px-4" href="/dashboard/create-service"> Crear Servicio </a>
		</div>
	</div>
</header>
