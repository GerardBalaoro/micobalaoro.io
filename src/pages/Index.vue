<template>
	<HomeLayout>
		<div class="px-5 -mt-32 w-full lg:w-3/4 xl:w-1/2 xl:max-w-3xl mx-auto">
			<LargePost class="w-full" :post="featured" />
		</div>
		<div
			class="px-5 lg:px-2 w-full lg:w-3/4 xl:max-w-6xl flex flex-row flex-wrap mt-16 mx-auto items-stretch"
		>
			<div
				class="py-3 w-full lg:w-1/2 lg:px-2 xl:w-1/4"
				v-for="post in posts.skip(1)"
				:key="post.id"
			>
				<PostCard :post="post" />
			</div>
		</div>
	</HomeLayout>
</template>

<page-query>
query {
	allPost(sort: [{ by: "created" }, { by: "id" }], order: DESC) {
		edges {
			node {
				id,
				title, 
				image,
				created (format: "DD MMM YYYY"),
				content,
				category { title },
				path
			}
		}
	}
}
</page-query>

<script>
import HomeLayout from '~/layouts/Landing.vue'
import LargePost from '~/components/LargePost.vue'
import PostCard from '~/components/PostCard'
import collect from 'collect.js'

export default {
	components: {
		HomeLayout,
		LargePost,
		PostCard,
	},
	computed: {
		featured() {
			return this.posts.first()
		},
		posts() {
			return collect(
				this.$page.allPost.edges.map(e => {
					return e.node
				})
			)
		},
	},
}
</script>
