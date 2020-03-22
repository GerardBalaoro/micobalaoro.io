<template>
	<BannerLayout title="Sketches" class="bg-gray-100">
		<div
			class="fixed flex z-30 inset-0 h-screen"
			style="background: rgba(0,0,0,.75)"
			v-if="lightBoxActive"
		>
			<div class="flex flex-col px-5 m-auto w-5/6 md:w-2/3 lg:w-1/4">
				<g-image :src="lightBoxImage" class="shadow-lg" />
				<div class="flex justify-center pt-3">
					<button
						class="w-6 md:w-8 h-auto focus:outline-none focus:shadow-outline rounded-full"
						title="Close"
						@click="hideLightBox"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							class="text-white fill-current opacity-75"
						>
							<defs />
							<path
								d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
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
				v-for="sketch in sketches.items"
				:key="sketch.id"
				class="w-full p-2 lg:w-1/4"
				v-show="
					activeCategory == null ||
						sketch.category.id == activeCategory
				"
			>
				<div
					class="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col"
				>
					<div
						class="bg-blue-100 flex-grow p-5 flex-shrink-0 hover:bg-blue-200"
					>
						<g-image
							class="object-cover shadow-lg hover:shadow-xl w-full h-full hover:cursor-pointer"
							:src="sketch.image"
							width="300"
							@click="showLightBox(sketch.image)"
						/>
					</div>
					<h1
						class="font-semibold flex-none text-lg leading-tight w-full block p-5 text-center"
					>
						<div class="w-full pb-2">
							<span
								class="text-xs px-2 py-1 rounded uppercase text-gray-700 bg-gray-300 mx-auto"
							>
								{{ titleCase(sketch.category.title) }}
							</span>
						</div>
						{{ sketch.title }}
					</h1>
				</div>
			</div>
		</div>
	</BannerLayout>
</template>

<page-query>
query {
	allSketchCategory {
		edges {
			 node {
				id
				title
			}
		}
	}
	allSketch {
		edges {
			node {
				id
				title
				image
				category {
					id
					title
				}
			}
		}
	}
}
</page-query>

<script>
import BannerLayout from '~/layouts/Banner.vue'
import collect from 'collect.js'
import inflector from 'inflector-js'

export default {
	components: {
		BannerLayout,
	},
	data() {
		return {
			sketches: null,
			categories: null,
			activeCategory: null,
			lightBoxActive: false,
			lightBoxImage: null,
		}
	},
	methods: {
		titleCase(string) {
			return inflector.camel2words(string.replace(/-/g, ' '))
		},
		showLightBox(image) {
			this.lightBoxImage = image
			this.lightBoxActive = true
		},
		hideLightBox() {
			this.lightBoxActive = false
		},
	},
	created() {
		this.sketches = collect(this.$page.allSketch.edges.map(e => e.node))
		this.categories = collect(
			this.$page.allSketchCategory.edges.map(e => e.node)
		)
	},
}
</script>

<style lang="postcss" scoped>
.layout {
	position: relative;
}

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
