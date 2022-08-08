<template>
	<section class="roadmap-section" id="roadmap-section">

		<div class="roadmap-section__container container">
			<div class="roadmap-section__head">
				<div class="roadmap-section__title title-h1" :title="title">{{ title }}</div>
				<div class="roadmap-section__head-line">
					<img src="images/roadmap-section-head-bg.svg" alt="">
				</div>
				<div class="roadmap-section__arrows">
					<Btn :tag="'a'" class="roadmap-section__arrow btn--arrow" @click.prevent.native="sliderPrev()">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
						</svg>
					</Btn>
					<Btn :tag="'a'" class="roadmap-section__arrow btn--arrow btn--next"
						@click.prevent.native="sliderNext()">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
						</svg>
					</Btn>
					<!-- <div class="roadmap-section__arrow btn btn--arrow" @click.prevent="sliderPrev()">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
						</svg>
					</div> -->
					<!-- <div class="roadmap-section__arrow btn btn--arrow btn--next" @click.prevent="sliderNext()">
						<svg>
							<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
						</svg>
					</div> -->
				</div>
			</div>


			<Swiper ref="roadmapSlider" :options="swiperOptions" class="roadmap-section__slider">
				<SwiperSlide class="roadmap-section__slider-item" :class="{ 'is-active-slide': activeSlide === index }"
					v-for="(slide, index) in slides" :key="`slide-${index}`">
					<RoadmapBlock :num="slide.num" :mounth="slide.mounth" :list="slide.list" :rotate="slide.rotate"
						@activeBlock="goToSlide(index)">
					</RoadmapBlock>
				</SwiperSlide>
			</Swiper>

		</div>
	</section>
</template>
<script>
import Dotteds from '../blocks/Dotteds.vue';
import RoadmapBlock from '../blocks/RoadmapBlock.vue';
import Btn from '../blocks/Btn.vue';

//import 'swiper/swiper.scss';

export default {
	name: "RoadmapSection",
	data() {
		return {
			title: '_Roadmap',
			activeSlide: 0,
			swiperOptions: {
				spaceBetween: 24,
				slidesPerView: 3,
				allowTouchMove: false,

				centerInsufficientSlides: false,
				centeredSlides: false,
				centeredSlidesBounds: false,

				slideToClickedSlide: true,
				passiveListeners: false,
				focusableElements: '.roadmap-block, input, select, option, textarea, button, video, label',

				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						enabled: true,
						allowTouchMove: true,
						pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						},
					},
					760: {
						slidesPerView: 2,
						spaceBetween: 16,
						//enabled: false,
						//centeredSlides: true,
						//centeredSlidesBounds: true,
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 24,
						//enabled: false,
						//centeredSlides: true,
						//centeredSlidesBounds: true,
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
					},
				}
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
	computed: {
		swiper() {
			return this.$refs.roadmapSlider.$swiper
		}
	},
	components: {
		RoadmapBlock,
		Btn
	},
	methods: {
		goToSlide(index) {
			//console.log(this.swiper);
			this.swiper.slideTo(index);
			this.activeSlide = index;

			this.slides.forEach((element) => {
				element.rotate += 25;
			});
		},
		sliderPrev() {
			this.swiper.slidePrev();
			if (this.activeSlide > 0) {
				this.activeSlide -= 1;

				this.slides.forEach((element) => {
					element.rotate -= 25;
				});
			}
		},
		sliderNext() {
			this.swiper.slideNext();
			if (this.activeSlide < (this.slides.length - 1)) {
				this.activeSlide += 1;

				this.slides.forEach((element) => {
					element.rotate += 25;
				});
			}
		}
	}
}
</script>

<style lang="scss" scroped>
.roadmap-section {
	padding: 75px 0 84px;
	position: relative;
	overflow: hidden;
	background: url('/images/tokensusage-section-bg.png') 50% 50% no-repeat #090923;

	@media screen and (max-width: $xs) {
		padding: 105px 0 96px;
	}

	&__container {
		position: relative;
		z-index: 1;

		&:after {
			content: "";
			position: absolute;
			width: 417px;
			height: 410px;
			left: 130px;
			top: 270px;
			z-index: -1;

			background: linear-gradient(119.99deg, #FE37F1 21.9%, #12F3D8 125.17%);
			opacity: 0.45;
			filter: blur(104px);
			opacity: .3;
			transform: rotate(177.74deg);
			border-radius: 50%;
		}
	}

	&__head {
		display: flex;
		margin-bottom: 76px;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: $sm) {
			margin-bottom: 10px;
		}

		&-line {
			flex: 1 1 auto;

			@media screen and (max-width: $xs) {
				display: none;
			}

			img {
				width: 100%;
				object-fit: cover;
				height: 4px;
			}
		}
	}

	&__title {
		color: $white;
		margin-bottom: 0;
		margin-right: 52px;
	}

	&__arrows {
		display: flex;
		flex-wrap: nowrap;
	}

	&__arrow {
		margin-left: 14px;
	}

	&__slider {
		display: flex;
		flex-wrap: nowrap;
		position: relative;
		overflow: visible !important;
		max-width: 1205px;
		margin: 0 !important;

		@media screen and (max-width: $md) {
			max-width: 800px;
		}

		@media screen and (max-width: $xs) {
			max-width: 90%;
		}

		&:before {
			content: "";
			display: block;
			right: 0;
			margin: 0 calc(-50vw + 40%);
			height: 5px;
			background: url('/images/roadmap-section-slider-bg.svg') 0 0 repeat-x;
			position: absolute;
			top: 444px;
			left: 0;

			@media screen and (max-width: $sm) {
				top: 358px;
			}

			@media screen and (max-width: $xs) {
				display: none;
			}
		}

		&-item {
			&.swiper-slide {
				.roadmap-block {
					opacity: 0.3;
				}

				//&.swiper-slide-active {
				&.is-active-slide {
					.roadmap-block {
						opacity: 1;
					}
				}
			}


		}
	}

}
</style>