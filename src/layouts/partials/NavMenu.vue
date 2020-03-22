<template>
	<nav class="flex flex-row text-gray-400">
		<g-link
			class="px-2 py-1 uppercase text-xs font-semibold hover:text-gray-200"
			:to="nav.link"
			exact-active-class="text-gray-100"
			v-for="(nav, i) in mainNavigation"
			:key="i"
			>{{ nav.name }}</g-link
		>
	</nav>
</template>

<script>
import { mainNavigation } from '~/data/navigation.json'
export default {
	data() {
		return {
			mainNavigation,
		}
	},
}
</script>
