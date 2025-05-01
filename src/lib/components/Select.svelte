<script lang="ts" generics="T extends string">
	import { Input } from '@components/Input';
	import { Select } from 'bits-ui';
	import { Control } from 'formsnap';
	import { ChevronDown } from 'lucide-svelte';

	interface Properties {
		enumeration: Record<T, string>;
		label: string;
		hidden?: boolean;
		placeholder: string;
		value?: T;
		onValueChange?: (value: string) => void;
	}

	let { enumeration, label, hidden, placeholder, value = $bindable(), onValueChange }: Properties = $props();

	const entries = Object.entries(enumeration) as [T, string][];
	const selected = $derived(value ? enumeration[value] : placeholder);
</script>

<Control>
	{#snippet children({ props })}
		<Input.Group>
			<Input.Label for={props.name} {label} {hidden} />
			<Select.Root type="single" bind:value name={props.name} {onValueChange}>
				<Select.Trigger
					class="h-12 px-4 flex items-center justify-between gap-4 $bg-ground-1 border $border-ground-2 rounded-lg $text-summit text-left hover:$bg-ground-2"
					{...props}
				>
					<span> {selected} </span>
					<ChevronDown />
				</Select.Trigger>
				<Select.Content
					class="p-1.25 min-w-72 $bg-ground-0 border $border-ground-2 rounded-lg shadow-lg"
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
