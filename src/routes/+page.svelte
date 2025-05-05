<script>
	import { ImageLandingHeroBig } from '$lib/assets';
	import { APP_IMAGE_URL, APP_SITE_NAME, APP_URL } from '$lib';

	const PAGE_TITLE = 'Veracruz Inclusivo - Oportunidades Inclusivas en Veracruz';
</script>

<svelte:head>
	<title>{PAGE_TITLE}</title>
	<meta
		name="description"
		content="Veracruz Inclusivo es una plataforma que busca conectar a las personas con discapacidad con empresas y organizaciones que ofrecen servicios y oportunidades inclusivas."
	/>
	<meta
		name="keywords"
		content="veracruz, inclusivo, discapacidad, servicios inclusivos, oportunidades inclusivas, empresas inclusivas, organizaciones inclusivas"
	/>
	<meta name="author" content="Veracruz Inclusivo" />
	<meta property="og:title" content={PAGE_TITLE} />
	<meta property="og:site_name" content={APP_SITE_NAME} />
	<meta
		property="og:description"
		content="Descubre cómo Veracruz Inclusivo conecta a personas con discapacidad con servicios y oportunidades inclusivas en Veracruz."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={APP_IMAGE_URL} />
	<meta property="og:image" content={APP_IMAGE_URL} />
	<meta property="og:locale" content="es_MX" />
	<link rel="canonical" href="{APP_URL}/about-us" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={PAGE_TITLE} />
	<meta
		name="twitter:description"
		content="Veracruz Inclusivo conecta a personas con discapacidad con servicios y oportunidades inclusivas en Veracruz."
	/>
	<meta name="twitter:image" content={APP_IMAGE_URL} />
</svelte:head>

<main class="container">
	<h1 class="hidden">Veracruz Inclusivo</h1>
	<div class="grid lg:grid-cols-12 gap-16 items-center">
		<div class="lg:col-span-6 xl:col-span-8">
			<enhanced:img
				class="h-full rounded-3xl object-cover"
				src={ImageLandingHeroBig}
				alt="A group of diverse people working together in an inclusive office."
			/>
		</div>
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
