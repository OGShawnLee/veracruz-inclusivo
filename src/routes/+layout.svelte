<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import { SiteHeader } from '@components/site';

	const { children } = $props();
</script>

<SiteHeader />
<div class="mt-24">
	{@render children()}
</div>

<style>
	:global(body) {
		--uno: 'bg-ground-0-light font-satoshi text-common-light';
	}
</style>
