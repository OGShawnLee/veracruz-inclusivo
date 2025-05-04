<script lang="ts">
	import type { ServiceData } from '@features/service/schema';
	import type { Icon } from 'lucide-svelte';
	import { Dialog } from 'bits-ui';
	import { CurrentUserState } from '$lib/state';
	import { Edit, Earth, Headset, Map, Trash, X } from 'lucide-svelte';
	import { ServiceCategoryEnumeration, ServiceRegionEnumeration } from '@features/service/schema';
	import { invalidateAll } from '$app/navigation';
	import { enhance } from "$app/forms";
	import { createToast } from '@components/site';

	const { service }: { service: ServiceData } = $props();

	const currentUser = CurrentUserState.getContext();

	function formatPhoneNumber(phoneNumber: string): string {
		return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
	}

	let open = $state(false);
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
	<div class="mt-auto grid gap-4">
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
				<Dialog.Root bind:open>
					<Dialog.Trigger class="button button--side button--rectangle gap-2 h-12 w-full">
						<Trash size={20} />
						Eliminar
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay
							class="fixed inset-0 z-10 backdrop-filter backdrop-blur-lg bg-ground-0/75 dark:bg-ground-0-dark/75"
						/>
						<Dialog.Content
							class="fixed top-1/2 left-1/2 z-10 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg $bg-ground-1 border $border-ground-2"
						>
							<form method="post" action="/dashboard/service?/delete" use:enhance={() => async (event) => {
								if (event.result.type === "success") {
									createToast({
										data: {
											title: "Servicio Eliminado",
											description: "El servicio ha sido eliminado correctamente.",
											type: "SUCCESS",
										}
									});
									await invalidateAll();
									open = false;
								} else {
									createToast({
										data: {
											title: "Error al Eliminiar Servicio",
											description: "No ha sido posible eliminar el servicio, intente más tarde.",
											type: "ERROR"
										}
									});
								}
							}}>
								<input type="hidden" name="id" value={service.id} />
								<div class="h-20 px-8 flex items-center justify-between border-b $border-ground-2">
									<h3 class="heading text-xl font-bold">Eliminar Servicio</h3>
									<Dialog.Close class="button button--side size-10">
										<span class="sr-only">Cerrar</span>
										<X />
									</Dialog.Close>
								</div>
								<div class="p-8 grid gap-4 text-center">
									<p class="leading-relaxed $text-summit">
										¿Está seguro de que desea eliminar este servicio?
									</p>
									<p class="p-4 $text-summit flex items-center gap-4 $bg-ground-0 rounded-lg">
									<strong>Esta acción no se puede deshacer y eliminara permanentemente el servicio.</strong>
									</p>
									<div class="flex justify-end gap-4 mt-6">
										<Dialog.Close class="button button--side button--rectangle gap-2 h-12 w-full">
											Cancelar
										</Dialog.Close>
										<button class="button h-12 w-full tex-summit bg-rose-500 text-summit-dark">
											Eliminar
										</button>
									</div>
								</div>
							</form>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		{/if}
	</div>
</article>
