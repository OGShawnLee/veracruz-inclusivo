<script lang="ts" generics="T extends string">
	import { Input } from '@components/Input';
	import { RadioGroup } from 'bits-ui';
	import { Control } from 'formsnap';

	interface Properties {
		enumeration: Record<T, string>;
		label: string;
		hidden?: boolean;
		value: T;
	}

	let { enumeration, label, hidden, value = $bindable() }: Properties = $props();

	const entries = Object.entries(enumeration) as [T, string][];
</script>

<Control>
	{#snippet children({ props })}
		<Input.Group>
			<Input.Label for={props.name} {label} {hidden} />
			<RadioGroup.Root
				class="w-full flex flex-wrap items-center gap-2 sm:(w-fit justify-center)"
				orientation="horizontal"
				name={props.name}
				bind:value
			>
				{#each entries as [value, label]}
					<RadioGroup.Item
						class="button h-12 px-6 $bg-ground-1 border $border-ground-2 hover:$bg-ground-2 data-[state=checked]:(bg-ground-3-dark dark:bg-ground-3 $text-summit-inverse hover:bg-summit hover:dark:bg-summit-dark)"
						{value}
					>
						{label}
					</RadioGroup.Item>
				{/each}
			</RadioGroup.Root>
		</Input.Group>
	{/snippet}
</Control>
<Input.Error />
