<script lang="ts">
	import type { ServiceData } from '@features/service/schema';
	import type { Icon } from 'lucide-svelte';
	import { CurrentUserState } from '$lib/state';
	import { Edit, Earth, Headset, Map, Trash } from 'lucide-svelte';
	import { ServiceCategoryEnumeration, ServiceRegionEnumeration } from '@features/service/schema';

	const { service }: { service: ServiceData } = $props();

	const currentUser = CurrentUserState.getContext();

	function formatPhoneNumber(phoneNumber: string): string {
		return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
	}
</script>

{#snippet badge(label: string, IconComponent?: typeof Icon)}
	<div
		class="h-8 w-fit px-4 flex items-center justify-center gap-2 $bg-ground-2 rounded-full font-medium $text-summit"
	>
		{#if IconComponent}
			<IconComponent size={18} strokeWidth={1.75} />
		{/if}
		{label}
	</div>
{/snippet}

<article class="p-8 flex flex-col gap-4 $bg-ground-1 border $border-ground-2 rounded-2xl shadow-lg">
	<div class="flex items-center flex-wrap gap-2">
		{@render badge(ServiceCategoryEnumeration[service.category])}
		{@render badge('Región ' + ServiceRegionEnumeration[service.region], Earth)}
	</div>
	<h2 class="font-medium text-xl $text-summit">{service.name}</h2>
	<div class="flex flex-col gap-4">
		<p>{service.description}</p>
		<p>{service.associate_full_name}</p>
		<span class="mt-1.5 text-xs">
			Registrado el {new Date(service.created_at).toLocaleDateString()}
		</span>
	</div>
	<div class="grid gap-4">
		<div class="flex items-center gap-2">
			{@render badge(formatPhoneNumber(service.phone_number), Headset)}
		</div>
		{#if service.address}
			<div class="p-4 $text-summit flex items-center gap-4 border $border-ground-2 rounded-lg">
				<Map size={24} strokeWidth={1.75} />
				<p class="text-sm whitespace-pre-line">
					{service.address}
				</p>
			</div>
		{/if}
		{#if currentUser.value}
			<div class="grid sm:grid-cols-2 gap-4">
				<a
					class="button button--side button--rectangle gap-2 h-12 w-full"
					href="/dashboard/{service.id}/service"
				>
					<Edit size={20} />
					Editar
				</a>
				<button class="button button--side button--rectangle gap-2 h-12 w-full">
					<Trash size={20} />
					Eliminar
				</button>
			</div>
		{/if}
	</div>
</article>
