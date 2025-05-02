<script lang="ts">
	import { Control, Field } from 'formsnap';
	import { X } from 'lucide-svelte';
	import { Input } from '@components';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { SignInSchema } from '@features/auth/schema';

	const { data } = $props();
	const form = superForm(data.form, {
		validators: valibotClient(SignInSchema)
	});
	const { form: input, enhance } = form;
</script>

<svelte:head>
	<title>Iniciar Sesión - Veracruz Inclusivo</title>
</svelte:head>

<main class="container">
	<div class="max-w-2xl mx-auto rounded-xl $bg-ground-1 border $border-ground-2">
		<div class="h-20 px-8 flex items-center justify-between border-b $border-ground-2">
			<h1 class="heading text-2xl font-bold">
        Iniciar Sesión
			</h1>
			<a class="button button--side size-10" href="/">
				<X />
			</a>
		</div>
		<form class="p-8 flex flex-col gap-6" method="post" use:enhance>
			<Input.Root>
				<Field {form} name="email">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Correo Electrónico" />
								<Input.Input
									placeholder="Introduzca su correo electrónico"
									bind:value={$input.email}
									{...props}
									type="email"
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
			<Input.Root>
				<Field {form} name="password">
					<Control>
						{#snippet children({ props })}
							<Input.Group>
								<Input.Label for={props.name} label="Contraseña" />
								<Input.Input
									placeholder="Introduzca su contraseña"
									bind:value={$input.password}
									{...props}
                  type="password"
								/>
							</Input.Group>
						{/snippet}
					</Control>
					<Input.Error />
				</Field>
			</Input.Root>
      <div class="flex flex-col items-center gap-4">
        <button class="w-full button button--main h-12" type="submit">
          Iniciar Sesión
        </button>
        <a href="/auth/sign-up">¿No tiene una cuenta?</a>
      </div>
		</form>
	</div>
</main>
