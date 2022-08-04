<template>
	<div class="about-block">
		<div class="about-block__img">
			<img :src="icon" :alt="title">
		</div>
		<div class="about-block__title" v-html="title"></div>
		<div class="about-block__desc" v-html="desc"></div>

		<div class="about-block__bottom">
			<svg class="about-block__bg" width="33" height="180" viewBox="0 0 33 180" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g class="about-block__bg-cube">
					<rect x="2.5" y="2.5" width="28" height="28" stroke="#7B7B7B" />
					<rect x="28" width="5" height="5" fill="#7B7B7B" />
					<rect width="5" height="5" fill="#7B7B7B" />
					<rect y="28" width="5" height="5" fill="#7B7B7B" />
					<rect x="28" y="28" width="5" height="5" fill="#7B7B7B" />
				</g>
				<rect x="12.5" y="171.5" width="8" height="8" stroke="#7B7B7B" />
				<line x1="16.5" y1="16" x2="16.5" y2="161" stroke="#7B7B7B" />
				<line class="about-block__bg-line" :style="`animation-delay: ${delay}`" x1="16.5" y1="42" x2="16.5"
					y2="72" stroke="url(#paint0_linear_244_8711)" stroke-width="3" />

				<defs>
					<linearGradient id="paint0_linear_244_8711" x1="16.9996" y1="48.9444" x2="16.9838" y2="62.7955"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#32B0DA" />
						<stop offset="0.5" stop-color="#D1FECE" />
						<stop offset="1" stop-color="#69F5DA" />
					</linearGradient>
				</defs>
			</svg>
		</div>

	</div>
</template>
<script>
import AnimIcon from "../blocks/AnimIcon.vue";

export default {
	name: "AboutBlock",
	props: ['title', 'desc', 'icon', 'delay'],
	data() {
		return {


		};
	},
	components: {}
}
</script>

<style lang="scss" scroped>
.about-block {
	display: flex;
	flex-direction: column;
	align-content: stretch;
	align-items: stretch;
	justify-content: space-between;

	&__img {
		margin-bottom: 15px;
	}

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		font: 900 24px/30px $titleFF;
		color: $white;
		text-transform: uppercase;
		position: relative;
		padding-top: 22px;
		margin-bottom: 13px;
		letter-spacing: 0.05em;

		span {
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}

		&:after {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: url('/images/token-block-title-bg.png') 50% 0 no-repeat;
			position: absolute;
			top: 0;
			left: 0;

		}
	}

	&__desc {
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 1.6;
		font-family: $baseFF;
		//max-width: 310px;
		color: #CECCD6;
		flex: 1 1 auto;
	}

	&__bg {
		margin: 0 auto;

		&-line {
			animation: 4s animAboutLine linear infinite;
			transform-origin: 50% 0;

		}

		&-cube {
			animation: 4s animAboutCube linear infinite;
			transform-origin: 50% 0;
		}
	}

	&__bottom {
		margin-top: 52px;
		display: flex;
		justify-content: center;
	}
}

@keyframes animAboutCube {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(12px);
	}

	100% {
		transform: translateY(0px);
	}
}

@keyframes animAboutLine {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(88px);
	}

	100% {
		transform: translateY(0px);
	}
}
</style>