<template>
	<article
		class="bg-white shadow-lg rounded overflow-hidden flex flex-col xl:flex-row"
	>
		<g-link
			:to="post.path"
			:title="post.title"
			class="block bg-blue-100 h-40 md:h-48 lg:h-64 relative xl:h-auto xl:w-3/5"
		>
			<g-image
				v-if="post.image"
				class="absolute object-cover w-full h-full"
				:alt="post.title"
				:src="post.image"
			/>
			<g-image
				v-else
				class="absolute object-cover w-full h-full"
				:alt="post.title"
				src="~/assets/img/blog-placeholder.png"
			/>
		</g-link>
		<div class="px-5 py-5 xl:w-2/5 flex flex-row flex-wrap">
			<div
				class="text-xs px-2 py-1 font-semibold bg-blue-100 text-blue-500 rounded mb-2"
			>
				{{ post.category.title.toUpperCase() }}
			</div>
			<h1 class="font-semibold text-xl leading-tight w-full block">
				<g-link :to="post.path">
					{{ post.title }}
				</g-link>
			</h1>
			<p class="mt-2 text-sm xl:mt-4 text-justify">
				{{ excerpt }}
			</p>
			<div
				class="text-right uppercase text-sm w-full text-gray-600 self-end pt-5 self-end"
			>
				{{ post.created }}
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		post: { type: Object, required: true }
	},
	computed: {
		excerpt() {
			return (
				this.post.content.replace(/(<([^>]+)>)/gi, '').slice(0, 250) +
				'...'
			);
		}
	}
};
</script>
