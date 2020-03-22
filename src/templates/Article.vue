<template>
	<Layout>
		<div class="px-5 py-3 my-3">
			<article class="post">
				<div class="lg:w-4/6 xl:w-1/2 mx-auto">
					<h1 class="text-3xl lg:text-4xl font-semibold">
						{{ $page.article.title }}
					</h1>
					<hr class="border border-gray-300 border-1 mt-8 mb-5" />
				</div>
				<VueRemarkContent
					class="content text-gray-900 lg:w-4/6 xl:w-1/2 xl:max-w-6xl mx-auto"
				/>
			</article>
		</div>
	</Layout>
</template>

<page-query>
query Article($id: ID!) {
  article(id: $id) {
    title
	content
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
			title: this.$page.article.title,
			meta: [{ name: 'author', content: this.$page.metadata.author }],
		}
	},
}
</script>
