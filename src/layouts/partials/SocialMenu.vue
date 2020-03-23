<template>
	<ul class="text-gray-400 flex items-center">
		<li
			class="px-2 py-1"
			v-for="(social, i) in $static.metadata.social"
			:key="i"
		>
			<a
				:href="social.link"
				:title="social.name"
				target="_blank"
				class="hover:text-gray-100"
			>
				<fa :icon="social.icon.split('-')" class="w-4" />
			</a>
		</li>
	</ul>
</template>

<static-query>
query {
    metadata {
        social {
            name, link , icon
        }
    }
}
</static-query>
