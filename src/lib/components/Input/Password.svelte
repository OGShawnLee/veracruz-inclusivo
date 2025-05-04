<script lang="ts">
	import { Eye } from 'lucide-svelte';
	import Input from './Input.svelte';

	interface Properties {
		name: string;
    placeholder: string;
		value?: string;
	}

	let { name, placeholder, value = $bindable(''), ...rest }: Properties = $props();
	let element = $state<HTMLInputElement | undefined>();
</script>

<div class="inline-flex items-center gap-2">
  <input class="input" type="password" {name} bind:this={element} bind:value {placeholder} {...rest} />
	<button
		class="button button--side size-12"
		aria-label="Mostrar Contraseña"
		title="Mostrar Contraseña"
		onclick={() => {
			if (element) {
				element.type = element.type === 'password' ? 'text' : 'password';
			}
		}}
		type="button"
	>
		<Eye />
	</button>
</div>
