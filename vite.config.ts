import UnoCSS from 'unocss/vite';
import { enhancedImages as EnhancedImages } from "@sveltejs/enhanced-img"
import { sveltekit as SvelteKit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [EnhancedImages(), SvelteKit(), UnoCSS()]
});
