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
			'flex items-center justify-center $text-summit font-medium rounded-lg transition-colors duration-150 hover:bg-ground-1 focus:(outline-none ring-2 ring-summit dark:ring-summit-dark)',
		'button--main': 'bg-ground-0-dark text-summit-dark dark:bg-ground-0 dark:text-summit',
		'button--side': '$bg-ground-2 hover:(bg-ground-0-dark text-summit-dark dark:(bg-ground-0 text-summit))',
		container: 'w-full max-w-1538px mx-auto px-4 md:px-8',
		// Adapating to the Color Mode
		"$text-summit": "text-summit dark:text-summit-dark",
		"$text-common": "text-common dark:text-common-dark",
		'$text-marque': 'text-marque dark:text-marque-dark',
		'$bg-ground-0': 'bg-ground-0 dark:bg-ground-0-dark',
		'$bg-ground-1': 'bg-ground-1 dark:bg-ground-1-dark',
		'$bg-ground-2': 'bg-ground-2 dark:bg-ground-2-dark',
		'$border-ground-2': 'border-ground-2 dark:border-ground-2-dark',
	},
	theme: {
		colors: {
			'ground-0': '#F5F5F5',
			'ground-0-dark': '#0A0A0A',
			'ground-1': '#FFFFFF',
			'ground-1-dark': '#171717',
			'ground-2': '#D4D4D4',
			'ground-2-dark': '#262626',
			'common': "#404040",
			'common-dark': "#D4D4D4",
			marque: '#2563EB',
			'marque-dark': '#60A5FA',
			summit: '#000000',
			'summit-dark': '#FFFFFF',
		}
	},
	transformers: [transformerDirectives({ applyVariable: '--uno' }), transformerVariantGroup()],
	presets: [
		presetWind3(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				satoshi: 'Satoshi'
			}
		})
	]
});
