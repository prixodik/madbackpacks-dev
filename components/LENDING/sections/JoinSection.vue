<template>
	<section class="join-section">
		<div class="join-section__container container">
			<form class="join-section__form" action="#">

				<div class="join-section__title">
					<span v-html="title"></span>
					<div class="join-section__title-shadow" v-html="title"></div>
				</div>

				<div class="join-section__input">
					<input type="text" class="form-control" placeholder="Telregram @username">
				</div>
				<div class="join-section__buttons">
					<button class="btn" type="submit">{{ btnText }}</button>
				</div>
			</form>

			<kinesis-container class="join-section__img">
				<Dotteds :count="12" :maxWidth="12"></Dotteds>

				<kinesis-element :strength="15" type="depth" class="join-section__img-1">
					<img :src="img" alt="">
				</kinesis-element>

				<kinesis-element :strength="25" class="join-section__img-2">
					<img src="images/join-section-img-2.png" alt="">
					<img class="join-section__img-2-circle" src="images/join-section-img-2-circle.svg" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="15" class="join-section__img-3">
					<img src="images/join-section-img-3.png" alt="">
					<img class="join-section__img-3-circle" src="images/join-section-img-3-circle.svg" alt="">
				</kinesis-element>

			</kinesis-container>
		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "JoinSection",
	props: ['title', 'desc', 'btnText', 'img'],
	data() {
		return {
			/* title: 'Join our newsletter <br>to stay in the loop!',
			desc: '', */

		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds }
}
</script>

<style lang="scss" scroped>
.join-section {
	background: linear-gradient(92.49deg, #121244 1.75%, rgba(18, 18, 68, 0) 87.53%);
	padding: 70px 0 84px;
	position: relative;

	&:before {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/join-section-line-top.svg') 0 0 no-repeat;
		position: absolute;
		top: -2px;
		left: 0;
	}

	&__container {
		display: flex;
	}

	&__form {
		flex: 0 0 50%;
	}

	&__title {
		margin-bottom: 37px;
		padding-top: 38px;
		font: 700 48px/60px $titleFF;
		color: $white;
		background: url('/images/join-section-title-bg.svg') 0 0 no-repeat;
		position: relative;
		max-width: 733px;
		letter-spacing: 0.05em;

		span>span {
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}

		&-shadow {
			content: attr(title);
			letter-spacing: 0.05em;
			filter: blur(4px);
			font: 700 48px/60px $titleFF;
			position: absolute;
			top: 38px;
			left: 40px;
			width: 100%;
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
			opacity: 0.1;
		}
	}

	&__input {
		max-width: 464px;
		margin-bottom: 46px;
	}

	&__buttons {
		position: relative;

		&:after {
			content: "";
			display: block;
			width: 313px;
			height: 24px;
			background: url('/images/join-section-buttons-bg.svg') 0 0/contain no-repeat;
			position: absolute;
			top: 31px;
			left: 300px;
		}
	}

	&__img {
		position: relative;
		z-index: 1;

		flex: 0 0 50%;
		max-width: 50%;

		&-1 {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			width: 624px;
			height: 624px;
			margin: -254px 0 0 -346px;
		}

		&-2 {
			position: absolute;
			top: 14%;
			left: 0%;
			z-index: 2;
			/* width: 202px;
			height: 202px; */

			&-circle {
				position: absolute;
				top: 7%;
				left: 0;
				z-index: -1;
				animation: 3s joinCircleScale2 linear infinite;
				transform-origin: 50% 50%;
			}
		}

		&-3 {
			position: absolute;
			top: -20%;
			left: 52%;
			z-index: 3;
			/* width: 202px;
			height: 202px; */

			&-circle {
				position: absolute;
				top: -10px;
				left: -6px;
				z-index: -1;
				max-width: none;
				animation: 3s joinCircleScale linear infinite;
				transform-origin: 50% 50%;
			}
		}
	}

	&--2 & {
		&__img {
			&-2 {
				top: -22%;
				left: 65%;
			}

			&-3 {
				top: 41%;
				left: -12%;
			}
		}
	}
}

@keyframes joinCircleScale {
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

@keyframes joinCircleScale2 {
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
</style>