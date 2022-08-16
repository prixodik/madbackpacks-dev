<template>
	<div class="loading-page" :class="{ 'is-active': loading }">
		<div class="loading">
			<Webp class="loading__main" src="/images/logo.png" :retina="true"></Webp>
			<!-- <img class="loading__circle" src="/images/loading-circle.svg" alt=""> -->
		</div>
	</div>
</template>
<script>
import Webp from '../blocks/Webp.vue';
export default {
	data: () => ({
		loading: true,
	}),
	methods: {
		start() {
			this.loading = true;
		},
		finish() {
			this.loading = false;
		},
	},
	components: { Webp }
}
</script>
<style lang="scss" scoped>
.loading-page {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #090923;
	pointer-events: none;
	opacity: 0;
	transition: all .5s;
}

.loading-page.is-active {
	opacity: 1;
	pointer-events: auto;
}


.loading {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 300px;
	position: relative;
	z-index: 1;
}

.loading__main {
	/* width: 70px;
	height: 70px; */
	object-fit: contain;
	display: block;
	animation: spin 3s ease-in-out infinite;
	transform-origin: 50% 50%;
	/* position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2;
		transform: translate(-50%, -50%); */
}

.loading__circle {
	width: 300px;
	height: 300px;
	object-fit: contain;
	display: block;
	animation: spin 3s ease-in-out infinite;
	transform-origin: 0% 0%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: -1;
	transform: translate(-50%, -50%);

	img {
		max-width: 100%;
		object-fit: contain;
	}
}

@keyframes spin {
	0% {
		-webkit-transform: rotate(0deg) scale(1);
		transform: rotate(0deg) scale(1);
	}

	50% {
		-webkit-transform: rotate(0deg) scale(0.96);
		transform: rotate(0deg) scale(0.96);
	}

	100% {
		-webkit-transform: rotate(0deg) scale(1);
		transform: rotate(0deg) scale(1);
	}
}
</style>
