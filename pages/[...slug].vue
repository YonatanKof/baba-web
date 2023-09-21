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
					<h1>{{ doc.title }}</h1>
					<span>
						<img :src="doc.image" alt="" />
						<p>{{ doc.description }}</p>
					</span>
				</ContentRenderer>
			</main>
		</ContentDoc>
		<!-- <ItemList :item-list="data" /> -->
	</main>
</template>

<style lang="scss" scoped>
span {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: var(--space-s);
}
</style>
