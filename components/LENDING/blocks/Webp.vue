<template>
	<picture>
		<source :data-srcset="src" type="image/png" />
		<img :src="webpSrc" :alt="alt" />
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
		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scroped>
</style>