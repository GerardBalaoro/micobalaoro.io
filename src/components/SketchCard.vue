<template>
	<div
		class="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col"
	>
		<div class="bg-blue-100 flex-grow p-5 flex-shrink-0 hover:bg-blue-200">
			<g-image
				class="object-cover shadow-lg hover:shadow-xl w-full h-full hover:cursor-pointer"
				:src="sketch.image"
				width="300"
				@click="imageClicked"
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
</template>

<script>
export default {
	props: {
		sketch: Object,
	},
	methods: {
		imageClicked() {
			this.$emit('image-clicked')
		},
	},
}
</script>
