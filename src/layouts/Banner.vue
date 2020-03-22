<template>
	<div class="layout">
		<header class="bg-gray-900 text-gray-100">
			<div
				class="p-5 w-full lg:px-0 lg:w-3/4 xl:max-w-6xl mx-auto flex flex-col pb-20"
			>
				<div
					class="flex justify-between items-center flex-wrap text-gray-400 mb-2"
				>
					<g-link
						to="/"
						class="flex text-white font-semibold items-center text-lg"
					>
						<Logo className="w-10 pr-3" />
						<SiteName className="hidden md:inline" />
					</g-link>
					<NavMenu class="self-end xs:mx-0"/>
				</div>
				<div class="text-center mb-5 mt-12 flex flex-col">
					<div
						class="block text-3xl lg:text-5xl uppercase tracking-widest"
					>
						{{ title }}
					</div>
				</div>
			</div>
		</header>
		<main class="mb-20">
			<slot />
		</main>
		<SiteFooter />
	</div>
</template>

<static-query>
query {
	metadata {
		siteName,
		siteDescription
	}
}
</static-query>

<script>
import NavMenu from '~/layouts/partials/NavMenu.vue'
import SiteName from '~/layouts/partials/SiteName.vue'
import SiteFooter from '~/layouts/partials/SiteFooter.vue'
import Logo from '~/layouts/partials/Logo.vue'

export default {
	components: {
		NavMenu,
		SiteName,
		SiteFooter,
		Logo,
	},
	metaInfo() {
		return {
			title: this.title
		}
	},
	props: {
		title: String,
	},
}
</script>

<style scoped>
body {
	@apply bg-gray-100;
}
</style>
