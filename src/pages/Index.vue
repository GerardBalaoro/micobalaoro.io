<template>
	<HomeLayout>
		<LightBox ref="lightbox" />
		<div class="px-5 -mt-32 w-full lg:w-3/4 xl:w-1/2 xl:max-w-3xl mx-auto">
			<LargePost class="w-full" :post="featured" />
		</div>
		<div
			class="px-5 lg:px-2 w-full lg:w-3/4 xl:max-w-6xl flex flex-row flex-wrap mt-16 mx-auto"
		>
			<div class="flex flex-wrap mx-auto items-stretch">
				<div
					class="py-3 w-full lg:w-1/2 lg:px-2 xl:w-1/4"
					v-for="post in posts.skip(1)"
					:key="post.id"
				>
					<PostCard :post="post" />
				</div>
				<div
					class="w-full flex mt-6"
					v-if="posts.count() < $page.allPost.totalCount"
				>
					<g-link
						to="/blog/"
						title="Blog"
						class="mx-auto px-3 py-2 bg-blue-100 text-blue-500 font-semibold text-sm uppercase tracking-wide rounded-lg"
					>
						See All Posts
					</g-link>
				</div>
			</div>
			<div
				class="flex flex-wrap mx-auto items-stretch mt-10 bg-gray-100 p-10 rounded-lg"
			>
				<div
					class="w-full text-center uppercase font-semibold text-gray-600 pb-5 text-lg"
				>
					Sketches
				</div>
				<div
					class="py-3 w-full lg:w-1/2 lg:px-2 xl:w-1/4"
					v-for="sketch in sketches"
					:key="sketch.id"
				>
					<SketchCard
						:sketch="sketch"
						@image-clicked="showLightBox(sketch)"
					/>
				</div>
				<div
					class="w-full flex mt-6"
					v-if="sketches.count() < $page.allSketch.totalCount"
				>
					<g-link
						to="/sketches/"
						title="Sketches"
						class="mx-auto px-3 py-2 bg-blue-100 text-blue-500 border border-blue-300 font-semibold text-sm uppercase tracking-wide rounded-lg"
					>
						See All Sketches
					</g-link>
				</div>
			</div>
		</div>
		<div></div>
	</HomeLayout>
</template>

<page-query>
query {
	allPost(sort: [{ by: "created" }, { by: "id" }], order: DESC, limit: 5) {
		totalCount
		edges {
			node {
				id
				title
				image
				created(format: "DD MMM YYYY")
				content
				category { 
					title 
				}
				path
			}
		}
	}
	allSketch(limit: 4) {
		totalCount
		edges {
			node {
				id
				title
				image(width: 300)
				category {
					title
				}

			}
		}
	}
}
</page-query>

<script>
import HomeLayout from '~/layouts/Landing.vue'
import LargePost from '~/components/LargePost.vue'
import LightBox from '~/components/LightBox.vue'
import PostCard from '~/components/PostCard.vue'
import SketchCard from '~/components/SketchCard.vue'
import collect from 'collect.js'

export default {
	components: {
		HomeLayout,
		LargePost,
		LightBox,
		PostCard,
		SketchCard,
	},
	data() {
		return {
			posts: null,
			sketches: null,
			featured: null,
		}
	},
	created() {
		this.posts = collect(this.$page.allPost.edges.map(e => e.node))
		this.sketches = collect(this.$page.allSketch.edges.map(e => e.node))
		this.featured = this.posts.first()
	},
	methods: {
		showLightBox(sketch) {
			this.$refs.lightbox.show(
				sketch.image,
				`${this.titleCase(sketch.category.title)}: ${sketch.title}`
			)
		},
	},
}
</script>
