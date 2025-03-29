// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import icon from "astro-icon";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
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
					label: 'Getting Started',
					translations: {
						es: 'Empieza Aquí'
					},
					items: [
						{ 
							label: 'Home',
							translations: {
								es: 'Inicio'
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
						},
						{
							label: 'Features',
							translations: {
								es: 'Características'
							},
							link: '/features'
						},
						{
							label: 'Support',
							translations: {
								es: 'Soporte'
							},
							link: '/support'
						}
					]
				},
				{
					label: 'Guides & Tutorials',
					translations: {
						es: 'Guías y Tutoriales'
					},
					items: [
						{ 
							label: 'Overview', 
							translations: { es: 'Resumen' }, 
							link: '/guides/' 
						}
					]
				},
				{
					label: 'Troubleshooting & FAQ',
					translations: {
						es: 'Solución de Problemas y FAQ'
					},
					items: [
						{ 
							label: 'Overview', 
							translations: { es: 'Resumen' }, 
							link: '/troubleshooting/' 
						}
					]
				},
				{
					label: 'Practical Examples',
					translations: {
						es: 'Ejemplos Prácticos'
					},
					items: [
						{ 
							label: 'Overview', 
							translations: { es: 'Resumen' }, 
							link: '/examples/' 
						}
					]
				},
				{
					label: 'Glossary',
					translations: {
						es: 'Glosario'
					},
					items: [
						{ 
							label: 'Glossary', 
							translations: { es: 'Glosario' }, 
							link: '/glossary' 
						}
					]
				},
				{
					label: 'Best Practices',
					translations: {
						es: 'Mejores Prácticas'
					},
					items: [
						{ 
							label: 'Best Practices', 
							translations: { es: 'Mejores Prácticas' }, 
							link: '/best-practices' 
						}
					]
				}
			]
		}),
	],
});
