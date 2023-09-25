<script setup>
const norm =
	"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji'";
const crazy = 'Kablammo, cursive';
const rootFont = ref(norm);

function setFont() {
	var font = document.documentElement.style.getPropertyValue('--font-body');
	if (font === norm) {
		font = crazy;
	} else {
		font = norm;
	}
	return font;
}

const changeRootFont = () => {
	document.documentElement.style.setProperty('--font-body', setFont());
	setRootFont();
};
const setRootFont = () => (rootFont.value = getComputedStyle(document.documentElement).getPropertyValue('--font-body'));

onMounted(changeRootFont);

const turnOn = ref(false);
let timeout;
watch(turnOn, () => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		if (turnOn.value === true && rootFont.value === crazy) {
			(turnOn.value = false), (rootFont.value = norm && changeRootFont());
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
					<span class="off-on-toggle" :class="{ on: turnOn }" @click="(turnOn = !turnOn), changeRootFont()"> </span>
				</span>
				<span v-if="turnOn">n</span>
				<span v-else>ff</span>
			</span>
		</h1>
	</div>
</template>
<style scoped>
.root {
	font-family: var(--font-body);
}
</style>

<style lang="scss">
div {
	--the-letter-o-width: 3rem;
	--the-letter-o-height: 1.8rem;
	// If you want outline for the O
	// --the-letter-o-thick: 0.65rem;
	--the-inset: 0.825rem;
	--the-offset: 0.5rem;
	--the-half-offset: calc(var(--the-offset) / 2);
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
	border-radius: var(--the-letter-o-height);
	inset: var(--the-inset) 0;
	// If you want outline for the O
	// box-shadow: inset 0 0 0 var(--the-letter-o-thick) var(--color-sys-main);
	background-color: var(--color-sys-main);
	cursor: pointer;
	&:after {
		transition: all 0.1s ease-out;
		content: '';
		display: inline-block;
		position: absolute;
		width: calc(var(--the-letter-o-height) - var(--the-offset));
		height: calc(var(--the-letter-o-height) - var(--the-offset));
		background-color: var(--bg-primary);
		top: var(--the-half-offset);
		left: var(--the-half-offset);
		border-radius: var(--the-letter-o-height);
		// box-shadow: inset -0.1rem -0.2rem 0.3rem 0.05rem hsla(0, 0%, 0%, 0.25);
	}
}
.on {
	&:after {
		background-color: red;
		box-shadow: 0 0 0.25rem hsla(0, 100%, 50%, 0.5), inset 0.1rem 0.2rem 0.3rem 0.05rem hsla(0, 100%, 65%, 0.9);
		left: calc(var(--the-letter-o-width) + var(--the-half-offset) - var(--the-letter-o-height));
		// inset: 0 calc(var(--the-letter-o-width) - var(--the-letter-o-height));
	}
}
@media screen and (max-width: 600px) {
	div {
		--the-letter-o-width: 2.5rem;
		--the-letter-o-height: 1.5rem;
		// --the-letter-o-thick: 0.5416rem;
		--the-inset: 0.6875rem;
	}
}
:root {
	--font-body: v-bind(rootFont);
}
</style>
