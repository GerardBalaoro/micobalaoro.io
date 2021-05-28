<template>
	<BannerLayout title="Sketches" class="bg-gray-100">
		<LightBox ref="lightbox" />
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
				<SketchCard
					:sketch="sketch"
					@image-clicked="showLightBox(sketch)"
				/>
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
import LightBox from '~/components/LightBox.vue'
import SketchCard from '~/components/SketchCard.vue'
import collect from 'collect.js'
import inflector from 'inflector-js'

export default {
	components: {
		BannerLayout,
		SketchCard,
		LightBox,
	},
	data() {
		return {
			sketches: null,
			categories: null,
			activeCategory: null,
		}
	},
	methods: {
		showLightBox(sketch) {
			this.$refs.lightbox.show(
				sketch.image,
				`${this.titleCase(sketch.category.title)}: ${sketch.title}`
			)
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
		@apply bg-blue-500 text-white border-none shadow;
	}
}
</style>
