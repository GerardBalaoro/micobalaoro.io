<template>
	<footer class="bg-gray-900 text-gray-100">
		<div
			class="p-5 w-full lg:px-0 font-light text-sm lg:w-3/4 xl:max-w-6xl flex justify-between mx-auto"
		>
			<span class="block mx-auto">
				Copyright © {{ $static.metadata.author }}. All rights reserved.
			</span>
		</div>
	</footer>
</template>

<static-query>
query {
    metadata {
        author
    }
}
</static-query>

<script>
import SocialMenu from '~/partials/SocialMenu.vue';

export default {
	components: {
		SocialMenu
	}
}
</script>
