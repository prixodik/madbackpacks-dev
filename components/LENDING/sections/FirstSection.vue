<template>
	<section class="first-section">

		<Dotteds ref="dotteds" :count="15" color="#94FFEC"></Dotteds>

		<div class="first-section__container container">
			<div class="first-section__wrapper">
				<div class="first-section__title" v-html="title"></div>
				<div class="first-section__desc" v-html="desc"></div>
				<div class="first-section__buttons">
					<Btn class="btn--icon" tag="a" href="https://t.me/MadBackpacks" target="_blank">
						<svg class="btn__icon">
							<use xlink:href="/images/sprite-svg.svg#telegram"></use>
						</svg>
						<span>Join community</span>
					</Btn>

					<!-- <Btn :tag="'a'" :href="'#'" class="btn--soc" @click.prevent.native="openPopup('popup-telegram')">
						<svg>
							<use xlink:href="/images/sprite-svg.svg#telegram"></use>
						</svg>
					</Btn> -->

					<!-- <a href="#" @click.prevent="openPopup('popup-telegram')" class="btn btn--soc">
						<svg>
							<use xlink:href="/images/sprite-svg.svg#telegram"></use>
						</svg>
					</a> -->
				</div>
			</div>

			<kinesis-container :active="animationSection" class="first-section__img">

				<kinesis-element :strength="65" class="first-section__img-1">
					<Webp src="images/first-section-img-1.png"></Webp>
					<Webp class="first-section__img-1-shadow" src="images/first-section-img-1.png"></Webp>
					<!-- <img src="images/first-section-img-1.png" alt="">
					<img class="first-section__img-1-shadow" src="images/first-section-img-1.png" alt=""> -->
				</kinesis-element>

				<kinesis-element :strength="45" class="first-section__img-2">
					<Webp src="images/first-section-img-2.png"></Webp>
					<Webp class="first-section__img-2-shadow" src="images/first-section-img-2.png"></Webp>
					<!-- <img src="images/first-section-img-2.png" alt="">
					<img class="first-section__img-2-shadow" src="images/first-section-img-2.png" alt=""></img> -->
				</kinesis-element>

				<kinesis-element :strength="85" class="first-section__img-3">
					<Webp src="images/first-section-img-3.png"></Webp>
					<!-- <img src="images/first-section-img-3.png" alt=""> -->
					<img class="first-section__img-3-circle" src="images/first-section-img-3-circle.svg" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="65" class="first-section__img-4">
					<Webp src="images/first-section-img-4.png"></Webp>
					<!-- <img src="images/first-section-img-4.png" alt=""> -->
					<img class="first-section__img-4-circle" src="images/first-section-img-4-circle.svg" alt="">
				</kinesis-element>

				<kinesis-element :strength="45" class="first-section__img-5">
					<Webp src="images/first-section-img-5.png"></Webp>
					<!-- <img src="images/first-section-img-5.png" alt=""> -->
				</kinesis-element>

				<kinesis-element :strength="25" class="first-section__img-6">
					<Webp src="images/first-section-img-6.png"></Webp>
					<!-- <img src="images/first-section-img-6.png" alt=""> -->
				</kinesis-element>
			</kinesis-container>

		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';
import Btn from '../blocks/Btn.vue';
import Webp from '../blocks/Webp.vue';

export default {
	name: "FirstSection",
	data() {
		return {
			title: '<span class="first-section__title--blue">_MADBACKPACKS</span> <br>is the first Find-to-Earn <br>game <span class="first-section__title--red">by WeWay</span>',
			desc: 'Explore a whole new world of treasure hunting',
			animationSection: false,
		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds, Btn, Webp },
	methods: {
		activeAnimation() {
			this.animationSection = true;
			this.$refs.dotteds.activeAnimation();
		},
		stopAnimation() {
			this.animationSection = false;
			this.$refs.dotteds.stopAnimation();
		},
		openPopup(id) {
			console.log(1);
			this.$emit('openPopup', id);
		}
	}
}
</script>

<style lang="scss">
.first-section {
	min-height: 100vh;
	position: relative;
	overflow: hidden;
	z-index: 1;
	background: url('/images/first-section-bg.jpg') 50% 100%/cover no-repeat;

	@media screen and (max-width: $md) {
		min-height: 810px;
	}

	@media screen and (max-width: $sm) {
		min-height: 610px;
	}

	@media screen and (max-width: $xs) {
		background-size: auto 585px;
	}

	&__title {
		padding-top: 47px;
		position: relative;
		color: $white;
		font: bold 42px/53px $titleFF;
		letter-spacing: 0.05em;
		margin-bottom: 38px;

		@media screen and (max-width: $md) {
			font-size: 34px;
			line-height: 1.4;
		}

		@media screen and (max-width: $sm) {
			font-size: 24px;
			margin-bottom: 32px;
		}

		@media screen and (max-width: $xs) {
			font-size: 22px;
			margin-bottom: 16px;
			padding-top: 33px;
			letter-spacing: 0.05em;
			line-height: 1.2;
		}

		@media screen and (max-width: $xxs) {
			font-size: 20px;
			letter-spacing: 1px;
		}

		&:before {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: url('/images/first-section-title-bg.svg') 0 0 no-repeat;
			position: absolute;
			top: 0;
			left: 0;
		}

		&--blue {
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
			text-transform: uppercase;
			font-size: 48px;
			line-height: 60px;

			@media screen and (max-width: $md) {
				font-size: 42px;
				line-height: 1.4;
			}

			@media screen and (max-width: $sm) {
				font-size: 32px;
			}

			@media screen and (max-width: $xs) {
				font-size: 28px;
				letter-spacing: 0.05em;
			}

			@media screen and (max-width: $xxs) {
				font-size: 26px;
				letter-spacing: 1px;
			}
		}

		&--red {
			background: linear-gradient(92.28deg, #F74083 5.11%, #FF37F8 104.85%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}
	}

	&__desc {
		color: $white;
		font: 24px/1.35 $baseFF;
		letter-spacing: 0.05em;

		@media screen and (max-width: $md) {
			font-size: 20px;
		}

		@media screen and (max-width: $sm) {
			font-size: 16px;
			max-width: 240px;
		}

		@media screen and (max-width: $xs) {
			font-size: 14px;
			max-width: 100%;
		}
	}

	&__buttons {
		margin-top: 65px;
		display: flex;

		.btn {
			margin-right: 20px;

			&:last-child {
				margin-right: 0;
			}
		}

		@media screen and (max-width: $sm) {
			margin-top: 31px;

			.btn {
				margin-right: 16px;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		@media screen and (max-width: $xs) {
			margin-top: 27px;

			.btn {
				margin-right: 12px;
				flex: 1 1 auto;
				min-width: 0;

				&.btn--soc {
					flex: 0 0 48px;
				}

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}

	&__container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		align-content: stretch;

		@media screen and (max-width: $md) {
			min-height: 810px;
		}

		@media screen and (max-width: $sm) {
			min-height: 610px;
			padding-bottom: 28px;
		}

		@media screen and (max-width: $xs) {
			flex-wrap: wrap;
			flex-direction: row;
			padding-top: 88px;
			padding-bottom: 90px;
		}
	}

	&__img {
		position: absolute;
		top: 0;
		right: -73px;
		bottom: 0;
		width: 60%;
		//width: 114.1rem;

		@media screen and (max-width: $xlg) {
			right: -140px;
		}

		@media screen and (max-width: $lg) {
			right: -200px;
			width: 70%;
		}

		@media screen and (max-width: $md) {
			right: -150px;
			width: 75%;
		}

		@media screen and (max-width: $sm) {
			right: -90px;
			width: 75%;
		}

		@media screen and (max-width: $xs) {
			position: relative;
			right: 0;
			width: 100%;
			flex: 0 0 100%;
			height: 380px;
		}

		&-1 {
			position: absolute;
			bottom: 16%;
			left: 5%;
			z-index: 6;
			width: 38.4rem;

			@media screen and (max-width: $sm) {
				width: 29.5rem;
				bottom: 27.5%;
				left: 9%;
			}

			@media screen and (max-width: $xs) {
				width: 19rem;
				/* bottom: 15.5%;
				left: -15%; */
				bottom: 5.5%;
				left: 5%;
				transform: none !important;
			}

			&-shadow {
				filter: blur(200px);
				position: absolute;
				top: -50px;
				left: 100px;
				z-index: -1;
			}
		}

		&-2 {
			position: absolute;
			top: 38%;
			left: 45%;
			z-index: 5;
			margin: -220px 0 0 -220px;
			width: 59.5rem;

			@media screen and (max-width: $xlg) {
				left: 55%;
			}

			@media screen and (max-width: $sm) {
				width: 35.5rem;
				left: 76%;
				top: 42.5%;
			}

			@media screen and (max-width: $xs) {
				width: 26rem;
				/* left: 88%;
				top: 57.5%; */

				left: 95%;
				top: 65.5%;
			}

			&-shadow {
				filter: blur(200px);
				position: absolute;
				top: -50px;
				left: 100px;
				z-index: -1;
			}
		}

		&-3 {
			position: absolute;
			top: 16%;
			left: 11%;
			z-index: 4;
			width: 20.6rem;

			@media screen and (max-width: $sm) {
				width: 11rem;
				top: 4%;
				left: 19%;
			}

			@media screen and (max-width: $xs) {
				width: 9rem;
				top: -10%;
				left: -5%;
			}

			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: -1;
				transform: translate(-50%, -50%);
				/* width: 100%;
				height: 100%; */
				animation: 3s circleScale2 linear infinite;
				transform-origin: 0% 0%;
			}
		}

		&-4 {
			position: absolute;
			bottom: 12%;
			right: 29%;
			z-index: 3;
			width: 36.6rem;

			@media screen and (max-width: $sm) {
				width: 20rem;
				bottom: 36.5%;
				right: 19%;
			}

			@media screen and (max-width: $xs) {
				width: 13rem;
				bottom: 25.5%;
				right: 18%;
			}

			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: -1;
				transform: translate(-50%, -50%);
				/* width: 100%;
				height: 100%; */
				animation: 3s circleScale linear infinite;
				transform-origin: 0% 0%;
			}
		}

		&-5 {
			position: absolute;
			top: 26%;
			left: 31%;
			z-index: 2;

			@media screen and (max-width: $sm) {
				width: 10rem;
				top: 17.5%;
				left: 41%;
			}

			@media screen and (max-width: $xs) {
				width: 7rem;
				top: 12.5%;
				left: 31%;
			}
		}

		&-6 {
			position: absolute;
			top: 16%;
			left: -16%;
			z-index: 1;

			@media screen and (max-width: $sm) {
				left: 5%;
			}

			@media screen and (max-width: $xs) {
				display: none;
			}
		}
	}
}

@keyframes circleScale {
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

@keyframes circleScale2 {
	0% {
		transform: scale(1) rotate(0deg) translate(-50%, -50%);
	}

	25% {
		transform: scale(1.05) rotate(0deg) translate(-50%, -50%);
	}

	50% {
		transform: scale(1) rotate(0deg) translate(-50%, -50%);
	}

	75% {
		transform: scale(0.9) rotate(0deg) translate(-50%, -50%);
	}

	100% {
		transform: scale(1) rotate(0deg) translate(-50%, -50%);
	}
}
</style>