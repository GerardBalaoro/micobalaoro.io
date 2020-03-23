<template>
	<BannerLayout :title="$page.article.title">
		<div
			class="p-5 w-full lg:px-0 md:w-3/4 md:leading-loose xl:max-w-6xl mx-auto mt-10 flex flex-wrap items-stretch justify-center"
		>
			<article class="post mx-auto">
				<div class="content" v-html="$page.article.content"></div>
			</article>
		</div>
	</BannerLayout>
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
import BannerLayout from '~/layouts/Banner.vue'
import '~/assets/css/markdown.css'

export default {
	components: {
		BannerLayout,
	},
	metaInfo() {
		return {
			title: this.$page.article.title,
			meta: [{ name: 'author', content: this.$page.metadata.author }],
		}
	},
}
</script>
