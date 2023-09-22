// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@vueuse/nuxt'],
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
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '~/assets/styles/reset' as *; 
						@use '~/assets/styles/mixins' as *; 
						@use '~/assets/styles/utopia' as *; 
						@use '~/assets/styles/typography' as *;
						@use '~/assets/styles/style' as *;`,
				},
			},
		},
	},
	devtools: { enabled: true },
});
