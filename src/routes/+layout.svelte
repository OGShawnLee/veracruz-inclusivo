<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { SiteHeader } from '@components/site';

	const { children } = $props();
</script>

<SiteHeader />
<div class="mt-38">
	{@render children()}
</div>

<style>
	:global(body) {
		--uno: 'bg-ground-1 font-satoshi text-common';
	}
</style>
