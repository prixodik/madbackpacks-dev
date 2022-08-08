<template>
	<nuxt-link v-if="tag === 'nuxt'" class="btn" :to="href">
		<span v-if="text" :title="text">{{ text }}</span>

		<slot></slot>

		<svg class="btn__bg btn__bg--default">
			<use xlink:href="#pink"></use>
		</svg>
		<svg class="btn__bg btn__bg--hover">
			<use xlink:href="#pink-hover"></use>
		</svg>
		<svg class="btn__bg btn__bg--click">
			<use xlink:href="#pink-click"></use>
		</svg>
		<svg class="btn__bg btn__bg--disabled">
			<use xlink:href="#pink-disabled"></use>
		</svg>
	</nuxt-link>
	<button v-else-if="tag === 'button'" class="btn" type="submit">
		<span v-if="text" :title="text">{{ text }}</span>

		<slot></slot>

		<svg class="btn__bg btn__bg--default">
			<use xlink:href="#pink"></use>
		</svg>
		<svg class="btn__bg btn__bg--hover">
			<use xlink:href="#pink-hover"></use>
		</svg>
		<svg class="btn__bg btn__bg--click">
			<use xlink:href="#pink-click"></use>
		</svg>
		<svg class="btn__bg btn__bg--disabled">
			<use xlink:href="#pink-disabled"></use>
		</svg>
	</button>
	<a v-else class="btn" :href="href">
		<span v-if="text" :title="text">{{ text }}</span>

		<slot></slot>

		<svg class="btn__bg btn__bg--default">
			<use xlink:href="#pink"></use>
		</svg>
		<svg class="btn__bg btn__bg--hover">
			<use xlink:href="#pink-hover"></use>
		</svg>
		<svg class="btn__bg btn__bg--click">
			<use xlink:href="#pink-click"></use>
		</svg>
		<svg class="btn__bg btn__bg--disabled">
			<use xlink:href="#pink-disabled"></use>
		</svg>

		<svg class="btn__bg btn__bg--soc">
			<use xlink:href="#soc"></use>
		</svg>
		<svg class="btn__bg btn__bg--soc-hover">
			<use xlink:href="#soc-hover"></use>
		</svg>

		<svg class="btn__bg btn__bg--arrow">
			<use xlink:href="#arrow"></use>
		</svg>
		<svg class="btn__bg btn__bg--arrow-hover">
			<use xlink:href="#arrow-hover"></use>
		</svg>
	</a>
</template>
<script>
export default {
	name: "Btn",
	props: ['href', 'text', 'tag'],
	data() {
		return {


		};
	},
	components: {},
	methods: {

	}
}
</script>

<style lang="scss">
.btn {
	border: 0;
	color: $white;
	font: 700 16px/20px $titleFF;
	background: none; //url("/images/btn-bg-pink.svg") 50% 50% / contain no-repeat;
	border-radius: 0;
	padding: 5px 16px;
	cursor: pointer;
	text-align: center;
	text-overflow: ellipsis;
	text-transform: none;
	text-decoration: none;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	transition: all 0.3s;
	min-width: 262px;
	height: 62px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;

	@media screen and (max-width: $sm) {
		height: 48px;
		min-width: 290px;
		font-size: 14px;
	}

	@media screen and (max-width: $xs) {
		min-width: 220px;
		width: 100%;
	}

	span {
		position: relative;
		z-index: 1;
		display: block;

		&:after {
			content: attr(title);
			text-align: center;
			letter-spacing: 0.05em;
			color: rgba(255, 255, 255, 0.3);
			filter: blur(1px);
			font: 700 16px/20px $titleFF;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
			transform: translate(0, 0);
			opacity: 0;
			transition: all 0.4s;

			@media screen and (max-width: $sm) {
				font-size: 14px;
			}
		}
	}

	&__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: contain;
		display: block;
		pointer-events: none;
		transition: all 1s;

		&--hover,
		&--click {
			display: block;
			opacity: 0;
			stroke-dasharray: 1400;
			stroke-dashoffset: 1400;
		}

		&--arrow,
		&--arrow-hover,
		&--soc,
		&--soc-hover {
			display: block;
			opacity: 0;
			stroke-dasharray: 0;
			stroke-dashoffset: 0;
		}

		&--disabled {
			display: none;
		}
	}

	@media screen and (max-width: $xs) {}

	&:hover,
	&:active {
		color: $white;
	}

	&:hover {
		span {
			&:after {
				transform: translate(4px, -4px);
				opacity: 1;
			}
		}
	}

	&:active {
		span {
			&:after {
				transform: translate(0, 0);
				opacity: 0;
			}
		}
	}

	&:hover & {
		&__bg {
			opacity: 0;

			&--hover {
				opacity: 1;
				animation: btnDash 1s linear forwards;
			}
		}
	}

	&:active & {

		&__bg {
			opacity: 0;

			&--click {
				opacity: 1;
				animation: btnDash 1s linear forwards;
			}
		}
	}

	&:focus {
		outline: none;
	}

	&:disabled,
	&:disabled:focus {
		pointer-events: none;
	}

	&:disabled:focus & {

		&__bg {
			display: none;

			&--disabled {
				display: block;
			}
		}
	}

	&--arrow {
		min-width: 62px;
		padding-left: 0;
		padding-right: 0;
		//background: url("/images/btn-bg-arrow.svg") 50% 50% / contain no-repeat;

		@media screen and (max-width: $sm) {
			height: 48px;
			min-width: 48px;
		}

		@media screen and (max-width: $xs) {
			height: 36px;
			min-width: 36px;
		}

		.btn__bg--default,
		.btn__bg--hover,
		.btn__bg--click {
			display: none;
		}

		.btn__bg--arrow {
			opacity: 1;
			stroke-dasharray: 0;
			stroke-dashoffset: 0;
		}

		svg:not(.btn__bg) {
			fill: none;
			stroke: #cefece;
			transition: all 0.4s;
			width: 19px;
			height: 20px;

			@media screen and (max-width: $xs) {
				width: 11px;
				height: 12px;
			}
		}

		&:hover,
		&:focus {
			//background: url("/images/btn-bg-arrow-hover.svg") 50% 50% / contain no-repeat;

			.btn__bg--arrow {
				opacity: 0;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}

			.btn__bg--arrow-hover {
				opacity: 1;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}

			svg:not(.btn__bg) {
				fill: #cefece;
				stroke: none;
			}
		}
	}

	&--next {
		svg {
			transform: rotate(180deg);
		}
	}

	&--soc {
		min-width: 62px;
		padding-left: 0;
		padding-right: 0;

		@media screen and (max-width: $sm) {
			height: 48px;
			min-width: 48px;
		}

		@media screen and (max-width: $xs) {
			width: 48px;
		}

		.btn__bg--default,
		.btn__bg--hover,
		.btn__bg--click {
			display: none;
		}

		.btn__bg--soc {
			opacity: 1;
			stroke-dasharray: 0;
			stroke-dashoffset: 0;
		}

		//background: url("/images/btn-bg-soc.svg") 50% 50% / contain no-repeat;

		&:hover,
		&:focus {
			//background: url("/images/btn-bg-soc-pink.svg") 50% 50% / contain no-repeat;

			.btn__bg--soc {
				opacity: 0;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}

			.btn__bg--soc-hover {
				opacity: 1;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}
		}

		svg:not(.btn__bg) {
			width: 21px;
			height: 21px;
			stroke: $white;
			fill: $white;
			display: block;

			@media screen and (max-width: $sm) {
				width: 18px;
				height: 18px;
			}
		}

		&.btn--pink {
			//background: url("/images/btn-bg-soc-pink.svg") 50% 50% / contain no-repeat;

			svg:not(.btn__bg) {
				width: 30px;
				height: 30px;

				@media screen and (max-width: $sm) {
					width: 18px;
					height: 18px;
				}
			}

			.btn__bg--soc {
				opacity: 0;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}

			.btn__bg--soc-hover {
				opacity: 1;
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}
		}
	}

	&--burger {
		min-width: 48px;
		height: 48px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: url('/images/burger-bg.svg') 0 0/contain no-repeat;
		padding: 0;

		span {
			width: 20px;
			height: 2px;
			border-radius: 2px;
			background: $white;
			margin-top: 6px;
			transition: all .4s;

			&:first-child {
				margin-top: 0;
			}
		}

		@media screen and (max-width: $xs) {
			width: 40px;
			height: 40px;
			background: none;

			span {
				width: 16px;
				margin-top: 4px;

				&:first-child {
					margin-top: 0;
				}
			}
		}

		.btn__bg {
			display: none;
		}

		&.is-active {
			span {
				&:nth-of-type(1) {
					transform: rotate(-45deg);
					margin-bottom: 4px;
				}

				&:nth-of-type(2) {
					transform: rotate(45deg);
					margin-top: -6px;
				}
			}
		}
	}
}

@keyframes btnDash {
	to {
		/* stroke-dashoffset: 100000; */
		stroke-dashoffset: 0;
		//stroke-dasharray: 0;
	}
}
</style>