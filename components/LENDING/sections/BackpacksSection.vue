<template>
	<section class="backpacks-section">

		<Dotteds class="backpacks-section__dotteds" :count="15"></Dotteds>

		<div class="backpacks-section__container container">
			<div class="backpacks-section__title" :title="title">{{ title }}</div>
			<div class="backpacks-section__desc">{{ desc }}</div>

			<div class="backpacks-section__row">
				<div class="backpacks-section__col">
					<div class="backpacks-section__img">
						<img src="/images/dino-section-info-title-bg.svg" alt="" class="backpacks-section__img-left">
						<img src="/images/dino-section-info-title-bg-reverse.svg" alt=""
							class="backpacks-section__img-right">
						</img>
						<img src="/images/backpacks-section-img.png" alt="">
						<img class="backpacks-section__img-shadow" src="/images/backpacks-section-img.png" alt="">
					</div>
				</div>
				<div class="backpacks-section__col">
					<VideoBlock class="backpacks-section__video" ref="VideoBlock"></VideoBlock>
				</div>
			</div>

			<div class="backpacks-section__params">
				<div class="backpacks-section__params-head">
					<div class="backpacks-section__params-title" v-for="index in paramsTitle">
						{{ index }}
					</div>
				</div>

				<div class="backpacks-section__params-row" v-for="param in params">
					<div class="backpacks-section__params-col">
						<div class="backpacks-section__param backpacks-section__param--label">{{ param.label }}</div>

						<svg class="backpacks-section__arrow" width="93" height="33" viewBox="0 0 93 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g class="backpacks-section__arrow-cube">
								<rect x="2.5" y="30.5" width="28" height="28" transform="rotate(-90 2.5 30.5)"
									stroke="#6ACCD6" />
								<rect y="5" width="5" height="5" transform="rotate(-90 0 5)" fill="#6ACCD6" />
								<rect y="33" width="5" height="5" transform="rotate(-90 0 33)" fill="#6ACCD6" />
								<rect x="28" y="33" width="5" height="5" transform="rotate(-90 28 33)" fill="#6ACCD6" />
								<rect x="28" y="5" width="5" height="5" transform="rotate(-90 28 5)" fill="#6ACCD6" />
							</g>
							<line x1="16" y1="16.5" x2="89" y2="16.5" stroke="#6ACCD6" />
							<path d="M93 16.5L81.75 22.9952L81.75 10.0048L93 16.5Z" fill="#6ACCD6" />
							<line class="backpacks-section__arrow-line" x1="42" y1="16.5" x2="55" y2="16.5"
								stroke="url(#paint0_linear_244_9038)" stroke-width="3" />

							<defs>
								<linearGradient id="paint0_linear_244_9038" x1="45.0093" y1="16.0004" x2="51.0114"
									y2="16.0034" gradientUnits="userSpaceOnUse">
									<stop stop-color="#32B0DA" />
									<stop offset="0.5" stop-color="#D1FECE" />
									<stop offset="1" stop-color="#69F5DA" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div class="backpacks-section__params-col">
						<div class="backpacks-section__param">{{ param.param1 }}</div>

						<svg class="backpacks-section__arrow" width="93" height="33" viewBox="0 0 93 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g class="backpacks-section__arrow-cube">
								<rect x="2.5" y="30.5" width="28" height="28" transform="rotate(-90 2.5 30.5)"
									stroke="#6ACCD6" />
								<rect y="5" width="5" height="5" transform="rotate(-90 0 5)" fill="#6ACCD6" />
								<rect y="33" width="5" height="5" transform="rotate(-90 0 33)" fill="#6ACCD6" />
								<rect x="28" y="33" width="5" height="5" transform="rotate(-90 28 33)" fill="#6ACCD6" />
								<rect x="28" y="5" width="5" height="5" transform="rotate(-90 28 5)" fill="#6ACCD6" />
							</g>
							<line x1="16" y1="16.5" x2="89" y2="16.5" stroke="#6ACCD6" />
							<path d="M93 16.5L81.75 22.9952L81.75 10.0048L93 16.5Z" fill="#6ACCD6" />
							<line class="backpacks-section__arrow-line" x1="42" y1="16.5" x2="55" y2="16.5"
								stroke="url(#paint0_linear_244_9038)" stroke-width="3" />

							<defs>
								<linearGradient id="paint0_linear_244_9038" x1="45.0093" y1="16.0004" x2="51.0114"
									y2="16.0034" gradientUnits="userSpaceOnUse">
									<stop stop-color="#32B0DA" />
									<stop offset="0.5" stop-color="#D1FECE" />
									<stop offset="1" stop-color="#69F5DA" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div class="backpacks-section__params-col">
						<div class="backpacks-section__param">{{ param.param2 }}</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';
import VideoBlock from '../blocks/VideoBlock.vue';

export default {
	name: "BackpacksSection",
	data() {
		return {
			title: '_Backpacks',
			desc: 'As for today, projects are limited to:',
			paramsTitle: ['Traits', 'Description', 'Upgrade'],
			params: [{
				label: 'Capacity',
				param1: 'Minigame backpack capacity in coins',
				param2: 'Boosts the capacity of the backpack in the minigame'
			}, {
				label: 'Accuracy',
				param1: 'Minigame-related value',
				param2: 'Makes minigames easier'
			}, {
				label: 'Durability',
				param1: "A backpack's maximum number of uses",
				param2: 'Increases backpack usage'
			}]
		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds, VideoBlock },
	methods: {
		playVideo() {
			this.$refs.VideoBlock.playVideo();
		}
	}
}
</script>

<style lang="scss" scroped>
.backpacks-section {
	padding: 75px 0 84px;
	position: relative;
	background: url('/images/backpacks-section-bg.png') 50% 100% no-repeat;

	&:before {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/backpacks-section-line-top.svg') 100% 0 no-repeat;
		position: absolute;
		top: -2px;
		left: 0;
	}

	&__container {
		position: relative;


	}

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 24px;
		margin-left: -52px;

		&:after {
			content: attr(title);
			text-align: center;
			letter-spacing: 0.05em;
			color: rgba($white, 0.1);
			filter: blur(4px);
			font: 700 48px/60px $titleFF;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transform: translate(33px, -27px);
		}
	}

	&__desc {
		text-align: center;
		margin-bottom: 45px;
		font: 500 20px/1.6 $baseFF;
		color: #CECCD6;
	}

	&__dotteds {
		z-index: 10;
	}

	&__row {
		display: flex;
	}

	&__col {
		flex: 0 0 50%;
		max-width: 50%;
		display: flex;
		justify-content: center;
	}

	&__img {
		margin: 0 auto;
		position: relative;
		z-index: 10;
		display: inline-block;
		left: 37px;

		&-left {
			position: absolute;
			top: 177px;
			right: calc(100% + 22px);
			height: 27px;
			object-fit: cover;
			object-position: 100% 0;
		}

		&-right {
			position: absolute;
			top: 257px;
			left: calc(100% - 85px);
		}

		&-shadow {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: none;
			opacity: 0.65;
			filter: blur(100px);
			z-index: -1;
		}
	}

	&__video {
		left: -18px;
	}

	&__params {
		margin: 16px 0 0 27px;
		max-width: 1315px;

		&-head {
			display: flex;
			margin-bottom: 39px;
		}

		&-title {
			font: 700 48px/60px $titleFF;
			letter-spacing: 0.05em;
			text-align: center;
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;

			flex: 0 0 33.33%;
			max-width: 33.33%;
		}

		&-row {
			display: flex;
			flex-wrap: nowrap;
			margin-bottom: 18px;
		}

		&-col {
			flex: 0 0 33.33%;
			max-width: 33.33%;
			padding: 0 26px;
			position: relative;
		}
	}

	&__arrow {
		position: absolute;
		top: 50%;
		left: calc(100% - 42px);
		transform: translateY(-50%);
		z-index: 3;

		&-line {
			animation: 2s animArrowLine linear infinite;
			transform-origin: 50% 0;
			animation-delay: 1s;

		}

		&-cube {
			animation: 2s animArrowCube linear infinite;
			transform-origin: 50% 0;
		}
	}

	&__param {
		background: url('/images/backpacks-section-param.svg') 0 0/100% 100% no-repeat;
		height: 62px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		font: 500 16px/1.2 $baseFF;
		color: $white;
		padding: 0 37px;

		&--label {
			background: url('/images/backpacks-section-param-pink.svg') 0 0/100% 100% no-repeat;
			text-transform: uppercase;
			font: bold 16px $titleFF;
		}
	}
}

@keyframes animArrowCube {
	0% {
		transform: translateX(0px);
	}

	50% {
		transform: translateX(12px);
	}

	100% {
		transform: translateX(0px);
	}
}

@keyframes animArrowLine {
	0% {
		transform: translateX(0px);
	}

	50% {
		transform: translateX(32px);
	}

	100% {
		transform: translateX(0px);
	}
}
</style>