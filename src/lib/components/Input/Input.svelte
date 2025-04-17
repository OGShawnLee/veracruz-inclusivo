<script lang="ts">
	interface Properties {
		name: string;
		placeholder: string;
		type?: 'text' | 'password' | 'email' | 'tel';
		value?: string | undefined | null;
	}

	let { name, placeholder, type = 'text', value = $bindable(''), ...rest }: Properties = $props();

	function handleInput(this: HTMLInputElement) {
		value = this.value;
	}
</script>

<input
	class="h-10 px-4 border-b border-ground-2 outline-none text-summit focus:(ring-1 ring-marque) transition duration-150"
	{name}
	{type}
	{placeholder}
	required
	{value}
	oninput={handleInput}
  {...rest}
/>
