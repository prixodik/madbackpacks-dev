<template>
	<div class="token-param">
		<div class="token-param__icon">
			<svg :class="`token-param__icon-main token-param__icon-main--${icon}`" :fill="currentColor.iconColor"
				:stroke="currentColor.iconColor">
				<use :xlink:href="`images/sprite-svg.svg#${icon}`"></use>
			</svg>

			<svg class="token-param__icon-shadow" width="181" height="181" viewBox="0 0 181 181" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_609_71)">
					<ellipse cx="90.4996" cy="90.5004" rx="26.0484" ry="26.0484" :fill="currentColor.bg"
						fill-opacity="0.57" />
				</g>
				<g filter="url(#filter1_f_609_71)">
					<ellipse cx="90.5002" cy="90.5003" rx="35.0647" ry="35.0968" :fill="currentColor.shadow.end"
						fill-opacity="0.3" />
					<path
						d="M125.065 90.5003C125.065 109.608 109.589 125.097 90.5002 125.097C71.4111 125.097 55.9355 109.608 55.9355 90.5003C55.9355 71.3926 71.4111 55.9036 90.5002 55.9036C109.589 55.9036 125.065 71.3926 125.065 90.5003Z"
						:stroke="currentColor.shadow.start" />
				</g>
				<circle cx="90.5" cy="90.5" r="42" :stroke="`url(#paint0_linear_609_71${currentColor.index})`" />
				<defs>
					<filter id="filter0_f_609_71" x="9.45117" y="9.45203" width="162.097" height="162.097"
						filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_609_71" />
					</filter>
					<filter id="filter1_f_609_71" x="0.435547" y="0.403564" width="180.129" height="180.194"
						filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_609_71" />
					</filter>
					<linearGradient :id="`paint0_linear_609_71${currentColor.index}`" x1="118.388" y1="133.088"
						x2="48.5291" y2="64.8563" gradientUnits="userSpaceOnUse">
						<stop :stop-color="currentColor.border.start" stop-opacity="0.45" />
						<stop offset="1" :stop-color="currentColor.border.end" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>

			<div class="token-param__list">
				<div :class="`token-param__list-item token-param__list-item--${ind}`" v-for="(item, ind) in list">
					<div class="token-param__list-block">
						<span>{{ item.title }}</span>
						<img v-if="item.star" src="images/star.svg" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="token-param__title">{{ title }}</div>
	</div>
</template>
<script>
import { createDecipheriv } from 'crypto';


export default {
	name: "TokenParam",
	props: ['icon', 'color', 'title', 'list'],
	data() {
		return {
			colors: {
				yellow: {
					index: 1,
					iconColor: '#E1CA1A',
					border: {
						start: '#E1CC1D',
						end: '#DFCA1C'
					},
					shadow: {
						start: '#E0C91B',
						end: '#FFFF5A'
					},
					bg: '#E1CA19'
				},
				green: {
					index: 2,
					iconColor: '#05F06B',
					border: {
						start: '#06F170',
						end: '#DFCA1C'
					},
					shadow: {
						start: '#06F170',
						end: '#06F170'
					},
					bg: '#06F170'
				},
				blue: {
					index: 3,
					iconColor: '#12F3D8',
					border: {
						start: '#12F3D8',
						end: '#DFCA1C'
					},
					shadow: {
						start: '#12F3D8',
						end: '#12F3D8'
					},
					bg: '#12F3D8'
				},
				pink: {
					index: 4,
					iconColor: '#FE37F1',
					border: {
						start: '#FE37F1',
						end: '#DFCA1C'
					},
					shadow: {
						start: '#FE37F1',
						end: '#FE37F1'
					},
					bg: '#FE37F1'
				}
			}

		};
	},
	components: {},
	computed: {
		currentColor() {
			let color = false;
			if (this.color === 'yellow') {
				color = this.colors.yellow;
			} else if (this.color === 'green') {
				color = this.colors.green;
			} else if (this.color === 'blue') {
				color = this.colors.blue;
			} else if (this.color === 'pink') {
				color = this.colors.pink;
			}

			return color;
		}
	}
}
</script>

<style lang="scss" scroped>
.token-param {
	transition: all .4s;
	position: relative;
	z-index: 10;

	&__icon {
		width: 85px;
		height: 85px;
		margin: 0 auto 12px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: $sm) {
			transform: scale(0.7);
		}

		&-main {
			&--mobile {
				width: 40px;
				height: 56px;
			}

			&--shop {
				width: 49px;
				height: 49px;
			}

			&--guild {
				width: 39px;
				height: 39px;
			}

			&--game {
				width: 48px;
				height: 42px;
			}

			&--pvp {
				width: 42px;
				height: 42px;
			}
		}

		&-shadow {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&__title {
		text-align: center;
		font: 500 16px/26px $baseFF;
		display: flex;
		justify-content: center;

		@media screen and (max-width: $md) {
			font: 400 14px/18px $baseFF;
		}
	}

	&__list {
		position: absolute;
		top: -13px;
		left: 83px;
		display: none;
		flex-wrap: wrap;
		width: 418px;
		pointer-events: none;

		&-item {
			margin: 0 4px 4px 0;
		}

		&-block {
			display: inline-flex;
			align-items: center;
			align-content: center;
			padding: 9px 23px 5px 23px;
			background: #D9D9D9;
			border-radius: 24px;
			height: 40px;
			flex-wrap: nowrap;
			color: #0A0A23;
			font: 500 16px/26px $baseFF;
			white-space: nowrap;

			span {
				flex: 1 1 auto;
			}

			img {
				margin-left: 6px;
				margin-right: -13px;
				margin-top: -4px;
				flex: 0 0 25px;
				max-width: 25px;
				height: 25px;
			}
		}
	}

	&--group-1 {

		&.token-param--item-1,
		&.token-param--item-2 {
			.token-param__list {
				max-width: 200px;
			}
		}
	}

	&--group-2 & {
		&__list {
			max-width: 300px;
		}
	}

	&--group-3 & {
		&__list {
			left: auto;
			right: 83px;
			justify-content: flex-end;
		}
	}

	&:hover {
		transform: scale(1.1, 1.1);
		z-index: 100;
	}

	&:hover & {
		&__list {
			display: flex;
			z-index: 10;
		}
	}
}
</style>