<template>
	<div class="roadmap-block">
		<div class="roadmap-block__circle" @click.prevent="acitveCurrent()">
			<div class="roadmap-block__circle-decor" :style="`transform: rotate(${rotate}deg)`"></div>
			<div class="roadmap-block__circle-wrap">
				<div class="roadmap-block__num">{{ num }}</div>
				<div class="roadmap-block__mounth">{{ mounth }}</div>
			</div>
		</div>
		<div class="roadmap-block__list">
			<svg class="roadmap-block__decore" width="33" height="109" viewBox="0 0 33 109" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g class="roadmap-block__decore-cube">
					<rect x="2.5" y="2.5" width="28" height="28" stroke="#32B0DA" />
					<rect x="28" width="5" height="5" fill="#32B0DA" />
					<rect width="5" height="5" fill="#32B0DA" />
					<rect y="28" width="5" height="5" fill="#32B0DA" />
					<rect x="28" y="28" width="5" height="5" fill="#32B0DA" />
				</g>
				<rect x="12.5" y="100.5" width="8" height="8" stroke="#32B0DA" />
				<line x1="16.5" y1="16" x2="16.5" y2="89" stroke="#32B0DA" />
				<line class="roadmap-block__decore-line" x1="16.5" y1="42" x2="16.5" y2="72"
					stroke="url(#paint0_linear_244_9537)" stroke-width="3" />

				<defs>
					<linearGradient id="paint0_linear_244_9537" x1="16.9996" y1="48.9444" x2="16.9838" y2="62.7955"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#32B0DA" />
						<stop offset="0.5" stop-color="#D1FECE" />
						<stop offset="1" stop-color="#69F5DA" />
					</linearGradient>
				</defs>
			</svg>

			<div class="roadmap-block__list-item" v-for="item in list">{{ item }}</div>
		</div>
	</div>
</template>
<script>

export default {
	name: "RoadmapBlock",
	props: ['num', 'mounth', 'list', 'rotate'],
	data() {
		return {
			//rotateCur
		};
	},
	created() {
		//this.rotateCur = this.rotate;
	},
	components: {},
	methods: {
		acitveCurrent() {
			this.$emit('activeBlock');
		}
	}
}
</script>

<style lang="scss" scroped>
.roadmap-block {
	cursor: pointer;

	&__decore {
		&-line {
			animation: 4s animRoadMapLine linear infinite;
			transform-origin: 50% 0;
			animation-delay: 2s;
		}

		&-cube {
			animation: 4s animAboutCube linear infinite;
			transform-origin: 50% 0;
		}
	}

	&__circle {
		position: relative;
		margin-bottom: 88px;

		&-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
		}

		&-decor {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			transition: all .5s;

			&:before {
				content: "";
				width: 346px;
				height: 346px;
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: url('/images/roadmap-block-circle.svg') 0 0/contain no-repeat;
				z-index: -1;
			}

			&:after {
				content: "";
				width: 305px;
				height: 340px;
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				transform-origin: 50% 50%;
				background: url('/images/roadmap-block-circle-decor.svg') 0 0/contain no-repeat;
				z-index: -1;
			}

		}

		&:after {
			content: "";
			width: 100%;
			padding-bottom: 100%;
			display: block;
		}
	}

	&__num {
		font: bold 48px/1 $titleFF;
		text-align: center;
		letter-spacing: 0.05em;
		background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	&__mounth {
		font: 700 24px/30px $titleFF;
		letter-spacing: 0.05em;
		text-align: center;
		color: #FFFFFF;
	}

	&__list {
		padding: 72px 0 0 25px;
		position: relative;
		font: bold 16px/35px $titleFF;
		letter-spacing: 0.05em;
		color: $white;

		&-item {
			position: relative;
			padding-left: 24px;

			&:before {
				content: "";
				display: block;
				width: 2px;
				height: 2px;
				border-radius: 50%;
				background: $white;
				position: absolute;
				top: 14px;
				left: 8px;
			}
		}
	}

	&__decore {
		position: absolute;
		top: -14px;
		left: 0;
	}
}

@keyframes animRoadMapLine {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(18px);
	}

	100% {
		transform: translateY(0px);
	}
}
</style>