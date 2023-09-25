<script setup>
const turnOn = ref(false);
let timeout;
watch(turnOn, () => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		if (turnOn.value === true) {
			turnOn.value = false;
		}
	}, 2500);
});
</script>

<template>
	<div>
		<h1 id="the-name">
			Oded
			<span class="ws">
				Babay<span id="the-letter-o"
					>o
					<span class="off-on-toggle" :class="{ on: turnOn }" @click="turnOn = !turnOn"> </span>
				</span>
				<span v-if="turnOn">n</span>
				<span v-else>ff</span>
			</span>
		</h1>
	</div>
</template>

<style lang="scss">
div {
	--the-letter-o-width: 3rem;
	--the-letter-o-height: 1.8rem;
	--the-letter-o-thick: 0.65rem;
	--the-letter-o-half: calc(var(--the-letter-o-height) / 2);
	--the-letter-o-quad: calc(var(--the-letter-o-height) / 4);
	--the-inset: 0.825rem;
}
h1 {
	margin: 0;
	padding-bottom: var(--space-xs);
}
#the-name {
	color: var(--color-sys-main);
	font-size: var(--the-letter-o-width);
	line-height: 1;
}
.ws {
	white-space: nowrap;
}
#the-letter-o {
	width: var(--the-letter-o-width);
	display: inline-block;
	color: var(--bg-primary);
	position: relative;
	margin-inline-start: -0.1rem;
}
.off-on-toggle {
	display: inline-block;
	position: absolute;
	width: var(--the-letter-o-width);
	height: var(--the-letter-o-height);
	border-radius: var(--the-letter-o-half);
	inset: var(--the-inset) 0;
	box-shadow: inset 0 0 0 var(--the-letter-o-thick) var(--color-sys-main);
	cursor: pointer;
	&:after {
		transition: all 0.1s ease-out;
		content: '';
		display: inline-block;
		position: absolute;
		height: var(--the-letter-o-half);
		width: var(--the-letter-o-half);
		background-color: grey;
		inset: var(--the-letter-o-quad) 0 0 var(--the-letter-o-quad);
		border-radius: var(--the-letter-o-half);
		box-shadow: inset -0.1rem -0.2rem 0.3rem 0.05rem hsla(0, 0%, 0%, 0.25);
	}
}
.on {
	&:after {
		background-color: red;
		box-shadow: 0 0 0.25rem hsla(0, 100%, 50%, 0.5), inset 0.1rem 0.2rem 0.3rem 0.05rem hsla(0, 100%, 65%, 0.9);
		inset: var(--the-letter-o-quad) 0 0 calc(var(--the-letter-o-half) + var(--the-letter-o-thick));
	}
}
@media screen and (max-width: 600px) {
	div {
		--the-letter-o-width: 2.5rem;
		--the-letter-o-height: 1.5rem;
		--the-letter-o-thick: 0.5416rem;
		--the-inset: 0.6875rem;
	}
}
</style>
