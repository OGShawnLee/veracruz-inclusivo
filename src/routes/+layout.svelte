<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { SiteHeader } from '@components/site';
	import { ModeWatcher } from 'mode-watcher';

	const { children } = $props();
</script>

<SiteHeader />
<ModeWatcher defaultMode="system" />
<div class="mt-38">
	{@render children()}
</div>

<style>
	:global(body) {
		--uno: '$bg-ground-0 font-satoshi $text-common';
	}

	:global(button, [type='button'], [type='reset'], [type='submit']) {
		background-image: none;
	}
</style>
