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
	class="w-full min-h-12 py-2.5 px-4 $bg-ground-0 border $border-ground-2 rounded-lg $text-summit $placeholder"
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
