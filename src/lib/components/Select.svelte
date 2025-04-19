<script lang="ts" generics="T extends string">
	import { Input } from '@components/Input';
	import { Select } from 'bits-ui';
	import { Control } from 'formsnap';
	import { ChevronDown } from 'lucide-svelte';

	interface Properties {
		enumeration: Record<T, string>;
		label: string;
		placeholder: string;
		value?: T;
	}

	let { enumeration, label, placeholder, value = $bindable() }: Properties = $props();

	const entries = Object.entries(enumeration) as [T, string][];
	const selected = $derived(value ? enumeration[value] : placeholder);
</script>

<Control>
	{#snippet children({ props })}
		<Input.Group>
			<Input.Label for={props.name} {label} />
			<Select.Root type="single" bind:value name={props.name}>
				<Select.Trigger
					class="h-12 px-4 flex items-center justify-between $bg-ground-0 border $border-ground-2 rounded-lg $text-summit text-left"
					{...props}
				>
					<span> {selected} </span>
					<ChevronDown />
				</Select.Trigger>
				<Select.Content
					class="min-w-72 p-1.25 $bg-ground-0 border $border-ground-2 rounded-lg shadow-lg"
					align="start"
					sideOffset={8}
				>
					{#each entries as [value, label]}
						<Select.Item
							class="h-10 px-3 flex items-center justify-between rounded-md text-neutral-600 dark:text-neutral-400 cursor-pointer transition duration-150 data-[highlighted]:$bg-ground-2 data-[selected]:($text-summit font-medium)"
							{value}
						>
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Input.Group>
	{/snippet}
</Control>
<Input.Error />
