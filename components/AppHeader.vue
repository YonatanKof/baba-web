<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<header>
		<div>
			<BabaOffOn />
			<!-- <ChangeIsGood /> -->
			<span id="links">
				<span>
					<nuxt-link to="contact">Contact</nuxt-link>
					<nuxt-link v-show="$route.path !== '/'" to="/">Home</nuxt-link>
				</span>
				<!-- <p v-show="$route.path === '/'"></p> -->
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
#links {
	@include flex-center;
	gap: var(--space-4xs);
}
span {
	display: flex;
	gap: var(--space-2xs);
}
a {
	margin: 0;
}
@media screen and (max-width: 600px) {
	div {
		flex-direction: column-reverse;
		align-items: initial;
		gap: var(--space-2xs);
	}
}
</style>
