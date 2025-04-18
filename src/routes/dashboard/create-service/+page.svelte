<script lang="ts">
	import { Control, Field } from 'formsnap';
	import { X } from 'lucide-svelte';
	import { DESCRIPTION_MAX_LENGTH, DESCRIPTION_MIN_LENGTH, ServiceSchema } from '@features/service/schema';
	import { Input } from '@components';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	const { data } = $props();
	const form = superForm(data.form, {
		validators: valibotClient(ServiceSchema)
	});
	const { form: input, enhance } = form;
</script>

<svelte:head>
	<title>Crear Servicio - Veracruz Inclusivo</title>
</svelte:head>

<main class="container">
	<div class="max-w-2xl mx-auto rounded-xl $bg-ground-1 border $border-ground-2">
		<div class="h-20 px-8 flex items-center justify-between border-b $border-ground-2">
			<h1 class="heading text-2xl font-bold">Registrar Servicio</h1>
			<a class="button button--side size-10" href="/">
				<X />
			</a>
		</div>
		<form class="p-8 flex flex-col gap-6" method="post" use:enhance>
			<Input.Root>
				<Field {form} name="name">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Nombre" />
								<Input.Input
									placeholder="Introduzca el nombre del servicio"
									bind:value={$input.name}
									{...props}
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
			<Input.Root>
				<Field {form} name="description">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Descripción" />
								<Input.TextArea
									placeholder="Introduzca una breve descripción del servicio"
									bind:value={$input.description}
									minlength={DESCRIPTION_MIN_LENGTH}
									maxlength={DESCRIPTION_MAX_LENGTH}
									{...props}
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
			<Input.Root>
				<Field {form} name="associate_full_name">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Nombre de Asociado" />
								<Input.Input
									placeholder="Introduzca el nombre del asociado"
									bind:value={$input.associate_full_name}
									{...props}
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
			<Input.Root>
				<Field {form} name="phone_number">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Teléfono" />
								<Input.Input
									type="tel"
									placeholder="Introduzca el teléfono del asociado"
									bind:value={$input.phone_number}
									{...props}
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
			<button class="button button--main h-12 dark:text-summit" type="submit">
				Crear Servicio
			</button>
		</form>
	</div>
</main>
