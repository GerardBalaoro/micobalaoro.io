<template>
	<span :class="'font-light ' + className">
		<span
			v-for="(name, i) in siteName"
			:key="i"
			:class="{ 'font-semibold': i == siteName.length - 1 }"
			v-text="name"
		></span>
	</span>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<script>
export default {
	props: {
		className: { type: String, required: false },
	},
	computed: {
		siteName() {
			return this.$static.metadata.siteName.toUpperCase().split(' ')
		},
	},
}
</script>
