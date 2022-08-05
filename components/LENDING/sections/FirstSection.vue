<template>
	<section class="first-section">

		<Dotteds :count="15" color="#94FFEC"></Dotteds>

		<div class="first-section__container container">
			<div class="first-section__wrapper">
				<div class="first-section__title" v-html="title"></div>
				<div class="first-section__desc" v-html="desc"></div>
				<div class="first-section__buttons">
					<a href="#" @click.prevent="openPopup('popup-join')" class="btn"><span>Join IDO</span></a>
					<a href="#" @click.prevent="openPopup('popup-telegram')" class="btn btn--soc">
						<svg>
							<use xlink:href="/images/sprite-svg.svg#telegram"></use>
						</svg>
					</a>
				</div>
			</div>

			<kinesis-container class="first-section__img">

				<kinesis-element :strength="65" class="first-section__img-1">
					<img src="images/first-section-img-1.png" alt="">
					<img class="first-section__img-1-shadow" src="images/first-section-img-1.png" alt="">
				</kinesis-element>

				<kinesis-element :strength="45" class="first-section__img-2">
					<img src="images/first-section-img-2.png" alt="">
					<img class="first-section__img-2-shadow" src="images/first-section-img-2.png" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="85" class="first-section__img-3">
					<img src="images/first-section-img-3.png" alt="">
					<img class="first-section__img-3-circle" src="images/first-section-img-3-circle.svg" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="65" class="first-section__img-4">
					<img src="images/first-section-img-4.png" alt="">
					<img class="first-section__img-4-circle" src="images/first-section-img-4-circle.svg" alt="">
				</kinesis-element>

				<kinesis-element :strength="45" class="first-section__img-5">
					<img src="images/first-section-img-5.png" alt="">
				</kinesis-element>

				<kinesis-element :strength="25" class="first-section__img-6">
					<img src="images/first-section-img-6.png" alt="">
				</kinesis-element>
			</kinesis-container>

		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "FirstSection",
	data() {
		return {
			title: '<span class="first-section__title--blue">_MADBACKPACKS</span> <br>is the first Find-to-Earn <br>game <span class="first-section__title--red">by WeWay</span>',
			desc: 'Explore a whole new world of treasure hunting',
		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds },
	methods: {
		openPopup(id) {
			this.$emit('openPopup', id);
		}
	}
}
</script>

<style lang="scss">
.first-section {
	min-height: 100vh;
	position: relative;
	z-index: 1;
	background: url('/images/first-section-bg.jpg') 50% 100%/cover no-repeat;

	&__title {
		padding-top: 47px;
		position: relative;
		color: $white;
		font: bold 42px/53px $titleFF;
		letter-spacing: 0.05em;
		margin-bottom: 38px;

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
		font: 24px $baseFF;
		letter-spacing: 0.05em;
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
	}

	&__container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		align-content: stretch;
	}

	&__img {
		position: absolute;
		top: 0;
		right: -73px;
		bottom: 0;
		width: 60%;

		&-1 {
			position: absolute;
			bottom: 16%;
			left: 5%;
			z-index: 6;

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
		}

		&-6 {
			position: absolute;
			top: 16%;
			left: -16%;
			z-index: 1;
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