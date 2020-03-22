<template>
	<div class="layout">
		<header class="bg-gray-900 text-gray-100">
			<div class="p-5 lg:px-0 lg:w-5/6 xl:w-3/5 flex flex-col mx-auto">
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
					<NavMenu />
				</div>
			</div>
		</header>
		<main class="pb-20">
			<slot />
		</main>
		<SiteFooter class="w-full" />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
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
	data() {
		return {
			navigation: ['Home', 'Posts', 'Categories', 'About'],
		}
	},
}
</script>

<style>
body {
	@apply bg-white;
}
</style>
