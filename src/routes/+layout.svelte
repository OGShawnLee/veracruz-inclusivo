<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';

	const { children } = $props();
</script>

{@render children()}
