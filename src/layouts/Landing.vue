<template>
	<div class="layout">
		<header class="bg-gray-900 text-gray-100 relative z-0">
			<div
				class="p-5 w-full lg:px-0 lg:w-3/4 xl:max-w-6xl mx-auto flex flex-col pb-48 relative"
			>
				<div
					class="flex justify-between items-center flex-wrap text-gray-400 mb-2"
				>
					<NavMenu />
					<SocialMenu className="hidden lg:flex mx-auto lg:mx-0" />
				</div>
				<div class="text-center mb-5 mt-12 flex flex-col">
					<div class="mx-auto">
						<Logo className="w-12 lg:w-16 pr-3" />
					</div>
					<SiteName
						className="block text-3xl lg:text-5xl tracking-widest"
					/>
					<div
						class="font-light text-normal lg:text-lg lowercase tracking-wide text-gray-300"
					>
						{{ $static.metadata.siteDescription }}
					</div>
				</div>
			</div>
		</header>
		<main class="relative mb-20">
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
import SocialMenu from '~/layouts/partials/SocialMenu.vue'
import SiteName from '~/layouts/partials/SiteName.vue'
import SiteFooter from '~/layouts/partials/SiteFooter.vue'
import Logo from '~/layouts/partials/Logo.vue'

export default {
	metaInfo() {
		return {
			titleTemplate: `${this.$static.metadata.siteName} - ${this.$static.metadata.siteDescription}`,
		}
	},
	components: {
		NavMenu,
		SocialMenu,
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

<style scoped>
body {
	@apply bg-gray-100;
}
header::before {
	background-image: url('~@/assets/img/background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	content: '';
	width: 100%;
	height: 100%;
	opacity: 0.1;
	filter: blur(10px);
}
</style>
