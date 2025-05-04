<script>
	import {
		ImageAboutGallery1,
		ImageAboutGallery2,
		ImageAboutGallery3,
		ImageAboutGallery4,
		ImageAboutGallery5
	} from '$lib/assets';
</script>

<div class="max-w-1920px w-full px-8 hidden md:grid grid-cols-12 gap-4 xl:gap-8">
	<img
		class="col-span-4 aspect-ratio-square"
		src={ImageAboutGallery1}
		width="600"
		height="600"
		alt=""
	/>
	<div class="col-span-2 grid gap-4 xl:gap-8">
		<img class="aspect-ratio-square" src={ImageAboutGallery2} alt="" width="300" height="300" />
		<img class="aspect-ratio-square" src={ImageAboutGallery3} alt="" width="300" height="300" />
	</div>
	<img class="col-span-2" src={ImageAboutGallery4} alt="" />
	<div class="col-span-4 grid gap-8">
		<img class="aspect-ratio-20/9" src={ImageAboutGallery5} alt="" />
		<img
			class="aspect-ratio-video-20/9"
			src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
		/>
	</div>
</div>

<style>
	img {
		--uno: 'h-full rounded-xl xl:rounded-3xl object-cover';
	}
</style>
