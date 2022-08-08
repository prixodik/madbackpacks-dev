<template>
	<section class="tokenomics-section">

		<Dotteds class="tokenomics-section__dotteds" :count="12"></Dotteds>

		<div class="tokenomics-section__container container">
			<div class="tokenomics-section__title title-h1" :title="title">{{ title }}</div>

			<div class="tokenomics-section__row">
				<div class="tokenomics-section__left">
					<div class="tokenomics-section__procent" v-for="(procent, index) in procents">
						<div class="tokenomics-section__procent-color" :style="`background-color: ${procent.color}`">
						</div>
						<div class="tokenomics-section__procent-wrap">
							<div class="tokenomics-section__procent-value">{{ procent.value }}%</div>
							<div class="tokenomics-section__procent-label">{{ procent.label }}</div>
						</div>
						<img v-if="index !== 7"
							:class="`tokenomics-section__procent-line tokenomics-section__procent-line--${index + 1}`"
							:src="`images/tokenomics-procent-line-${index + 1}.svg`" alt="">
					</div>
				</div>
				<div class="tokenomics-section__body">
					<kinesis-container class="tokenomics-section__img">
						<img class="tokenomics-section__img-1" src="images/tokenomics-section-img-1.png" alt="">
						<img class="tokenomics-section__img-2" src="images/tokenomics-section-img-2.svg" alt="">
						<!-- <img class="tokenomics-section__img-lines" src="images/tokenomics-section-img-lines.svg" alt=""> -->
						<!-- width="574"
							height="574" -->
						<svg class="tokenomics-section__img-lines" :class="{ 'is-animated': animatedLines }"
							viewBox="0 0 574 574" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M562 287C562 250.887 554.887 215.127 541.067 181.762C527.247 148.398 506.99 118.082 481.454 92.5457C455.918 67.0096 425.602 46.7533 392.238 32.9332C358.873 19.1132 323.113 12.0001 287 12.0001"
								stroke="url(#paint0_linear_244_9355)" stroke-width="24" />
							<path
								d="M439.961 515.534C477.469 490.429 508.222 456.478 529.506 416.677C550.789 376.875 561.949 332.446 562 287.312"
								stroke="#BB8CF7" stroke-width="24" />
							<path
								d="M228.096 555.617C264.265 563.549 301.663 564.094 338.047 557.221C374.432 550.347 409.054 536.197 439.837 515.617"
								stroke="#8A8CFF" stroke-width="24" />
							<path
								d="M55.6153 435.614C75.1315 466 100.442 492.244 130.1 512.849C159.759 533.453 193.186 548.014 228.472 555.7"
								stroke="#644BE4" stroke-width="24" />
							<path d="M62.0469 128.82C29.5575 175.024 12.0836 230.111 12.0003 286.595" stroke="#12F3D8"
								stroke-width="24" />
							<path d="M12 287C12 340.723 27.7359 393.27 57.2644 438.151" stroke="#33B9D6"
								stroke-width="24" />
							<path d="M204.165 24.7725C146.344 43.0376 96.1805 79.9015 61.48 129.629" stroke="#C3FE9D"
								stroke-width="24" />
							<path d="M287 12.0001C257.602 12.0001 228.394 16.7141 200.488 25.9624" stroke="white"
								stroke-width="24" />
							<defs>
								<linearGradient id="paint0_linear_244_9355" x1="97.9374" y1="536.188" x2="120.574"
									y2="-33.2804" gradientUnits="userSpaceOnUse">
									<stop stop-color="#F74083" />
									<stop offset="1" stop-color="#FF37F8" />
								</linearGradient>
							</defs>
						</svg>
						<kinesis-element :strength="25" type="depth" class="tokenomics-section__img-logo">
							<img src="images/tokenomics-section-img-logo.png" alt="">
						</kinesis-element>

						<kinesis-element :strength="15" class="tokenomics-section__img-3">
							<img src="images/tokenomics-section-img-3.png" alt="">
							<img class="tokenomics-section__img-3-circle"
								src="images/tokenomics-section-img-3-circle.svg" alt="">
						</kinesis-element>

						<kinesis-element :strength="10" class="tokenomics-section__img-4">
							<img src="images/tokenomics-section-img-4.png" alt="">
							<img class="tokenomics-section__img-4-circle"
								src="images/tokenomics-section-img-4-circle.svg" alt="">
						</kinesis-element>
					</kinesis-container>
				</div>
				<div class="tokenomics-section__params">
					<img class="tokenomics-section__params-lt" src="images/tokenomics-params-line-top.svg" alt="">
					<div class="tokenomics-section__param" v-for="param in params">
						<div class="tokenomics-section__param-label">{{ param.label }}</div>
						<div class="tokenomics-section__param-value">{{ param.value }}</div>
					</div>
					<img class="tokenomics-section__params-lb" src="images/tokenomics-params-line-bottom.svg" alt="">
				</div>
			</div>


		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "TokenomicsSection",
	data() {
		return {
			title: '_Tokenomics',
			animatedLines: false,
			procents: [{
				color: '#FE38EB',
				value: '25',
				label: 'In-game Incentives'
			}, {
				color: '#BB8CF7',
				value: '15',
				label: 'Staking Incentives'
			}, {
				color: '#8A8CFF',
				value: '12.5',
				label: 'Liquidity'
			}, {
				color: '#644BE4',
				value: '12.5',
				label: 'Private sale'
			}, {
				color: '#33B9D6',
				value: '10',
				label: 'Marketing'
			}, {
				color: '#12F3D8',
				value: '10',
				label: 'Treasury'
			}, {
				color: '#C3FE9D',
				value: '10',
				label: 'Team'
			}, {
				color: '#FFFFFF',
				value: '5',
				label: 'IDO'
			}],
			params: [
				{
					label: 'Token Ticker',
					value: '$WWMB'
				}, {
					label: 'Total Supply',
					value: '400,000,000'
				}, {
					label: 'Private Sale Token Price',
					value: '$0.03'
				}, {
					label: 'IDO Token Price',
					value: '$0.05'
				}, {
					label: 'Vesting Period',
					value: '60 months'
				}, {
					label: 'TGE Supply',
					value: '29,000,000'
				}
			]
		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds },
	methods: {
		playLines() {
			this.animatedLines = true;
		}
	}
}
</script>

<style lang="scss" scroped>
.tokenomics-section {
	padding: 75px 0 84px;
	position: relative;
	background: url('/images/tokensusage-section-bg.png') 50% 50% no-repeat #090923;

	@media screen and (max-width: $sm) {
		padding: 56px 0;
	}

	@media screen and (max-width: $xs) {
		padding: 69px 0;
	}

	&:after {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/tokensusage-section-line-bottom.svg') 0% 0 no-repeat;
		position: absolute;
		bottom: 8px;
		left: 0;
	}

	&__container {
		position: relative;
	}

	&__dotteds {
		z-index: 0;
	}

	&__title {
		text-align: center;
		color: $white;
		margin-bottom: 21px;
		margin-left: -52px;

		@media screen and (max-width: $sm) {
			margin-left: 38px;
		}

		@media screen and (max-width: $xs) {
			margin-left: 0;
		}

		&:after {
			text-align: center;
		}
	}

	&__img {
		position: relative;
		z-index: 1;
		display: inline-block;
		margin: 0 auto;

		@media screen and (max-width: $sm) {
			margin-right: -40px;
		}

		@media screen and (max-width: $xs) {
			margin: 0 -22px;
		}

		&:after {
			content: "";
			position: absolute;
			width: 46.3rem;
			height: 45.5rem;
			left: 34rem;
			top: 25rem;
			z-index: -1;
			border-radius: 50%;

			background: linear-gradient(119.99deg, #FE37F1 21.9%, #12F3D8 125.17%);
			filter: blur(104px);
			opacity: 0.6;
			transform: rotate(177.74deg);
		}

		&-1 {
			display: block;
			position: relative;
			z-index: 1;
		}

		&-2 {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 0;
			transform: translate(-50%, -50%);

			@media screen and (max-width: $xs) {
				max-width: 260px;
			}
		}

		&-3 {
			position: absolute;
			top: 5%;
			left: 6%;

			@media screen and (max-width: $sm) {
				width: 64px;
				top: 5px;
				left: 51px;
			}

			@media screen and (max-width: $xs) {
				width: 50px;
				top: -6px;
				left: 34px;
			}

			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				animation: 3s dinoCircleScale linear infinite;
				transform-origin: 0% 0%;
				max-width: none;

				@media screen and (max-width: $xs) {
					width: 90px;
					margin-top: -3px;
				}
			}
		}

		&-4 {
			position: absolute;
			bottom: -10%;
			right: 5%;

			@media screen and (max-width: $sm) {
				width: 138px;
				bottom: -6px;
				right: 31px;
			}

			@media screen and (max-width: $xs) {
				width: 120px;
				bottom: -3px;
				right: 31px;
			}

			&-circle {
				position: absolute;
				top: 50%;
				left: 50%;
				animation: 3s dinoCircleScale linear infinite;
				transform-origin: 0% 0%;
				max-width: none;

				@media screen and (max-width: $xs) {
					width: 92px;
				}
			}
		}

		&-lines {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 3;
			transform: translate(-50%, -50%);
			width: 57.4rem;

			@media screen and (max-width: $md) {
				width: 66.4rem;
			}

			@media screen and (max-width: $md) {
				width: 70%;
			}

			path {
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
			}

			&.is-animated {
				path {
					animation: dash 5s linear forwards;
				}
			}
		}

		&-logo {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 4;
			margin: -112px 0 0 -305px;

			@media screen and (max-width: $sm) {
				width: 343px;
				transform: translate(-50%, -50%) !important;
				margin: 0;
			}

			@media screen and (max-width: $xs) {
				width: 293px;
			}
		}
	}

	&__row {
		display: flex;
		justify-content: center;
		position: relative;

		@media screen and (max-width: $sm) {
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
		}
	}

	&__left {
		position: absolute;
		top: 26px;
		left: 0;

		@media screen and (max-width: $md) {
			top: 50%;
			transform: translateY(-50%);
		}

		@media screen and (max-width: $sm) {
			position: static;
			transform: none;
			flex: 1 0 calc(100% - 410px);
			max-width: calc(100% - 410px);
			display: flex;
			flex-wrap: wrap;
			padding-left: 42px;
		}

		@media screen and (max-width: $xs) {
			flex: 0 0 100%;
			max-width: 100%;
			padding-left: 24px;
		}
	}

	&__body {

		@media screen and (max-width: $md) {
			transform: scale(0.6);
		}

		@media screen and (max-width: $sm) {
			transform: scale(1);
			flex: 0 0 410px;
			max-width: 410px;
		}

		@media screen and (max-width: $xs) {
			order: -1;
			flex: 0 0 100%;
			max-width: 100%;
		}
	}

	&__procent {
		display: flex;
		margin-bottom: 40px;
		position: relative;

		@media screen and (max-width: $md) {
			margin-bottom: 30px;
		}

		@media screen and (max-width: $sm) {
			flex: 0 0 50%;
			max-width: 50%;
			margin-bottom: 23px;
			position: relative;
			padding: 7px 7px 0 7px;
			z-index: 1;
		}

		&:last-child {
			margin-bottom: 0;
		}

		&-color {
			width: 20px;
			height: 20px;
			flex: 0 0 20px;
			margin-right: 18px;

			@media screen and (max-width: $sm) {
				margin: 0;
				position: absolute;
				top: 0;
				z-index: -1;
				left: 0;
				opacity: 0.7;
				border-radius: 1px;
			}
		}

		&-value {
			font: 900 20px/25px $titleFF;
			color: $white;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			margin-bottom: 7px;

			@media screen and (max-width: $md) {
				font-size: 18px;
				line-height: 23px;
			}

			@media screen and (max-width: $sm) {
				margin-bottom: 0;
			}
		}

		&-label {
			font: 500 20px/1.6 $baseFF;
			color: #CECCD6;

			@media screen and (max-width: $md) {
				font-size: 16px;
				line-height: 1.3;
			}
		}

		&-line {
			position: absolute;
			top: calc(100% + 9px);
			left: 37px;
			max-width: none;

			@media screen and (max-width: $sm) {
				display: none;
			}

			&--5,
			&--6,
			&--7 {
				top: calc(100% - 4px);
			}
		}
	}

	&__params {
		position: absolute;
		top: 50%;
		transform: translateY(calc(-50% + 35px));
		right: 48px;
		padding: 33px 0 26px;
		max-width: 285px;

		@media screen and (max-width: $lg) {
			right: 0;
			transform: translateY(calc(-50% + 0px));
		}

		@media screen and (max-width: $sm) {
			position: relative;
			top: auto;
			right: auto;
			transform: none;
			flex: 0 0 313px;
			max-width: 313px;
			padding-left: 46px;
			margin-top: -40px;
			padding-bottom: 16px;
		}

		@media screen and (max-width: $xs) {
			margin-top: 15px;
			flex: 0 0 100%;
			max-width: 100%;
			padding-left: 28px;
			padding-top: 37px;
			padding-bottom: 6px;
		}

		&-lt {
			position: absolute;
			top: 0;
			right: 34px;
			max-width: none;

			@media screen and (max-width: $xs) {
				right: auto;
				left: -50px;
			}
		}

		&-lb {
			position: absolute;
			bottom: 0;
			right: 34px;
			max-width: none;

			@media screen and (max-width: $xs) {
				right: auto;
				left: -50px;
			}
		}
	}

	&__param {
		margin-bottom: 9px;

		@media screen and (max-width: $sm) {
			margin-bottom: 10px;
		}

		@media screen and (max-width: $xs) {
			margin-bottom: 20px;
		}

		&-label {
			font: 900 20px/25px $titleFF;
			color: $white;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			margin-bottom: 4px;

			@media screen and (max-width: $md) {
				font-size: 18px;
			}

			@media screen and (max-width: $xs) {
				font-size: 18px;
				line-height: 23px;
			}
		}

		&-value {
			font: 500 24px/1.6 $baseFF;
			color: #12F3D8;

			@media screen and (max-width: $md) {
				font-size: 22px;
			}

			@media screen and (max-width: $xs) {
				font-size: 22px;
				line-height: 1.3;
			}
		}
	}
}

@keyframes dash {
	to {
		/* stroke-dashoffset: 100000; */
		stroke-dashoffset: 0;
	}
}
</style>