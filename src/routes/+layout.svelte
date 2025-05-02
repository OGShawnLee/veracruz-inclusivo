<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { SiteFooter, SiteHeader, SiteToaster } from '@components/site';
	import { ModeWatcher } from 'mode-watcher';
	import { CurrentUserState } from '$lib/state';

	const { data, children } = $props();
	const currentUser = CurrentUserState.mount(data.currentUser);

	$effect(() => {
		currentUser.value = data.currentUser;
	});
</script>

<SiteHeader />
<SiteToaster />
<ModeWatcher defaultMode="system" />
<div class="mt-38 mb-18">
	{@render children()}
</div>
<SiteFooter />

<style>	
	:global(body) {
		--uno: "min-h-screen flex flex-col $bg-ground-0 font-satoshi $text-common";
	}


	:global(button, [type='button'], [type='reset'], [type='submit']) {
		background-image: none;
	}
</style>
