<template>
	<section class="about-section" id="about-section">
		<div class="about-section__container container">

			<div class="about-section__title title-h1" :title="title">{{ title }}</div>
			<div class="about-section__desc" v-html="desc"></div>

			<Swiper ref="aboutSlider" :options="swiperOptions" class="about-section__row row">
				<SwiperSlide class="about-section__col" v-for="(about, index) in abouts" :key="index">
					<AboutBlock :title="about.title" :desc="about.desc" :icon="about.icon" :delay="about.delay">
					</AboutBlock>
				</SwiperSlide>

				<div class="about-section__pagination swiper-pagination" slot="pagination" />
			</Swiper>

			<!-- <div class="about-section__row">
				<div class="about-section__col" v-for="(about, index) in abouts" :key="index">
					<AboutBlock :title="about.title" :desc="about.desc" :icon="about.icon" :delay="about.delay">
					</AboutBlock>
				</div>
			</div> -->

		</div>
	</section>
</template>
<script>
import AboutBlock from '../blocks/AboutBlock.vue';

//const { directive } = VueAwesomeSwiper(SwiperClass)

export default {
	name: "AboutSection",
	data() {
		return {
			title: '_About the game',
			desc: 'MadBackpacks is the next-gen AR game powered by WeWay<br> Bringing augmented reality to your everyday life for an ultimate gaming experience',

			animationSection: false,

			swiperOptions: {
				spaceBetween: 0,
				slidesPerView: 4,
				allowTouchMove: true,

				centerInsufficientSlides: false,
				centeredSlides: false,
				centeredSlidesBounds: false,

				slideToClickedSlide: true,
				passiveListeners: false,
				enabled: false,
				pagination: {
					el: ".swiper-pagination",
					type: "bullets",
					clickable: true,
				},

				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						enabled: true,
					},
					993: {
						slidesPerView: 3,
						spaceBetween: 16,
						enabled: true,
						centeredSlides: true,
						centeredSlidesBounds: true,
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
					},
					1281: {
						slidesPerView: 4,
						spaceBetween: 0,
						enabled: false,
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
					},
				}
			},

			abouts: [{
				title: '<span>Immersive</span> <br>and Fun',
				desc: 'Use AR navigation and play<br> mini-games to earn coins',
				icon: 'images/about-block-img-1.png',
				delay: '0'
			}, {
				title: 'A part of daily <br><span>lives</span>',
				desc: 'Live your life and collect coins',
				icon: 'images/about-block-img-2.png',
				delay: '1.5s'
			}, {
				title: 'Play and Earn <br><span>together</span>',
				desc: 'Join a guild to earn more and <br>control wider areas',
				icon: 'images/about-block-img-3.png',
				delay: '3s'
			}, {
				title: '<span>Augmented</span> <br>Reality',
				desc: 'Developed by a world-class <br>3D graphics studio',
				icon: 'images/about-block-img-4.png',
				delay: '4.5s'
			}]
		};
	},
	components: { AboutBlock },
	methods: {
		activeAnimation() {
			this.animationSection = true;
			//this.$refs.dotteds.activeAnimation();
		},
		stopAnimation() {
			this.animationSection = false;
			//this.$refs.dotteds.stopAnimation();
		}
	}
	/* directives: {
		swiper: directive,
	}, */
	/* setup() {
		return {
			modules: [Pagination]
		}
	} */
}
</script>

<style lang="scss" scroped>
.about-section {
	padding: 87px 0;
	background: url('/images/about-section-line-top.svg') 0 0 no-repeat, url('/images/about-section-bg.png') 50% 50% no-repeat #090923;
	overflow: hidden;

	@media screen and (max-width: $sm) {
		padding: 120px 0 100px;
	}

	@media screen and (max-width: $xs) {
		padding: 90px 0 118px;
	}

	&__container {
		position: relative;
		z-index: 1;


		&:before {
			content: "";
			display: block;
			width: 392px;
			height: 392px;
			border-radius: 50%;
			position: absolute;
			top: 283px;
			left: 256px;
			background: linear-gradient(119.99deg, #FE37F1 21.9%, #12F3D8 125.17%);
			filter: blur(104px);
			opacity: 0.5;
			z-index: -1;

			@media screen and (max-width: $md) {
				width: 276px;
				height: 276px;
				left: 15%;
			}

			@media screen and (max-width: $sm) {
				left: 16px;
			}

			@media screen and (max-width: $xs) {
				width: 240px;
				height: 240px;
				left: -15%;
			}
		}

		&:after {
			content: "";
			display: block;
			width: 392px;
			height: 392px;
			border-radius: 50%;
			position: absolute;
			top: 77px;
			right: 220px;
			background: linear-gradient(119.99deg, rgba(18, 243, 216, 0.79) 21.9%, rgba(73, 255, 248, 0.19) 125.17%);
			filter: blur(104px);
			opacity: 0.5;
			z-index: -1;

			@media screen and (max-width: $md) {
				width: 276px;
				height: 276px;
				right: 10%;
			}

			@media screen and (max-width: $sm) {
				right: 16px;
			}

			@media screen and (max-width: $xs) {
				width: 240px;
				height: 240px;
				right: -15%;
			}
		}
	}

	&__title {
		text-align: center;
		margin-bottom: 24px;
		color: $white;

		&:after {
			text-align: center;
		}
	}

	&__desc {
		text-align: center;
		margin-bottom: 23px;
		font: 500 20px/1.6 $baseFF;
		color: #CECCD6;

		@media screen and (max-width: $md) {
			font-size: 18px;
		}

		@media screen and (max-width: $sm) {
			font-size: 14px;
			line-height: 1.35;
			max-width: 420px;
			margin: 0 auto 24px;
		}
	}

	&__row {
		&:not(.swiper-container-initialized) {
			display: flex;
		}

		@media screen and (max-width: $sm) {
			max-width: 320px;
			margin: 0 auto;
			overflow: visible !important;
		}

		@media screen and (max-width: $xs) {
			max-width: 276px;
		}
	}

	&__col {
		/* flex: 0 0 25%;
		max-width: 25%; */
		display: flex;
		justify-content: center;

		@media screen and (max-width: $sm) {
			display: block;

			&.swiper-slide-next,
			&.swiper-slide-prev {
				.about-block {
					max-width: 140px;
					margin-top: 103px;

					&__img {
						opacity: 0.6;
					}

					&__title,
					&__desc,
					&__bottom {
						opacity: 0;
					}
				}
			}

			&.swiper-slide-prev {
				display: flex;
				justify-content: flex-end;
			}

			&.swiper-slide-next {
				display: flex;
				justify-content: flex-start;
			}
		}

		@media screen and (max-width: $xs) {

			&.swiper-slide-next,
			&.swiper-slide-prev {
				.about-block {
					max-width: 120px;
					margin-top: 78px;
				}
			}
		}
	}

	&__pagination {
		margin-top: 18px;
		display: none;

		@media screen and (max-width: $md) {
			display: flex;
		}

		@media screen and (max-width: $xs) {
			margin-top: 16px;
		}
	}
}
</style>