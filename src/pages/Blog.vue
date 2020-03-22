<template>
	<BannerLayout title="Blog" class="bg-gray-100">
		<div class="w-full mx-auto -mt-10 px-5">
			<div
				class="bg-white shadow-lg rounded mx-auto border md:max-w-lg lg:max-w-2xl"
			>
				<ul class="flex flex-wrap p-5 justify-center">
					<li
						:class="{
							category: true,
							selected: activeCategory == null,
						}"
						v-text="'All'"
						@click="activeCategory = null"
					/>
					<li
						:class="{
							category: true,
							selected: activeCategory == category.id,
						}"
						v-for="category in categories.items"
						v-text="titleCase(category.title)"
						:key="category.id"
						@click="activeCategory = category.id"
					/>
				</ul>
			</div>
		</div>
		<div
			class="p-5 w-full lg:px-0 lg:w-3/4 xl:max-w-6xl mx-auto mt-10 flex flex-wrap items-stretch justify-center"
		>
			<div
				class="py-3 w-full lg:w-1/3 lg:px-2 xl:w-1/4"
				v-for="post in posts.items"
				v-show="activeCategory == null || post.category.id == activeCategory"
				:key="post.id"
			>
				<PostCard :post="post" />
			</div>
		</div>
	</BannerLayout>
</template>

<page-query>
query {
	allCategory {
		edges {
			 node {
				id
				title
			}
		}
	}
	allPost(sort: [{ by: "created" }, { by: "id" }], order: DESC) {
		edges {
			node {
				id
				title
				image
				created (format: "DD MMM YYYY")
				content
				category {
					id
					title
				}
				path
			}
		}
	}
}
</page-query>

<script>
import BannerLayout from '~/layouts/Banner.vue'
import PostCard from '~/components/PostCard.vue'
import collect from 'collect.js'
import inflector from 'inflector-js'

export default {
	components: {
		BannerLayout,
		PostCard,
	},
	data() {
		return {
			posts: null,
			categories: null,
			activeCategory: null,
		}
	},
	methods: {
		titleCase(string) {
			return inflector.camel2words(string.replace(/-/g, ' '))
		},
	},
	created() {
		this.posts = collect(this.$page.allPost.edges.map(e => e.node))
		this.categories = collect(
			this.$page.allCategory.edges.map(e => e.node)
		)
	},
}
</script>

<style lang="postcss" scoped>
li.category {
	@apply bg-blue-100 text-blue-500 font-medium px-3 py-1 mx-1 my-1 border-blue-200 border rounded-full cursor-default;

	&:hover {
		@apply cursor-pointer;
	}

	&.selected {
		@apply bg-blue-500 text-white border-none shadow-xs;
	}
}
</style>
