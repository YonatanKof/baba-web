<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<header>
		<div>
			<BabaOffOn />
			<span>
				<nuxt-link v-show="$route.path !== '/'" to="/">Home</nuxt-link>
				<button @click="toggleDark()">
					<IconSun v-if="isDark" />
					<IconMoon v-else />
				</button>
			</span>
		</div>
		<h2>Design Consulting Services</h2>
	</header>
</template>

<style lang="scss" scoped>
div {
	@include flex-center;
}
button {
	background-color: unset;
	padding: var(--space-2xs);
	@include flex-center;
	margin: 0;
}
span {
	@include flex-center;
	gap: var(--space-2xs);
}
</style>
