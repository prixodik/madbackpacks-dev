<template>
	<div class="loading-page" :class="{ 'is-active': loading }">
		<div class="loading">
			<img class="loading__main" src="/images/loading-img.png" alt="">
			<img class="loading__circle" src="/images/loading-circle.svg" alt="">
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		loading: true,
	}),
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		},
	},
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
	width: 200px;
	height: 200px;
	position: relative;
	z-index: 1;
}

.loading__main {
	width: 70px;
	height: 70px;
	object-fit: contain;
	display: block;
	/* position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2;
		transform: translate(-50%, -50%); */
}

.loading__circle {
	width: 200px;
	height: 200px;
	object-fit: contain;
	display: block;
	animation: spin 1s ease-in-out infinite;
	transform-origin: 0% 0%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: -1;
	transform: translate(-50%, -50%);
}

@keyframes spin {
	0% {
		-webkit-transform: rotate(0deg) scale(1) translate(-50%, -50%);
		transform: rotate(0deg) scale(1) translate(-50%, -50%);
	}

	50% {
		-webkit-transform: rotate(180deg) scale(0.6) translate(-50%, -50%);
		transform: rotate(180deg) scale(0.6) translate(-50%, -50%);
	}

	100% {
		-webkit-transform: rotate(360deg) scale(1) translate(-50%, -50%);
		transform: rotate(360deg) scale(1) translate(-50%, -50%);
	}
}
</style>
