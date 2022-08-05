<template>
	<section class="roadmap-section">

		<Dotteds class="roadmap-section__dotteds" :count="12"></Dotteds>

		<div class="roadmap-section__container container">
			<div class="roadmap-section__head">
				<div class="roadmap-section__title" :title="title">{{ title }}</div>
				<div class="roadmap-section__arrows">
					<div class="roadmap-section__arrow swiper-button-prev" slot="button-prev">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
						</svg>
					</div>
					<div class="roadmap-section__arrow swiper-button-next" slot="button-next">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-right"></use>
						</svg>
					</div>
				</div>
			</div>


			<!-- <Swiper ref="slider" :options="swiperOptions" class="roadmap-section__slider">
				<SwiperSlide class="roadmap-section__slider-item" v-for="(slide, index) in slides"
					:key="`slide-${index}`">
					<RoadmapBlock :num="slide.num" :mounth="slide.mounth" :list="slide.list" :rotate="slide.rotate">
					</RoadmapBlock>
				</SwiperSlide>
			</Swiper> -->

		</div>
	</section>
</template>
<script>
/* import SwiperClass, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'; */
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper/dist/exporter'
/* import VueAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
const { Swiper, SwiperSlide } = VueAwesomeSwiper; */

import Dotteds from '../blocks/Dotteds.vue';
import RoadmapBlock from '../blocks/RoadmapBlock.vue';

import 'swiper/swiper.scss';

export default {
	name: "RoadmapSection",
	data() {
		return {
			title: '_Roadmap',
			swiperOptions: {
				spaceBetween: 25,
				slidesPerView: 1,
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
						enabled: true,
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 16,
						enabled: true,
					},
					992: {
						slidesPerView: 1,
						spaceBetween: 25,
						enabled: true,
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},

			slides: [{
				num: '01',
				mounth: 'August',
				list: ['Closed beta testing', 'Sound design', 'Marketing activities'],
				rotate: 0
			}, {
				num: '02',
				mounth: 'September',
				list: ['IDO', 'Marketplace launch', 'Smart Contracts’ development '],
				rotate: -25
			}, {
				num: '03',
				mounth: 'October',
				list: ['Smart Contracts’ audit', 'In-game economy launch', 'Breeding & Staking', 'First sale of NFTs'],
				rotate: -50
			}, {
				num: '04',
				mounth: 'November',
				list: ['Mini-game', 'Lootboxes & Boosts', 'Lending/Borrowing'],
				rotate: -75
			}, {
				num: '05',
				mounth: 'December',
				list: ['Brand Chalenges', 'Guilds'],
				rotate: -100
			}, {
				num: '06',
				mounth: 'January',
				list: ['Mad Alleys', 'Quests'],
				rotate: -125
			}, {
				num: '07',
				mounth: 'February',
				list: ['Second sale of NFTs'],
				rotate: -150
			}, {
				num: '08',
				mounth: 'Mart',
				list: ['PvP Challenges & Tournaments'],
				rotate: -175
			}]
		};
	},
	setup() {
		return {
			//modules: [Pagination]
		}
	},
	components: {
		/* VueAwesomeSwiper, */ Dotteds, RoadmapBlock
	},
	methods: {

	}
}
</script>

<style lang="scss" scroped>
.roadmap-section {
	padding: 75px 0 84px;
	position: relative;
	//background: url('/images/tokensusage-section-bg.png') 50% 50% no-repeat #090923;

	/* &:after {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/tokensusage-section-line-bottom.svg') 0% 0 no-repeat;
		position: absolute;
		bottom: 8px;
		left: 0;
	} */

	&__container {
		position: relative;
	}

	&__head {
		display: flex;
		margin-bottom: 112px;
		justify-content: space-between;
	}

	&__title {
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 0;

		&:after {
			content: attr(title);
			letter-spacing: 0.05em;
			color: rgba($white, 0.1);
			filter: blur(4px);
			font: 700 48px/60px $titleFF;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transform: translate(33px, -27px);
		}
	}

	&__slider {
		display: flex;
		flex-wrap: nowrap;
		position: relative;

		&:before {
			content: "";
			display: block;
			right: 0;
			margin: 0 calc(-50vw + 50%);
			height: 5px;
			background: url('/images/roadmap-section-slider-bg.svg') 0 0 repeat-x;
			position: absolute;
			top: 409px;
			left: 0;
		}

		&-item {
			flex: 0 0 322px;
			max-width: 322px;
			margin-right: 124px;

			&:last-child {
				margin-right: 0;
			}
		}
	}

}
</style>