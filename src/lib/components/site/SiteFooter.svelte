<script lang="ts">
	import SiteLogo from './SiteLogo.svelte';
	import SiteSocialMedia from './SiteSocialMedia.svelte';
  

	const currentYear = new Date().getFullYear();
</script>

{#snippet social(icon: string, href: string, label: string)}
	<a
		{href}
		target="_blank"
		rel="noopener"
		aria-label={label}
	>
		<i class="bx {icon} text-xl"></i>
	</a>
{/snippet}

<footer class="py-12 border-t $border-ground-2">
	<div class="container flex flex-col items-center gap-4 md:(flex-row gap-16)">
		<a href="/">
			<SiteLogo />
		</a>
		<nav>
			<ul class="flex justify-center gap-8">
				<a href="/services">Servicios</a>
				<a href="/about-us">Acerca de Nosotros</a>
			</ul>
		</nav>
    <SiteSocialMedia />
	</div>
</footer>
