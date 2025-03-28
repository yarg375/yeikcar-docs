// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'Docs',
				es: 'Guías'
			},
			defaultLocale: 'en',
	
			logo: {
				light: './src/assets/logo/logo.svg',
				dark: './src/assets/logo/logo-white.svg'
			},
			social: {
				github: 'https://github.com/yarg375/yeikcar-docs',
			  },
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
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
					translations: {
						es: 'Guías'
					},
					items: [
						{ 
							label: 'Getting Started',
							translations: {
								es: 'Comenzar'
							},
							link: '/'
						},
						{
							label: 'Initial Setup',
							translations: {
								es: 'Configuración Inicial'
							},
							link: '/initial-setup'
						},
						{
							label: 'First Steps',
							translations: {
								es: 'Primeros Pasos'
							},
							link: '/first-steps'
						}
					]
				}
			]
		}),
	],
});
