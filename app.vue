<script setup lang="ts">
// const config = useRuntimeConfig();
const siteTitle = `Oded Babayoff - Design manager of the gods`;
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
});
useSeoMeta({
	ogType: 'website',
	description: () => `Take your org to the next level through design with Oded Babayoff`,
	ogDescription: () => `Take your org to the next level through design with Oded Babayoff`,
	twitterDescription: () => `Take your org to the next level through design with Oded Babayoff`,
	ogImage: 'main-baba.jpg',
	twitterImage: 'main-baba.jpg',
	ogImageAlt: 'Oded Babayoff in TLV',
	twitterImageAlt: 'Oded Babayoff in TLV',
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
.pop-enter-active,
.pop-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}
.pop-enter-from {
	opacity: 0;
	transform: translateX(calc(var(--space-8xl) * -1));
}
.pop-leave-to {
	opacity: 0;
	transform: translateX(var(--space-8xl));
}
</style>
