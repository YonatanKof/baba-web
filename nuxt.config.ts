// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	content: {
		highlight: {
			theme: 'github-light',
		},
		markdown: {
			anchorLinks: {
				depth: 6,
			},
		},
	},
	devtools: { enabled: true },
});
