<template>
	<main>
		<ContentDoc v-slot="{ doc }">
			<main>
				<ContentRenderer :value="doc">
					<hr />
					<h2 id="title">{{ doc.title }}</h2>
					<hr />
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
hr:first-child {
	margin-top: var(--space-m);
}
hr:last-of-type {
	margin-bottom: var(--space-m);
}

#title {
	margin-block: var(--space-m);
}
span {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: var(--space-m);
}
@media screen and (max-width: 600px) {
	span {
		grid-template-columns: 1fr;
	}
}
</style>
