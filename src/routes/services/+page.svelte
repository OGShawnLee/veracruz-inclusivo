<script>
	import { ServiceCard } from "@features/service/components";

	const { data } = $props();
</script>

<main class="container grid gap-16">
	<h1 class="text-4xl text-summit font-bold">Servicios</h1>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.services as service (service.id)}
			<ServiceCard {service} />
		{/each}
	</div>
</main>
