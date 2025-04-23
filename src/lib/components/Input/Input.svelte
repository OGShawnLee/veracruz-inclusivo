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
	class="h-12 px-4 $bg-ground-0 border $border-ground-2 rounded-lg $text-summit $placeholder"
	{name}
	{type}
	{placeholder}
	required
	{value}
	oninput={handleInput}
	{...rest}
/>
