<script lang="ts">
	interface Properties {
		name: string;
		placeholder: string;
		value?: string | undefined | null;
		minlength?: number;
		maxlength: number;
	}

	let { name, placeholder, value = $bindable(''), minlength = 0, maxlength, ...rest }: Properties = $props();
</script>

<textarea
	class="w-full min-h-10 py-2 px-4 border-b border-ground-2 outline-none text-summit focus:(ring-1 ring-marque) transition duration-150"
	{name}
	{placeholder}
	bind:value
	{minlength}
	{maxlength}
	{...rest}
></textarea>

<style>
	textarea {
		field-sizing: content;
	}
</style>
