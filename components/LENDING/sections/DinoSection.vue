<template>
	<section class="dino-section">

		<Dotteds class="dino-section__dotteds" :count="15"></Dotteds>

		<div class="dino-section__container container">
			<div class="dino-section__title" :title="title">{{ title }}</div>

			<kinesis-container class="dino-section__img">

				<div :class="`dino-section__info dino-section__info--${index + 1}`" v-for="(info, index) in infos">
					<div class="dino-section__info-title">{{ info.title }}</div>
					<div class="dino-section__info-text" v-html="info.text"></div>
				</div>

				<kinesis-element :strength="20" type="depth" class="dino-section__img-1">
					<img src="images/dino-section-img-1.png" alt="">
				</kinesis-element>

				<kinesis-element :strength="25" class="dino-section__img-2">
					<img src="images/dino-section-img-2.png" alt="">
					<img class="dino-section__img-2-circle" src="images/dino-section-img-2-circle.svg" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="15" class="dino-section__img-3">
					<img src="images/dino-section-img-3.png" alt="">
					<img class="dino-section__img-3-circle" src="images/dino-section-img-3-circle.svg" alt="">
				</kinesis-element>

				<kinesis-element :strength="10" class="dino-section__img-4">
					<img src="images/dino-section-img-4.png" alt="">
					<img class="dino-section__img-4-circle" src="images/dino-section-img-4-circle.svg" alt="">
				</kinesis-element>

			</kinesis-container>
		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "DinoSection",
	data() {
		return {
			title: '_Dive into the experience',
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
	components: { KinesisContainer, KinesisElement, Dotteds }
}
</script>

<style lang="scss" scroped>
.dino-section {
	padding: 115px 0 84px;
	position: relative;

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
		}
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
			transform: translate(22px, -27px);
		}
	}

	&__img {
		position: relative;
		z-index: 1;
		height: 820px;

		&-1 {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			width: 624px;
			height: 624px;
			margin: -300px 0 0 -300px;
		}

		&-2 {
			position: absolute;
			top: -2%;
			right: 24%;
			z-index: 2;
			/* width: 202px;
			height: 202px; */

			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				animation: 3s dinoCircleScale linear infinite;
				transform-origin: 0% 0%;
			}
		}

		&-3 {
			position: absolute;
			top: 31%;
			left: 20%;
			z-index: 3;
			/* width: 202px;
			height: 202px; */

			&-circle {
				position: absolute;
				top: -10px;
				left: -15px;
				max-width: none;
				animation: 3s dinoCircleScale2 linear infinite;
				transform-origin: 50% 50%;
			}
		}

		&-4 {
			position: absolute;
			top: 58%;
			left: 40%;
			z-index: 3;
			/* width: 202px;
			height: 202px; */

			&-circle {
				position: absolute;
				top: -10px;
				left: -15px;
				max-width: none;
				animation: 3s dinoCircleScale3 linear infinite;
				transform-origin: 50% 50%;
			}
		}
	}

	&__info {
		position: absolute;

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
		}

		&-text {
			font: 900 20px/35px $titleFF;
			color: $white;
			letter-spacing: 0.05em;

			p {
				margin: 0;
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