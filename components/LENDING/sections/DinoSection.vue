<template>
	<section class="dino-section" id="dino-section">

		<Dotteds ref="dotteds" class="dino-section__dotteds" :count="15"></Dotteds>

		<div class="dino-section__container container">
			<div class="dino-section__title title-h1" :title="title">{{ title }}</div>

			<kinesis-container :active="animationSection" class="dino-section__img">

				<div class="dino-section__info-wrap">
					<div :class="`dino-section__info dino-section__info--${index + 1}`" v-for="(info, index) in infos">
						<div class="dino-section__info-title" v-bind:class="{ 'is-active': index === infoIndex }"
							@click.prevent="infoToggle(index)">
							<span>{{ info.title }}</span>
							<svg class="dino-section__info-arrow" v-bind:class="{ 'is-active': index === infoIndex }">
								<use xlink:href="/images/sprite-svg.svg#arrow-left"></use>
							</svg>
						</div>
						<div class="dino-section__info-text" v-bind:class="{ 'is-active': index === infoIndex }"
							v-html="info.text"></div>
					</div>
				</div>

				<div class="dino-section__img-wrap">
					<kinesis-element :strength="20" class="dino-section__img-1">
						<Webp src="/images/dino-section-img-1.png"></Webp>
						<!-- <img src="/images/dino-section-img-1.png" alt=""> -->
					</kinesis-element>

					<kinesis-element :strength="35" class="dino-section__img-2">
						<Webp src="/images/dino-section-img-2.png"></Webp>
						<!-- <img src="/images/dino-section-img-2.png" alt=""> -->
						<img class="dino-section__img-2-circle" src="/images/dino-section-img-2-circle.svg"
							alt=""></img>
					</kinesis-element>

					<kinesis-element :strength="55" class="dino-section__img-3">
						<Webp src="/images/dino-section-img-3.png"></Webp>
						<!-- <img src="/images/dino-section-img-3.png" alt=""> -->
						<img class="dino-section__img-3-circle" src="/images/dino-section-img-3-circle.svg" alt="">
					</kinesis-element>

					<kinesis-element :strength="40" class="dino-section__img-4">
						<Webp src="/images/dino-section-img-4.png"></Webp>
						<!-- <img src="/images/dino-section-img-4.png" alt=""> -->
						<img class="dino-section__img-4-circle" src="/images/dino-section-img-4-circle.svg" alt="">
					</kinesis-element>
				</div>
			</kinesis-container>
		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';
import Webp from '../blocks/Webp.vue';

export default {
	name: "DinoSection",
	data() {
		return {
			title: '_Dive into the experience',
			infoIndex: 0,
			animationSection: false,
			infos: [
				{
					title: 'Inventory management',
					text: '<p>Repair</p><p>Upgrade</p><p>Breed</p><p>Burn</p><p>Lend</p><p>Borrow</p>'
				}, {
					title: 'Guilds',
					text: '<p>Area control</p><p>Guild versus Guild</p><p>Guild perks</p><p>Leaderboard</p>'
				}, {
					title: 'PvE',
					text: '<p>Mini - games</p><p>Mad alleys</p><p>Brand challenges</p>'
				}, {
					title: 'PvP',
					text: '<p>Challenges</p><p>Tournaments</p><p>Leaderboard</p>'
				}
			]

		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds, Webp },
	methods: {
		activeAnimation() {
			this.animationSection = true;
			this.$refs.dotteds.activeAnimation();
		},
		stopAnimation() {
			this.animationSection = false;
			this.$refs.dotteds.stopAnimation();
		},
		infoToggle(index) {
			this.infoIndex = index;
		}
	}
}
</script>

<style lang="scss" scroped>
.dino-section {
	padding: 115px 0 84px;
	position: relative;

	@media screen and (max-width: $sm) {
		padding-top: 120px;
		padding-bottom: 0;
	}

	@media screen and (max-width: $xs) {
		padding-top: 92px;
	}

	&:before {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/dino-section-line-top.svg') 0 0 repeat-x;
		position: absolute;
		top: -2px;
		left: 0;
	}

	&__container {
		position: relative;

		&:before {
			content: "";
			width: 428px;
			height: 381px;
			display: block;
			position: absolute;
			top: 200px;
			left: 15%;
			z-index: -1;
			background: linear-gradient(119.99deg, rgba(18, 243, 216, 0.79) 21.9%, rgba(73, 255, 248, 0.19) 125.17%);
			filter: blur(154px);
			transform: rotate(177.74deg);
			border-radius: 50%;

			@media screen and (max-width: $sm) {
				width: 360px;
				height: 360px;
				top: 140px;
				left: 0;
				filter: blur(90px);
				opacity: 0.7;
			}

			@media screen and (max-width: $xs) {
				width: 288px;
				height: 288px;
				top: 170px;
				left: -140px;
				filter: blur(80px);
				opacity: 0.7;
			}
		}

		&:after {
			content: "";
			width: 540px;
			height: 540px;
			display: block;
			position: absolute;
			top: 300px;
			left: 50%;
			z-index: -1;
			transform: translate(-0%, 0%);
			background: linear-gradient(119.99deg, #FE37F1 21.9%, #12F3D8 125.17%);
			filter: blur(154px);
			border-radius: 50%;

			@media screen and (max-width: $sm) {
				width: 300px;
				height: 300px;
				top: 280px;
				left: auto;
				right: 0;
				filter: blur(90px);
				opacity: 0.7;
			}

			@media screen and (max-width: $xs) {
				width: 288px;
				height: 288px;
				top: 280px;
				left: auto;
				right: -140px;
				filter: blur(80px);
				opacity: 0.7;
			}
		}
	}

	&__title {
		text-align: center;
		color: $white;
		/* letter-spacing: 0.05em;
		font: 700 48px/60px $titleFF;
		position: relative; */
		margin-bottom: 24px;
		margin-left: -52px;

		@media screen and (max-width: $md) {
			flex: 0 0 100%;
			max-width: 100%;
			margin-bottom: 60px;
		}

		@media screen and (max-width: $sm) {
			max-width: 338px;
			margin: 0 auto 70px;
		}

		&:after {
			text-align: center;

			@media screen and (max-width: $sm) {
				max-width: 338px;
			}
		}
	}

	&__img {
		position: relative;
		z-index: 1;
		height: 820px;

		@media screen and (max-width: $md) {
			height: auto;
			display: flex;
			min-height: 546px;
			justify-content: space-between;
		}

		@media screen and (max-width: $xs) {
			flex-wrap: wrap;
		}

		&-wrap {
			@media screen and (max-width: $md) {
				flex: 0 0 calc(100% - 394px);
				order: 1;
				position: relative;
			}

			@media screen and (max-width: $sm) {
				flex: 0 0 calc(100% - 294px);
				order: 1;
			}

			@media screen and (max-width: $xs) {
				flex: 0 0 100%;
				order: 1;
				height: 360px;
			}
		}

		&-1 {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			width: 62.4rem;
			height: 62.4rem;
			margin: -30rem 0 0 -30rem;

			@media screen and (max-width: $sm) {
				width: 395px;
				margin: -252px 0 0 -186px;
				transform: none !important;
			}

			@media screen and (max-width: $xs) {
				width: 310px;
				margin: -190px 0 0 -148px;
			}
		}

		&-2 {
			position: absolute;
			top: -2%;
			right: 24%;
			z-index: 2;
			/* width: 202px;
			height: 202px; */
			width: 36.5rem;

			@media screen and (max-width: $md) {
				top: -16%;
				right: 14%;
			}

			@media screen and (max-width: $sm) {
				width: 160px;
				top: -3%;
				right: 8%;
				transform: none !important;
			}

			@media screen and (max-width: $xs) {
				top: -24%;
				right: -3%;
			}


			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				animation: 3s dinoCircleScale linear infinite;
				transform-origin: 0% 0%;
				width: 27.5rem;

				@media screen and (max-width: $sm) {
					width: 120px
				}
			}
		}

		&-3 {
			position: absolute;
			top: 31%;
			left: 20%;
			z-index: 3;
			width: 20.6rem;

			@media screen and (max-width: $md) {
				top: 26%;
				left: 4%;
			}

			@media screen and (max-width: $sm) {
				width: 105px;
				top: 24%;
				left: 2%;
				transform: none !important;
			}

			@media screen and (max-width: $xs) {
				top: 17%;
				left: -11%;
			}

			&-circle {
				position: absolute;
				top: -1rem;
				left: -1.5rem;
				max-width: none;
				animation: 3s dinoCircleScale2 linear infinite;
				transform-origin: 50% 50%;
				width: 22.3rem;

				@media screen and (max-width: $sm) {
					width: 115px;
					top: -5px;
					left: -5px;
				}
			}
		}

		&-4 {
			position: absolute;
			top: 58%;
			left: 40%;
			z-index: 3;
			width: 19.6rem;

			@media screen and (max-width: $md) {
				left: 30%;
			}

			@media screen and (max-width: $sm) {
				width: 68px;
				left: 24%;
				top: 63%;
				transform: none !important;
			}

			@media screen and (max-width: $xs) {
				width: 90px;
				left: 32%;
				top: 50%;
			}

			&-circle {
				position: absolute;
				top: -1rem;
				left: -1.5rem;
				max-width: none;
				animation: 3s dinoCircleScale3 linear infinite;
				transform-origin: 50% 50%;
				width: 22.6rem;

				@media screen and (max-width: $sm) {
					width: 76px;
					left: -5px;
					top: -4px;
				}

				@media screen and (max-width: $xs) {
					width: 90px;
					left: 0;
					top: 0;
				}
			}
		}
	}

	&__info {
		position: absolute;

		@media screen and (max-width: $md) {
			position: static;
		}

		&-wrap {
			@media screen and (max-width: $md) {
				flex: 0 0 394px;
				max-width: 394px;
				order: 2;
			}

			@media screen and (max-width: $sm) {
				flex: 0 0 268px;
				max-width: 268px;
				order: 2;
			}

			@media screen and (max-width: $xs) {
				flex: 0 0 100%;
				max-width: 100%;
				order: 2;
			}
		}

		&-arrow {
			display: none;

			@media screen and (max-width: $md) {
				display: block;
				width: 12px;
				height: 12px;
				fill: rgba(#12F3D8, 0.6);
				transform: rotate(-90deg);
				margin-right: 24px;
				transition: all 0.3s;

				&.is-active {
					transform: rotate(90deg);
				}
			}

			@media screen and (max-width: $sm) {
				margin-right: 24px;
			}
		}

		&-title {
			letter-spacing: 0.05em;
			font: bold 32px/40px $titleFF;
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
			position: relative;
			padding-bottom: 16px;
			margin-bottom: 16px;

			&:after {
				content: "";
				display: block;
				height: 27px;
				left: 0;
				position: absolute;
				top: 100%;
				right: -100px;
				background: url('/images/dino-section-info-title-bg.svg') 100% 0/auto 100% no-repeat;
			}

			@media screen and (max-width: $md) {
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				align-items: center;
				font: bold 22px/24px $titleFF;
				padding-bottom: 16px;
				margin-bottom: 40px;
				cursor: pointer;

				&:after {
					height: 24px;
					right: 0;
					background-size: 100% 100%;
					background-position: 0 0;
				}

				&.is-active {
					margin-bottom: 20px;
				}
			}

			@media screen and (max-width: $sm) {
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				align-items: center;
				font: bold 22px/24px $titleFF;
				padding-bottom: 16px;
				margin-bottom: 35px;
				cursor: pointer;

				&:after {
					height: 16px;
					right: 0;
					background-size: 100% 100%;
					background-position: 0 0;
				}

				&.is-active {
					padding-bottom: 2px;
					margin-bottom: 19px;
				}
			}

			@media screen and (max-width: $xs) {
				&.is-active {
					padding-bottom: 22px;
				}
			}
		}

		&-text {
			font: 900 20px/35px $titleFF;
			color: $white;
			letter-spacing: 0.05em;

			p {
				margin: 0;
			}

			@media screen and (max-width: $md) {
				max-height: 0;
				overflow: hidden;
				//transition: all 0.4s;
				font: 900 18px/1.7 $titleFF;

				&.is-active {
					display: block;
					max-height: 1000px;
					margin-bottom: 40px;
				}
			}

			@media screen and (max-width: $sm) {
				font: 900 15px/1.7 $titleFF;

				&.is-active {
					margin-bottom: 28px;
				}
			}

			@media screen and (max-width: $xs) {
				font: 900 14px/1.7 $titleFF;

				&.is-active {
					margin-bottom: 28px;
				}
			}
		}

		&--1 {
			top: 140px;
			left: 43px;
		}

		&--2 {
			top: 487px;
			left: 128px;
		}

		&--3 {
			top: 163px;
			right: 82px;
		}

		&--4 {
			top: 443px;
			right: 158px;
		}

		&--3 &,
		&--4 & {
			&-title {
				&:after {
					background: url('/images/dino-section-info-title-bg-reverse.svg') 0% 0/auto 100% no-repeat;
					left: -135px;
					right: 0;

					@media screen and (max-width: $md) {
						background: url('/images/dino-section-info-title-bg.svg') 0% 0/100% 100% no-repeat;
						left: 0;
					}
				}
			}
		}
	}

	&__dotteds {
		z-index: 10;
	}
}

@keyframes dinoCircleScale {
	0% {
		transform: scale(1) rotate(0deg) translate(-50%, -50%);
	}

	25% {
		transform: scale(1.05) rotate(90deg) translate(-50%, -50%);
	}

	50% {
		transform: scale(1) rotate(180deg) translate(-50%, -50%);
	}

	75% {
		transform: scale(0.9) rotate(270deg) translate(-50%, -50%);
	}

	100% {
		transform: scale(1) rotate(360deg) translate(-50%, -50%);
	}
}

@keyframes dinoCircleScale2 {
	0% {
		transform: scale(1);
	}

	25% {
		transform: scale(1.05);
	}

	50% {
		transform: scale(1);
	}

	75% {
		transform: scale(0.9);
	}

	100% {
		transform: scale(1);
	}
}

@keyframes dinoCircleScale3 {
	0% {
		transform: scale(1) rotate(0deg);
	}

	25% {
		transform: scale(1.05) rotate(90deg);
	}

	50% {
		transform: scale(1) rotate(180deg);
	}

	75% {
		transform: scale(0.9) rotate(270deg);
	}

	100% {
		transform: scale(1) rotate(360deg);
	}
}
</style>