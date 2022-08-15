<template>
	<picture>
		<source :data-srcset="src" type="image/png" />
		<img v-if="retina" :srcset="`${webpSrc},
		${webpSrc2x} 2x`" :src="webpSrc" :alt="alt" />

		<img v-else :src="webpSrc" :alt="alt" />
	</picture>
</template>
<script>
export default {
	name: "Webp",
	props: {
		src: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			default: ''
		},
		retina: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			//webpSrc: null
		};
	},
	components: {},
	computed: {
		webpSrc() {
			const url = this.src.replace(/\.\w{1,5}$/, ".webp");
			return url;
		},
		webpSrc2x() {
			const url = this.src.replace(/\.\w{1,5}$/, "@2x.webp");
			return url;
		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scroped>
</style>