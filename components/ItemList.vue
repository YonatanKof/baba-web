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
				<span>
					<h3>{{ service.title }}</h3>
					<p>{{ service.description }}</p>
				</span>
			</NuxtLink>
		</div>
	</main>
	<p v-if="itemList.length == 0">
		{{ message }}
	</p>
</template>

<style lang="scss" scoped>
a {
	text-decoration: none;
	inset: 0;
	display: block;
	font-weight: unset;
	&:hover{
		font-weight: unset;

	}
}
.grid {
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	gap: var(--space-s);
}

div {
	background-color: var(--color-sys-invert-highlight);
	box-shadow: var(--shadow-md);
	overflow: auto;
	transition: all ease-in-out 0.25s;
	border-radius: var(--space-3xs);
	&:hover {
		box-shadow: var(--shadow-lg);
		transform: scale(1.01);
	}
}
span {
	display: block;
	padding: var(--space-xs) var(--space-s);
}
p {
	font-size: var(--step--1);
	color: var(--color-sys-dim);
}
img {
	border-radius: unset;
}
</style>
