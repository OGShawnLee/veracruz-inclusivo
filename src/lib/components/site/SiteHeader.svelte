<script lang="ts">
	import type { Icon } from 'lucide-svelte';
	import SiteLogo from './SiteLogo.svelte';
	import SiteSocialMedia from './SiteSocialMedia.svelte';
	import {
		CircleHelp,
		Computer,
		Home,
		// LayoutDashboard,
		LayoutList,
		LogOut,
		Menu,
		Moon,
		Plus,
		Sun,
		X
	} from 'lucide-svelte';
	import { CurrentUserState } from '$lib/state';
	import { Dialog } from 'bits-ui';
	import { mode, setMode, toggleMode } from 'mode-watcher';
	import { enhance } from '$app/forms';

	const currentUser = CurrentUserState.getContext();

	let open = false;
</script>

{#snippet logo()}
	<a href="/" onclick={() => (open = false)}>
		<SiteLogo />
	</a>
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
					<!-- {@render link('/dashboard', 'Dashboard')} -->
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
					class="fixed top-0 bottom-0 inset-x-0 pb-8 z-20 flex flex-col bg-ground-0/75 backdrop-filter backdrop-blur-lg border-b border-ground-2 dark:(bg-ground-0-dark/75 border-ground-2-dark)"
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
							{#if currentUser.value}
								<div class="h-12 mx-2 px-2 flex items-center gap-4">
									<div
										class="size-10 flex items-center justify-center rounded-md bg-gradient-to-r from-marque to-marque-dark font-bold text-summit-dark"
									>
										{currentUser.value.name[0].toUpperCase()}
									</div>
									<p class="font-medium $text-summit">{currentUser.value.name}</p>
									<form class="ml-auto" action="/auth/sign-out" method="post" use:enhance>
										<button
											class="button button--side size-10"
											type="submit"
											aria-label="Cerrar Sesión"
										>
										<p class="sr-only">Cerrar Sesión</p>
											<LogOut size={20} />	
										</button>
									</form>
								</div>
							{/if}
							{@render mobileLink('/', 'Inicio', Home)}
							{@render mobileLink('/services', 'Servicios', LayoutList)}
							<!-- {@render mobileLink('/dashboard', 'Dashboard', LayoutDashboard)} -->
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
							{#if currentUser.value}
								{@render mobileLink('/dashboard/service', 'Crear Servicio', Plus)}
							{/if}
						</ul>
					</nav>
					<div class="mt-auto">
						<SiteSocialMedia />
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
		<div class="hidden lg:flex gap-4">
			<button class="button button--side size-10" onclick={toggleMode} aria-label="Cambiar Modo de Color" title="Cambiar Modo de Color">
				{#if mode.current === 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
			{#if currentUser.value}
				<a class="button button--side button--rectangle h-10" href="/dashboard/service">
					Crear Servicio
				</a>
				<form action="/auth/sign-out" method="post" use:enhance>
					<button
						class="size-10 flex items-center justify-center rounded-md bg-gradient-to-r from-marque to-marque-dark font-bold text-summit-dark"
						aria-label="Cerrar Sesión"
					>
						{currentUser.value.name[0].toUpperCase()}
					</button>
				</form>
			{/if}
		</div>
	</div>
</header>
