<script>
	import {
		ImageAboutGallery1,
		ImageAboutGallery2,
		ImageAboutGallery3,
		ImageAboutGallery4,
		ImageAboutGallery5,
		ImageAboutGallery6
	} from '$lib/assets';
</script>

<div class="max-w-1920px w-full px-8 hidden md:grid grid-cols-12 gap-4 xl:gap-8">
	<div class="col-span-4">
		<enhanced:img
			class="image aspect-ratio-square"
			src={ImageAboutGallery1}
			alt="Una señal de estacionamiento con un símbolo de silla de ruedas, indicando estacionamiento accesible."
		/>
	</div>
	<div class="col-span-4 grid gap-8">
		<enhanced:img
			class="image"
			src={ImageAboutGallery5}
			alt="Un grupo de personas en un ambiente de trabajo calido."
		/>
		<enhanced:img
			class="image"
			src={ImageAboutGallery6}
			alt="Un grupo de personas vestidas casualmente en una reunión de trabajo seria."
		/>
	</div>
	<div class="col-span-2">
		<enhanced:img
			class="image"
			src={ImageAboutGallery4}
			alt="Una mujer de edad mayor usando andadera entrando a una cafetería."
		/>
	</div>
	<div class="col-span-2 grid gap-4 xl:gap-8">
		<enhanced:img
			class="image aspect-ratio-square"
			src={ImageAboutGallery2}
			alt="Una mujer de mediana edad con lentes y silla de rueda recibiendo atención en un escritorio."
		/>
		<enhanced:img
			class="image aspect-ratio-square"
			src={ImageAboutGallery3}
			alt="Múltiples personas colocando sus manos unas sobre las otras sobre una mesa de estudio."
		/>
	</div>
</div>

<style>
	.image {
		--uno: 'h-full rounded-xl xl:rounded-3xl object-cover';
	}
</style>
