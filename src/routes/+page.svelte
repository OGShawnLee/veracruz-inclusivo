<svelte:head>
	<title>Veracruz Inclusivo</title>
</svelte:head>

<main class="container">
	<h1 class="hidden"> Veracruz Inclusivo </h1>
	<!-- hero text + image on the right -->
	<div class="grid lg:grid-cols-12 gap-16 items-center">
		<img class="lg:col-span-6 xl:col-span-8 h-full rounded-3xl object-cover" src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" />
		<div class="lg:col-span-6 xl:col-span-4 grid gap-8">
			<p class="text-4xl font-bold $text-summit">
				Nosotros conectamos con personas y empresas que buscan ofrecer servicios y oportunidades inclusivas.
			</p>
			<p class="text-xl">
				<b class="$text-summit">Veracruz Inclusivo</b> es una plataforma que busca conectar a las personas con discapacidad con empresas y organizaciones que ofrecen servicios y oportunidades inclusivas. Nuestro objetivo es promover la inclusión y la diversidad en el estado de Veracruz, México.
			</p>
			<div class="grid md:grid-cols-2 gap-4">
				<a class="h-12 px-4 flex items-center justify-center $bg-marque $text-summit-inverse rounded-xl font-bold" href="/services">
					Conoce Servicios
				</a>
				<button class="h-12 px-4 bg-transparent rounded-xl border $border-ground-2 font-medium">
					Más Información
				</button>
			</div>
		</div>
	</div>
</main>
