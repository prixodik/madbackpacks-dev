<template>
	<picture>
		<source :data-srcset="webpSrc" type="image/webp" />
		<img :src="src" :alt="alt" />
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
			console.log(url);
			return url;
		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scroped>
</style>