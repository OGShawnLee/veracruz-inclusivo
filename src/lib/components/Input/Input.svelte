<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Context {
		class: string;
		placeholder: string;
		required: true;
	}

	interface Properties {
		placeholder: string;
		children: Snippet<[context: Context]>;
	}

	let { placeholder, children }: Properties = $props();
</script>

{@render children({ class: "input", placeholder, required: true })}