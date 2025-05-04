<script lang="ts">
	import { Eye } from 'lucide-svelte';

	interface Properties {
		name: string;
		placeholder: string;
		type?: 'text' | 'password' | 'email' | 'tel';
		value?: string | undefined | null;
	}

	let { name, placeholder, type = 'text', value = $bindable(''), ...rest }: Properties = $props();
	let localType = $state(type);

	function handleInput(this: HTMLInputElement) {
		value = this.value;
	}
</script>

{#snippet input()}
	<input
		class="w-full h-12 px-4 $bg-ground-0 border $border-ground-2 rounded-lg $text-summit $placeholder"
		{name}
		type={localType}
		{placeholder}
		required
		{value}
		oninput={handleInput}
		{...rest}
	/>
{/snippet}

{#if type === 'password'}
	<div class="inline-flex items-center gap-2">
		{@render input()}
		<button
			class="button button--side size-12"
			aria-label="Mostrar Contraseña"
			title="Mostrar Contraseña"
			onclick={() => {
				localType = localType === 'password' ? 'text' : 'password';
			}}
			type="button"
		>
			<Eye />
		</button>
	</div>
{:else}
	{@render input()}
{/if}
