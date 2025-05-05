<script lang="ts">
	import ImageGallery from './image-gallery.svelte';
	import {
		type Icon,
		GraduationCap,
		HeartHandshake,
		LayoutList,
		TvMinimalPlay as TVMinimalPlay
	} from 'lucide-svelte';
	import { APP_IMAGE_URL, APP_SITE_NAME, APP_URL } from '$lib';
	import { ImageAboutA1, ImageAboutA2, ImageAboutA3, ImageAboutWhoWeAre } from '$lib/assets';

	const PAGE_TITLE = 'Acerca de Nosotros - Veracruz Inclusivo';
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
	<meta property="og:url" content="{APP_URL}/image-landing-hero-small" />
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

{#snippet card(title: string, description: string, image: string)}
	<div
		class="w-full min-w-full sm:min-w-400px $bg-ground-1 shadow-lg rounded-3xl border $border-ground-2 overflow-hidden snap-center"
	>
		<div class="p-8 grid gap-4">
			<h3 class="heading text-3xl font-semibold">
				{title}
			</h3>
			<p class="text-lg">
				{description}
			</p>
		</div>
		<enhanced:img src={image} alt="" />
	</div>
{/snippet}

{#snippet cardSmall(title: string, description: string, IconComponent: typeof Icon)}
	<div
		class="w-full min-w-full sm:min-w-325px xl:min-w-initial $bg-ground-1 shadow-lg rounded-3xl border $border-ground-2 overflow-hidden snap-center"
	>
		<div class="p-8 grid gap-4">
			<IconComponent class="$text-marque" size={48} strokeWidth={1.75} />
			<h3 class="heading text-3xl font-semibold">
				{title}
			</h3>
			<p class="text-lg">
				{description}
			</p>
		</div>
	</div>
{/snippet}

{#snippet cardImageless(title: string, description: string, label: string)}
	<div class="$bg-ground-1 shadow-lg rounded-3xl border $border-ground-2">
		<div class="p-8 grid gap-4">
			<p class="$text-summit uppercase font-medium text-sm">{label}</p>
			<h3 class="heading text-3xl font-semibold">
				{title}
			</h3>
			<p class="text-lg">
				{description}
			</p>
		</div>
	</div>
{/snippet}

<main class="grid gap-16 md:gap-32">
	<div class="flex flex-col items-center gap-16">
		<ImageGallery />
		<h1 class="px-4 heading text-5xl sm:text-7xl font-bold">Acerca de Nosotros</h1>
	</div>
	<div class="container grid gap-32">
		<section class="relative grid gap-8">
			<h2 class="text-3xl sm:text-4xl $text-summit font-bold tracking-tight">
				Nuestra Propuesta de Valor
			</h2>
			<div class="flex flex-nowrap overflow-x-auto snap-mandatory snap-x">
				<div class="w-full inline-flex gap-8" style="vertical-align: top;">
					{@render card(
						'Conecta con la Inclusión en Veracruz',
						'Deseamos conectar a las familiar con servicios inclusivos que aseguren una atención de calidad y amigable para esos seres queridos que necesitan más de nuestra atención y cuidado.',
						ImageAboutA1
					)}
					{@render card(
						'Recibe la Atención de Calidad que Mereces',
						'Nos aseguramos de que cada centro, asociación, profesional y empresa ha pasado por capacitación y supervisión, garantizando atención de calidad y respeto.',
						ImageAboutA2
					)}
					{@render card(
						'La Retroalimentación es Fundamental',
						'Queremos darle voz a las familias para evaluar la confiabilidad y efectividad de los servicios. Queremos que cada familia pueda compartir su experiencia y ayudar a otros a tomar decisiones.',
						ImageAboutA3
					)}
				</div>
				<!-- <div
					class="absolute right-0 bottom-80 size-12 translate-x-1/2 flex-center sm:hidden $bg-ground-0 shadow-lg rounded-full animate-pulse"
				>
					<ArrowRight />
				</div> -->
			</div>
		</section>
		<section class="grid md:grid-cols-12 gap-8">
			<div class="md:col-span-5 grid content-center gap-8">
				<h2 class="heading text-3xl sm:text-4xl font-bold">¿Quíenes somos?</h2>
				<p class="heading text-2xl">Red que Impulsa la Inclusión en Veracruz</p>
				<div class="leading-relaxed grid gap-4">
					<p class="text-xl leading-loose">
						Una red estatal sin fines de lucro, uniendo fuerzas entre asociaciones, centros
						especializados y profesionales comprometidos con la población neurodivergente y con
						discapacidad. Juntos construimos un Veracruz más justo, accesible y lleno de
						oportunidades para todos.
					</p>
				</div>
			</div>
			<div class="md:col-span-7">
				<enhanced:img
					class="h-full rounded-3xl object-cover"
					src={ImageAboutWhoWeAre}
					alt="Un grupo de personas diversas llegan a un acuerdo en su oficina."
				/>
			</div>
		</section>
		<section class="relative grid gap-8">
			<div class="grid gap-8">
				<h2 class="heading text-3xl sm:text-4xl font-bold">¿Qué ofrecemos?</h2>
				<p class="heading text-2xl $text-summit">
					Apoyo, Capacitación y Conexión para una Comunidad Inclusiva
				</p>
			</div>
			<div class="flex flex-nowrap overflow-x-auto snap-mandatory snap-x">
				<div class="w-full inline-flex gap-8" style="vertical-align: top;">
					{@render cardSmall(
						'Conferencias Virtuales Gratuitas',
						'Accede a información relevante y actualizada sobre inclusión desde la comodidad de tu hogar.',
						TVMinimalPlay
					)}
					{@render cardSmall(
						'Capacitaciones Presenciales',
						'Fortalecemos las habilidades de los prestadores de servicios para brindar una atención de calidad y respetuosa.',
						GraduationCap
					)}
					{@render cardSmall(
						'Red de Apoyo a Cuidadores',
						'Un espacio para compartir experiencias, encontrar recursos y construir una comunidad de apoyo.',
						HeartHandshake
					)}
					{@render cardSmall(
						'Directorio Inclusivo en Línea',
						'Encuentra fácilmente centros, profesionales y empresas comprometidas con la inclusión en Veracruz.',
						LayoutList
					)}
				</div>
			</div>
			<!-- <div
				class="absolute right-0 bottom-40 size-12 translate-x-1/2 flex-center sm:hidden $bg-ground-0 shadow-lg rounded-full animate-pulse"
			>
				<ArrowRight />
			</div> -->
		</section>
		<section class="relative grid gap-8">
			<div class="grid gap-8">
				<h2 class="heading text-3xl sm:text-4xl font-bold">¿Cómo Sumarte a Nuestra Red?</h2>
				<p class="heading text-2xl $text-summit">
					Sé parte del Movimiento por la Inclusión en Veracruz
				</p>
			</div>
			<div class="grid lg:grid-cols-3 gap-8">
				{@render cardImageless(
					'Red Estatal Veracruz Inclusivo',
					'Si tu asociación civil o centro de atención especializada brinda servicios a la población neurodivergente y con discapacidad, te invitamos a unirte a nuestra red de capacitadores. Comparte tu experiencia y contribuye a formar a otros profesionales.',
					'Capacitadores'
				)}
				{@render cardImageless(
					'Aliados Estratégicos',
					'Instituciones públicas y empresas que comparten nuestra visión pueden convertirse en aliados estratégicos. Tu apoyo en términos de instalaciones, personal, vinculación, difusión o recursos materiales es fundamental para ampliar nuestro impacto.',
					'Instituciones y Empresas'
				)}
				{@render cardImageless(
					'Servicios',
					'Si tu empresa o servicio general o educativo está comprometido con la inclusión, te invitamos a ser parte de nuestro directorio. Demuestra tu compromiso con una atención respetuosa y accesible.',
					'Capacitados'
				)}
			</div>
		</section>
	</div>
</main>
