<script setup>
const props = defineProps({
	itemList: {
		type: Array,
		required: true,
	},
	message: {
		type: String,
		default: 'There are no designs right now, but stay tuned for newer releases in the future.',
	},
});
// const { $formatDate } = useNuxtApp();
</script>

<template>
	<main class="u-grid grid">
		<div v-for="service in itemList" :key="service._path">
			<NuxtLink :to="service._path + '/'">
				<img :src="service.image" alt="" />
				<h3>{{ service.title }}</h3>
				<p>{{ service.description }}</p>
			</NuxtLink>
		</div>
	</main>
	<p v-if="itemList.length == 0">
		{{ message }}
	</p>
</template>

<style scoped>
a{
	text-decoration: none;
}
main {
	gap: var(--space-s);
}
.grid {
	/* display: grid; */
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
}

div {
	margin-block-end: var(--space-s);
	background-color: aliceblue;
	box-shadow: var(--shadow-md);
	overflow: auto;
	transition: all ease-in-out 0.25s;
	&:hover {
		box-shadow: var(--shadow-lg);
		transform: scale(1.01);
	}
}
a {
	padding: var(--space-s);
	inset: 0;
	display: block;
}
p{
	font-size: var(--step--1);
}
</style>
