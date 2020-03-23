<template>
	<div
		class="fixed flex z-30 inset-0 h-screen"
		style="background: rgba(0,0,0,.90)"
		v-if="shown && image"
	>
		<div class="flex flex-col px-5 m-auto w-5/6 md:w-2/3 lg:w-1/3 xl:w-1/4">
			<span class="text-white text-center pb-3 font-semibold">{{
				title
			}}</span>
			<g-image :src="image" class="shadow-lg" />
			<div class="flex justify-center pt-3">
				<button
					class="w-6 md:w-8 h-auto focus:outline-none focus:shadow-outline rounded-full"
					title="Close"
					@click="hide()"
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
</template>

<script>
export default {
	data() {
		return {
			shown: false,
			title: null,
			image: null,
		}
	},
	methods: {
		show(image, title = null) {
			this.image = image
			this.title = title
			this.shown = true
		},
		hide() {
			this.shown = false
			this.title = null
			this.image = null
		},
	},
}
</script>
