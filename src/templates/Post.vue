<template>
	<Layout>
		<div class="px-5 py-3 my-3">
			<article class="post">
				<div class="lg:w-4/6 xl:w-1/2 mx-auto">
					<span
						class="text-blue-500 bg-blue-100 px-2 py-1 rounded text-sm font-medium"
					>
						{{ $page.post.category.title.toUpperCase() }}
					</span>
					<h1 class="text-3xl lg:text-4xl font-semibold">
						{{ $page.post.title }}
					</h1>
					<span class="text-sm mt-1 text-gray-500">{{
						$page.post.created
					}}</span>
					<hr class="border border-gray-300 border-1 mt-8 mb-5" />
				</div>
				<g-image
					class="w-full border rounded shadow-lg mb-8 lg:w-5/6 xl:w-3/5 mx-auto"
					:src="$page.post.image"
					v-if="$page.post.image"
				/>
				<g-image
					class="w-full border rounded shadow-lg mb-8 lg:w-5/6 xl:w-3/5 mx-auto"
					src="~/assets/img/blog-placeholder.png"
					v-else
				/>
				<div
					class="content text-gray-900 lg:w-4/6 xl:w-1/2 xl:max-w-6xl mx-auto"
					v-html="$page.post.content"
				></div>
			</article>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
	post (id: $id) {
		title
		content
		created (format: "DD MMMM YYYY")
		category {
			title
		}
		image (width: 1920, quality: 100)
	}
	metadata {
		author
	}
}
</page-query>

<script>
import '~/assets/css/markdown.css'

export default {
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [{ name: 'author', content: this.$page.metadata.author }],
		}
	},
}
</script>
