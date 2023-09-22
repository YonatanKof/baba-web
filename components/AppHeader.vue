<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<header>
		<div>
			<BabaOffOn />
			<button @click="toggleDark()">Make 
				<span v-if="isDark">Light</span>
				<span v-else>Dark</span>
			</button>
		</div>
		<h2>Design Consulting Services</h2>
	</header>
</template>

<style lang="scss" scoped>
div {
	@include flex-center;
}
</style>
