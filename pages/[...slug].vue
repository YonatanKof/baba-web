<!-- <script setup>
const { data } = await useAsyncData('equal', () => {
	return queryContent('services').where({}).find();
});
</script> -->
<template>
	<main>
		<ContentDoc v-slot="{ doc }">
			<main>
				<ContentRenderer :value="doc">
					<h2 id="title">{{ doc.title }}</h2>
					<span>
						<img :src="doc.image" alt="" />

						<p><ContentRenderer :value="doc" /></p>
					</span>
				</ContentRenderer>
			</main>
		</ContentDoc>
		<!-- <ItemList :item-list="data" /> -->
	</main>
</template>

<style lang="scss" scoped>
#title {
	margin-top: var(--space-l);
}
span {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: var(--space-m);
}
</style>
