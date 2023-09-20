<script setup>
const { data } = await useAsyncData('equal', () => {
	return queryContent('services').where({}).find();
});
</script>
<template>
	<main class="u-container">
		<h1>Oded Babayoff</h1>
		<h2>Design Consulting Services</h2>
		<p>
			With over 15 years of extensive experience in leading design teams across diverse tech organizations, I
			successfully delivered numerous products to market and developed winning design strategies.
		</p>
		<p>
			I have established many design organizations from scratch and integrated UX best practices and agile methodologies
			within product teams, resulting in substantial enhancements in velocity and efficiency.
		</p>
		<p>
			Over the last decade I gained the experience in creating strong design organizations that align with business
			priorities & goals.
		</p>

		<h2>Services</h2>
		<ItemList :item-list="data" />
	</main>
</template>