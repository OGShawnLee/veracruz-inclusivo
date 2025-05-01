import { defineConfig } from 'unocss/vite';
import {
	presetWind3,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	shortcuts: {
		button:
			'flex items-center justify-center rounded-lg font-medium outline-none focus:(ring-2 ring-offset-2 ring-summit) active:scale-97.5',
		'button--side': '$bg-ground-2 $text-summit hover:$bg-ground-3',
		'button--rectangle': 'px-4',
		'button--main': 'bg-ground-0-dark text-summit-dark dark:bg-ground-0 dark:text-summit',
		"button-square": "flex items-center justify-center size-10 bg-transparent",
		// button:
		// 	'flex items-center justify-center $text-summit font-medium rounded-lg transition-colors duration-150 focus:(outline-none ring-2 ring-summit dark:ring-summit-dark)',
		// 'button--main': 'bg-ground-0-dark text-summit-dark dark:bg-ground-0 dark:text-summit',
		// 'button--side': '$bg-ground-2 hover:(bg-ground-0-dark text-summit-dark dark:(bg-ground-0 text-summit))',
		container: 'w-full max-w-1538px mx-auto px-4 md:px-8',
		heading: '$text-summit tracking-tighter',
		'flex-center': 'flex items-center justify-center',
		// Adapting to the Color Mode
		'$text-summit': 'text-summit dark:text-summit-dark',
		'$text-summit-inverse': 'text-summit-dark dark:text-summit',
		'$text-common': 'text-common dark:text-common-dark',
		'$text-marque': 'text-marque dark:text-marque-dark',
		'$bg-ground-0': 'bg-ground-0 dark:bg-ground-0-dark',
		'$bg-ground-1': 'bg-ground-1 dark:bg-ground-1-dark',
		'$bg-ground-2': 'bg-ground-2 dark:bg-ground-2-dark',
		'$bg-ground-3': 'bg-ground-3 dark:bg-ground-3-dark',
		'$bg-marque': 'bg-marque dark:bg-marque-dark',
		'$border-ground-2': 'border-ground-2 dark:border-ground-2-dark',
		$placeholder: 'placeholder-neutral-500'
	},
	theme: {
		colors: {
			'ground-0': '#F5F5F5',
			'ground-0-dark': '#0A0A0A',
			'ground-1': '#FFFFFF',
			'ground-1-dark': '#171717',
			'ground-2': '#D4D4D4',
			'ground-2-dark': '#262626',
			'ground-3': '#A3A3A3',
			'ground-3-dark': '#404040',
			common: '#404040',
			'common-dark': '#D4D4D4',
			marque: '#2563EB',
			'marque-dark': '#60A5FA',
			summit: '#000000',
			'summit-dark': '#FFFFFF'
		}
	},
	transformers: [transformerDirectives({ applyVariable: '--uno' }), transformerVariantGroup()],
	presets: [
		presetWind3(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				satoshi: 'Satoshi',
				chillax: 'Chillax'
			}
		})
	]
});
