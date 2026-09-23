<template>
	<section class="join-section" id="join-section">
		<div class="join-section__container container">
			<form class="join-section__form" action="#" @submit.prevent="checkFormEmail" method="post"
				novalidate="true">

				<div class="join-section__title">
					<span v-html="title"></span>
					<div class="join-section__title-shadow" v-html="title"></div>
				</div>

				<div class="join-section__input">
					<input type="email" name="email" id="email" v-model="orderEmail" class="form-control"
						:class="{ 'is-error': errors.email }" placeholder="E-mail" required>
					<div class="join-section__error" v-if="errors.email">{{ errors.email }}</div>
				</div>
				<div class="join-section__buttons">
					<!-- <button class="btn" type="submit">{{ btnText }}</button> -->
					<Btn :tag="'button'" :text="btnText"></Btn>
				</div>
			</form>

			<kinesis-container class="join-section__img" :active="animationSection">
				<Dotteds ref="dotteds" :count="12" :maxWidth="12"></Dotteds>

				<kinesis-element :strength="15" class="join-section__img-1">
					<Webp :src="img" :retina="true"></Webp>
					<!-- <img :src="img" alt=""> -->
				</kinesis-element>

				<kinesis-element :strength="45" class="join-section__img-2">
					<Webp src="/madbackpacks-dev/images/join-section-img-2.png"></Webp>
					<!-- <img src="/madbackpacks-dev/images/join-section-img-2.png" alt=""> -->
					<img class="join-section__img-2-circle" src="/madbackpacks-dev/images/join-section-img-2-circle.svg" alt=""></img>
				</kinesis-element>

				<kinesis-element :strength="30" class="join-section__img-3">
					<Webp src="/madbackpacks-dev/images/join-section-img-3.png"></Webp>
					<!-- <img src="/madbackpacks-dev/images/join-section-img-3.png" alt=""> -->
					<img class="join-section__img-3-circle" src="/madbackpacks-dev/images/join-section-img-3-circle.svg" alt="">
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
	name: "JoinSection",
	props: ['title', 'desc', 'btnText', 'img'],
	data() {
		return {
			errors: {
				email: null
			},
			orderEmail: null,
			animationSection: false,
		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds, Btn, Webp },
	methods: {
		popupShow(id) {
			this.popupActiveId = id;
			this.popupActive = true;
			this.$emit('openPopup', this.popupActiveId);
		},
		popupHide() {
			this.popupActive = false;
			this.popupActiveId = false;
			//this.$emit('closePopup', this.popupActive);
		},
		activeAnimation() {
			if (!navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
				this.animationSection = true;
				this.$refs.dotteds.activeAnimation();
			}
		},
		stopAnimation() {
			if (!navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
				this.animationSection = false;
				this.$refs.dotteds.stopAnimation();
			}
		},
		sendForm() {
			const self = this;
			//this.$axios.post('https://wepad-api.weway.dev/api/v1/users-mbp', {
			this.$axios.post('https://wepad-api.wepad.io/api/v1/users-mbp', {
				email: self.orderEmail,
			})
				.then(function (response) {
					console.log(response);
					self.popupShow('popup-succesfull');
				})
				.catch(function (error) {
					console.log(error);
					self.popupShow('popup-ooops');
				});

		},
		checkFormEmail: function (e) {
			this.errors = [];

			if (!this.orderEmail) {
				this.errors.email = 'Enter E-mail';
			} else if (!this.validEmail(this.orderEmail)) {
				this.errors.email = 'Not correct E-mail';
			}

			if (!this.errors.name && !this.errors.email && !this.errors.telegram) {
				this.sendForm();
				return true;
			}

			e.preventDefault();
		},
		validTelegram: function (telegram) {
			var re = /^@([a-zA-Z0-9_.]{1,30}$)/;
			return re.test(telegram);
		},
		validEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
	},
}
</script>

<style lang="scss" scroped>
.join-section {
	background: linear-gradient(92.49deg, #121244 1.75%, rgba(18, 18, 68, 0) 87.53%);
	padding: 70px 0 84px;
	position: relative;
	//overflow: hidden;

	@media screen and (max-width: $sm) {
		padding: 82px 0 76px;
	}

	@media screen and (max-width: $xs) {
		padding: 60px 0;
	}

	&:before {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/madbackpacks-dev/images/join-section-line-top.svg') 0 0 no-repeat;
		position: absolute;
		top: -2px;
		left: 0;
	}

	&__container {
		display: flex;

		@media screen and (max-width: $xs) {
			flex-wrap: wrap;
		}
	}

	&__form {
		flex: 0 0 50%;

		@media screen and (max-width: $sm) {
			flex: 0 0 340px;
			max-width: 340px;
		}

		@media screen and (max-width: $xs) {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}

	&__title {
		margin-bottom: 37px;
		padding-top: 38px;
		font: 700 48px/60px $titleFF;
		color: $white;
		background: url('/madbackpacks-dev/images/join-section-title-bg.svg') 0 0 no-repeat;
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
			//filter: blur(4px);
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

		@media screen and (max-width: $md) {
			font: 700 40px/50px $titleFF;

			&-shadow {
				font: 700 40px/50px $titleFF;

				//left: 15px;
			}
		}

		@media screen and (max-width: $sm) {
			font: 700 28px/28px $titleFF;
			padding-top: 28px;
			margin-bottom: 24px;

			&-shadow {
				display: none;
			}
		}

		@media screen and (max-width: $xs) {
			font: 700 28px/28px $titleFF;

			/* &-shadow {
				font: 700 28px/36px $titleFF;

				//transform: translate(10px, -11px);
			} */
		}
	}

	&__input {
		max-width: 464px;
		margin-bottom: 46px;

		@media screen and (max-width: $sm) {
			margin-bottom: 15px;
			max-width: 335px;
		}
	}

	&__error {
		color: #FF2977;
		font: 12px/32px $baseFF;
		margin-top: 5px;
	}

	&__buttons {
		position: relative;

		&:after {
			content: "";
			display: block;
			width: 313px;
			height: 24px;
			background: url('/madbackpacks-dev/images/join-section-buttons-bg.svg') 0 0/contain no-repeat;
			position: absolute;
			top: 31px;
			left: 300px;
		}

		@media screen and (max-width: $sm) {
			.btn {
				width: 100%;
				max-width: 335px;
			}

			&:after {
				display: none;
			}
		}

		@media screen and (max-width: $xs) {
			.btn {
				width: 100%;
				max-width: 202px;
				min-width: 202px;
			}

			&:after {
				display: block;
				top: 24px;
				width: 120px;
				height: 10px;
				left: 230px;
			}
		}
	}

	&__img {
		position: relative;
		z-index: 1;

		flex: 0 0 50%;
		max-width: 50%;

		@media screen and (max-width: $sm) {
			flex: 1 1 auto;
			max-width: 70%;
		}

		@media screen and (max-width: $xs) {
			flex: 0 0 100%;
			max-width: 100%;
			height: 186px;
		}

		&-1 {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			width: 62.4rem;
			height: 62.4rem;
			margin: -25.4rem 0 0 -34.6rem;

			@media screen and (max-width: $sm) {
				width: 370px;
				/* height: 144px; */
				height: auto;
				margin: -142px 0 0 -162px;
			}

			@media screen and (max-width: $xs) {
				width: 290px;
				/* height: 144px; */
				height: auto;
				top: 0;
				margin: 0px 0 0 -150px;
				transform: none !important;
			}
		}

		&-2 {
			position: absolute;
			top: 14%;
			left: 0%;
			z-index: 2;
			/* width: 202px;
			height: 202px; */
			width: 22.4rem;

			@media screen and (max-width: $md) {
				left: -12%;
			}

			@media screen and (max-width: $sm) {
				width: 109px;
				left: 4%;
			}

			@media screen and (max-width: $xs) {
				width: 109px;
				left: 0%;
				top: 33%;
				transform: none !important;
			}

			&-circle {
				position: absolute;
				top: 7%;
				left: 0;
				z-index: -1;
				width: 20rem;
				animation: 3s joinCircleScale2 linear infinite;
				transform-origin: 50% 50%;

				@media screen and (max-width: $sm) {
					width: 109px;
					top: 5px;
					left: -6px;
				}
			}
		}

		&-3 {
			position: absolute;
			top: -20%;
			left: 52%;
			z-index: 3;
			width: 25.3rem;
			/* width: 202px;
			height: 202px; */

			@media screen and (max-width: $sm) {
				width: 135px;
				left: 62%;
				top: -12%;
			}

			@media screen and (max-width: $xs) {
				width: 116px;
				left: 59%;
				top: 7%;
				transform: none !important;
			}

			&-circle {
				position: absolute;
				top: -10px;
				left: -6px;
				z-index: -1;
				max-width: none;
				width: 27.5rem;
				animation: 3s joinCircleScale linear infinite;
				transform-origin: 50% 50%;

				@media screen and (max-width: $sm) {
					width: 135px;
					left: 0;
					top: 0;
				}

				@media screen and (max-width: $xs) {
					width: 116px;
					left: 0;
					top: 0;
				}
			}
		}
	}

	&--2 & {
		&__img {
			&-1 {
				@media screen and (max-width: $xs) {
					margin-left: -156px;
				}
			}

			&-2 {
				top: -22%;
				left: 65%;

				@media screen and (max-width: $md) {
					top: -16%;
					left: 71%;
				}

				@media screen and (max-width: $xs) {
					top: 10%;
					left: 67%;
				}
			}

			&-3 {
				top: 41%;
				left: -12%;

				@media screen and (max-width: $md) {
					top: -11%;
					left: 0%;
					width: 100px;

					&-circle {
						width: 100%;
						top: 0;
						left: 0;
					}
				}

				@media screen and (max-width: $xs) {
					top: 18%;
					left: 0%;
					width: 82px;
				}
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