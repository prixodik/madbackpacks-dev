<template>
	<div class="dotteds">
		<div class="dotteds__item" v-for="item in items"
			:style="`top: ${item.top}; left: ${item.left}; width: ${item.width}; height: ${item.width}; background: ${color}; opacity: ${item.blur}`">
			<!-- filter: blur(${item.blur}px); -->
		</div>
	</div>
</template>
<script>

export default {
	name: "Dotteds",
	props: {
		/* active: {
			type: Boolean,
			default: "false"
		}, */
		count: {
			type: Number,
			default: "15"
		},
		color: {
			type: String,
			default: '#94FFEC'
		},
		maxWidth: {
			type: Number,
			default: 20
		},
	},
	data() {
		return {
			items: [],
			timer: null,
		};
	},
	created() {

		for (let j = 1; j <= this.count; j++) {
			this.items.push({
				top: Math.ceil(Math.random() * 100) + '%',
				left: Math.ceil(Math.random() * 100) + '%',
				width: Math.ceil(Math.random() * this.maxWidth) + 'px',
				//blur: Math.ceil(Math.random() * 5),
				blur: Math.random() * 10 * 0.1,
			});
		}



		/* setTimeout(() => {
			this.setParams();
		}, 100); */

	},
	mounted() {

		/* this.timer = setInterval(() => {
			this.setParams();
		}, 30000); */
	},
	methods: {
		activeAnimation() {
			/* setTimeout(() => {
				this.setParams();
			}, 100);
			this.timer = setInterval(() => {
				this.setParams();
			}, 30000); */

			this.setParams();

			this.timer = setTimeout(() => {
				this.activeAnimation();
			}, 30000);
		},
		stopAnimation() {
			//clearInterval(this.timer);
			clearTimeout(this.timer);
		},
		setParams() {
			//console.log(Math.floor(Math.random() * 5));
			this.items.forEach((item) => {
				item.top = Math.ceil(Math.random() * 100) + '%';
				item.left = Math.ceil(Math.random() * 100) + '%';
				//item.width = Math.ceil(Math.random() * this.maxWidth) + 'px';
				//item.blur = Math.floor(Math.random() * 5);
				item.blur = Math.random() * 10 * 0.1;
			});

		}
	}
}
</script>

<style lang="scss">
.dotteds {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	pointer-events: none;

	&__item {
		display: block;
		/* width: 20px;
		height: 20px; */
		/* background: #94FFEC;
		filter: blur(2px); */
		border-radius: 2px;
		position: absolute;
		transition: all 60s linear;
	}
}
</style>