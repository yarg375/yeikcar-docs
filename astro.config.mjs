// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			defaultLocale: 'en',
			logo: {
				light: './src/assets/logo/logo.svg',
				dark: './src/assets/logo/logo-white.svg'
			},
			locales: {
				en: {
					label: 'English',
					lang: 'en'
				},
				es: {
					label: 'Español',
					lang: 'es'
				},
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', link: '/' }
					]
				}
			]
		}),
	],
});
