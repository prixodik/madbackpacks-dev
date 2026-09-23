<template>
	<div class="popup" v-bind:class="{ 'is-active': active }">

		<Dotteds :count="15"></Dotteds>

		<!-- <div class="popup__overflow" @click.prevent="hideActive()"></div> -->

		<a href="#" class="popup__close" @click.prevent="hideActive()">
			<span>close</span>
			<svg>
				<use xlink:href="/madbackpacks-dev/images/sprite-svg.svg#close"></use>
			</svg>
		</a>

		<div class="popup__wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import Dotteds from './Dotteds.vue';

export default {
	name: "Popup",
	props: [
		"isActive",
		"showId",
	],
	data() {
		return {
			active: this.isActive,
			id: this.showId,
		};
	},
	created() {
		/* this.showActive(); */
	},
	updated() {
		/* console.log(this.$el.id === this.showId); */
		/* console.log(this.showId); */
		if (this.$el.id === this.showId && this.isActive === true) {
			this.active = true;
			this.id = this.showId;
		}
		else {
			this.active = false;
			this.id = false;
		}
		/* this.active = this.isActive; */
	},
	computed: {
		getActive() {
			return this.isActive;
		},
		/* getActive() {
		  return this.isActive;
		}, */
	},
	methods: {
		showActive() {
			this.active = true;
			this.$emit("openPopup", this.active);
		},
		hideActive() {
			this.active = false;
			this.$emit("closePopup", this.active);
		},
		toggleActive() {
			/* this.isActive = this.isActive === false ? true : false; */
		},
	},
	components: { Dotteds }
};
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: -10000px;
	width: 100%;
	z-index: 9999;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	padding: 70px 30px;
	overflow-y: auto;
	//@include time(0.4s, opacity);
	transition: left 0s ease 0.5s, opacity 0.1s ease;
	background: url('/madbackpacks-dev/images/popup-bg.webp') 50% 50%/cover no-repeat #090923;

	/* &__overflow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		display: block;
		background: rgba(#999999, .8);
	} */

	&__wrapper {
		position: relative;
		width: 100%;
		padding: 0;
		max-width: 464px;
		margin: auto;
		z-index: 1;
		transform: translateY(150px) rotateX(-85deg);
		opacity: 0;
		transition: all .4s;
		perspective: 1000px;
		perspective-origin: 50% 50%;

		@media screen and (max-width: $sm) {
			max-width: 340px;
		}
	}

	&__close {
		height: 24px;
		cursor: pointer;
		position: absolute;
		top: 47px;
		z-index: 10;
		right: 76px;
		margin: 0;
		padding: 0;
		visibility: visible;
		transition: all .4s;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: $white;
		font: bold 20px/24px $advent;
		letter-spacing: 0.05em;
		text-transform: uppercase;

		@media screen and (max-width: $sm) {
			top: 30px;
			right: 30px;
		}

		@media screen and (max-width: $xs) {
			span {
				display: none;
			}
		}


		svg {
			width: 24px;
			height: 24px;
			display: block;
			fill: $white;
			margin-left: 10px;
		}
	}

	&__title {
		text-align: center;
		color: $white;
		margin-bottom: 77px;

		@media screen and (max-width: $sm) {
			margin-bottom: 55px;
		}

		span {
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;
		}

		&:after {
			text-align: center;
		}
	}

	&__input {
		margin-bottom: 32px;

		@media screen and (max-width: $sm) {
			margin-bottom: 16px;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__error {
		color: #FF2977;
		font: 12px/32px $baseFF;
		margin-top: 5px;
	}

	&__buttons {
		display: flex;
		justify-content: center;
		margin-top: 77px;
	}

	&__desc {
		text-align: center;
		font: 24px/32px $baseFF;
		color: $white;

		@media screen and (max-width: $sm) {
			font: 14px/19px $baseFF;
		}
	}


	&.is-active {
		opacity: 1;
		visibility: visible;
		left: 0;
		pointer-events: auto;
		transition: left 0s ease, opacity 0.1s ease;
	}

	&.is-active & {
		&__wrapper {
			transform: translateY(0) scale(1, 1) rotateX(0);
			opacity: 1;
		}
	}

	&--telegram & {
		&__title {
			margin-bottom: 37px;
		}

		&__wrapper {
			max-width: 592px;

			@media screen and (max-width: $sm) {
				max-width: 400px;
			}
		}

		&__form {
			max-width: 464px;
			margin: 0 auto;

			@media screen and (max-width: $sm) {
				max-width: 340px;
			}
		}

		&__buttons {
			margin-top: 46px;
		}
	}

	&--succesfull & {
		&__wrapper {
			max-width: 500px;

			@media screen and (max-width: $sm) {
				max-width: 400px;
			}
		}

		&__img {
			margin-bottom: 41px;
			display: flex;
			justify-content: center;

			@media screen and (max-width: $sm) {
				margin-bottom: 18px;

				img {
					max-width: 237px;
				}
			}
		}

		&__title {
			margin-bottom: 37px;

			@media screen and (max-width: $sm) {
				margin-bottom: 20px;
			}
		}

		&__buttons {
			margin-top: 63px;

			@media screen and (max-width: $sm) {
				margin-top: 40px;
			}
		}
	}

}
</style>
