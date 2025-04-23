<svelte:head>
	<title>Veracruz Inclusivo</title>
</svelte:head>

<main class="container">
	<h1 class="hidden">Veracruz Inclusivo</h1>
	<div class="grid lg:grid-cols-12 gap-16 items-center">
		<img
			class="lg:col-span-6 xl:col-span-8 h-full rounded-3xl object-cover"
			src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt="Hero"
		/>
		<div class="lg:col-span-6 xl:col-span-4 grid gap-8">
			<p class="heading text-5xl font-bold">
				Oportunidades Inclusivas en Veracruz, Ahora a tu Alcance.
			</p>
			<p class="text-xl leading-relaxed">
				<strong class="$text-summit"
					>Veracruz Inclusivo es tu puente hacia empresas y organizaciones</strong
				>
				que realmente creen en el talento de todos.
				<strong class="$text-summit"
					>Encuentra el servicio que necesitas o la oportunidad laboral que mereces</strong
				>. Construyendo juntos un Veracruz más justo y equitativo.
			</p>
			<div class="grid md:grid-cols-2 gap-4">
				<a
					class="h-12 px-4 flex items-center justify-center $bg-marque $text-summit-inverse rounded-xl font-bold"
					href="/services"
				>
					Conoce Servicios
				</a>
				<a class="button button--side h-12" href="/about-us"> Más Información </a>
			</div>
		</div>
	</div>
</main>
