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
			'flex items-center justify-center text-summit font-medium rounded-lg transition-colors duration-150 hover:bg-ground-1 focus:(outline-none ring-2 ring-summit)',
		'button--side': 'bg-ground-2 hover:bg-ground-1',
		container: 'w-full max-w-1538px mx-auto px-4 md:px-8'
	},
	theme: {
		colors: {
			'ground-0': '#FFFFFF',
			'ground-1': '#F5F5F5',
			'ground-2': '#D4D4D4',
			'common': "#404040",
			marque: '#2563EB',
			summit: '#000000'
		}
	},
	transformers: [transformerDirectives({ applyVariable: '--uno' }), transformerVariantGroup()],
	presets: [
		presetWind3(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				satoshi: 'General Sans'
			}
		})
	]
});
