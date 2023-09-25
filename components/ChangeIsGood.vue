<script setup>
const norm = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji'";
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
</script>

<template>
	<div>
		<button @click="changeRootFont">Change Root Font</button>
	</div>
</template>

<style scoped>
.root {
	font-family: var(--font-body);
}
</style>

<style>
:root {
	--font-body: v-bind(rootFont);
}
</style>
