<template>
	<section class="tokensusage-section" id="tokensusage-section">
		<div class="tokensusage-section__container container">

			<div class="tokensusage-section__title title-h1" :title="title">{{ title }}</div>
			<div class="tokensusage-section__desc">{{ desc }}</div>
			<!-- <div class="tokensusage-section__row row">
				<div class="tokensusage-section__col col-4" v-for="token in tokens">
					<TokenBlock :title="token.title" :desc="token.desc" :iconId="token.iconId" :icon="token.animIcon"
						:dottedColor="token.dottedColor" :floorColor="token.floorColor" :lightColor="token.lightColor"
						:params="token.params">
					</TokenBlock>
				</div>
			</div> -->

			<Swiper ref="tokensusageSlider" :options="swiperOptions" class="tokensusage-section__row">
				<SwiperSlide class="tokensusage-section__col" v-for="(token, index) in tokens" :key="index">
					<TokenBlock :title="token.title" :desc="token.desc" :iconId="token.iconId" :icon="token.animIcon"
						:dottedColor="token.dottedColor" :floorColor="token.floorColor" :lightColor="token.lightColor"
						:params="token.params">
					</TokenBlock>
				</SwiperSlide>

				<div class="tokensusage-section__pagination swiper-pagination" slot="pagination" />
			</Swiper>

			<div class="tokensusage-section__buttons">
				<div class="tokensusage-section__trigger">
					<img src="/images/star.svg" alt="">
					<span>Burn Triggers</span>
				</div>
				<!-- <a href="#" @click.prevent="openPopup('popup-join')" class="btn">GET WWMB</a> -->
				<!-- <Btn :tag="'a'" :text="'GET WWMB'" @click.prevent.native="openPopup('popup-join')"></Btn> -->

				<Btn class="btn--icon" tag="a" href="https://t.me/MadBackpacks" target="_blank">
					<svg class="btn__icon">
						<use xlink:href="/images/sprite-svg.svg#telegram"></use>
					</svg>
					<span>Join community</span>
				</Btn>
			</div>
		</div>
	</section>
</template>
<script>
import TokenBlock from '../blocks/TokenBlock.vue';
import Btn from '../blocks/Btn.vue';

export default {
	name: "TokensUsageSection",
	data() {
		return {
			title: '_Tokens & usage',
			desc: ' $WWMB in-game utility token | $WWY governance token',
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

				speed: 1000,
				effect: 'coverflow',
				coverflowEffect: {
					rotate: 0,
					stretch: 90,
					scale: 0.65,
					depth: 200,
					modifier: 1,
					slideShadows: false,
				},

				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						enabled: true,
						pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						},

					},
					993: {
						slidesPerView: 3,
						spaceBetween: 16,
						enabled: false,
						centeredSlides: false,
						centeredSlidesBounds: false,
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
						coverflowEffect: {
							rotate: 0,
							stretch: 0,
							scale: 1,
							depth: 0,
							modifier: 1,
							slideShadows: false,
						},
					},
					1281: {
						slidesPerView: 3,
						spaceBetween: 0,
						enabled: false,
						coverflowEffect: {
							rotate: 0,
							stretch: 0,
							scale: 1,
							depth: 0,
							modifier: 1,
							slideShadows: false,
						},
						/* pagination: {
							el: ".swiper-pagination",
							type: "bullets",
							clickable: true,
						}, */
					},
				}
			},

			tokens: [{
				title: '$WWMB',
				//desc: 'Backpack upgrade Backpack repair Lootbox purchase Backpacks breeding',
				iconId: 1,
				animIcon: 'images/icon-anim-1.png',
				dottedColor: '#94ffec',
				floorColor: {
					start: 'rgba(209,254,206,0)',
					end: 'rgba(105,245,218,0.46)'
				},
				lightColor: {
					start: 'rgba(18,243,216,0.17)',
					center: 'rgba(148,255,236,0.69)',
					end: 'rgba(148,255,236,0)'
				},
				params: [{
					title: 'In - App',
					icon: 'mobile',
					color: 'yellow',
					list: [{
						title: 'Backpack Upgrade',
						star: true
					}, {
						title: 'Backpack Repair',
						star: true
					}, {
						title: 'Backpack Breeding',
						star: true
					}, {
						title: 'Backpack Purchase',
						star: false
					}, {
						title: 'Backpack Burn',
						star: false
					}, {
						title: 'Lootbox Purchase',
						star: true
					}]
				}, {
					title: 'Guild',
					icon: 'guild',
					color: 'green',
					list: [{
						title: 'Guild Territory Control',
						star: false
					}, {
						title: 'Guild Ladder',
						star: false
					}]
				}, {
					title: 'PvP',
					icon: 'pvp',
					color: 'blue',
					list: [{
						title: 'PvP Ladder',
						star: false
					}, {
						title: 'PvP Chalenges',
						star: false
					}]
				}]
			}, {
				title: '$WWY',
				//desc: 'Joining a guild Guild perks PvP Tournaments Guild Challenge Bets',
				iconId: 2,
				animIcon: 'images/icon-anim-2.png',
				dottedColor: '#FE37F1',
				floorColor: {
					start: 'rgba(209,254,206,0)',
					end: 'rgba(254,55,241,0.46)'
				},
				lightColor: {
					start: 'rgba(254,55,241,0.17)',
					center: 'rgba(254,55,241,0.69)',
					end: 'rgba(254,55,241,0)'
				},
				params: [{
					title: 'In - App',
					icon: 'mobile',
					color: 'yellow',
					list: [{
						title: 'Quests',
						star: false
					}]
				}, {
					title: 'In - Game',
					icon: 'game',
					color: 'green',
					list: [{
						title: 'Mini - game',
						star: false
					}]
				}, {
					title: 'Madbackpacs Platform',
					icon: 'shop',
					color: 'pink',
					list: [{
						title: 'Backpacks Purchase',
						star: false
					}, {
						title: 'Staking',
						star: false
					}, {
						title: 'Lending & Borrowing ',
						star: false
					}]
				}]
			}, {
				title: '$WWMB + $WWY',
				desc: 'Backpack purchase Staking ',
				iconId: 3,
				animIcon: 'images/icon-anim-3.png',
				dottedColor: '#FFEE98',
				floorColor: {
					start: 'rgba(209, 254, 206, 0)',
					end: 'rgba(255, 238, 152, 0.46)'
				},
				lightColor: {
					start: 'gba(254, 55, 241, 0.17)',
					center: 'rgba(255, 238, 152, 0.69)',
					end: 'rgba(255, 238, 152, 0)'
				},
				params: [{
					title: 'Guild',
					icon: 'guild',
					color: 'green',
					list: [{
						title: 'Guild Challenges bets',
						star: true
					}, {
						title: 'Jouning Guild',
						star: false
					}, {
						title: 'Guild Voting',
						star: false
					}, {
						title: 'Guild Perks',
						star: true
					}, {
						title: 'Guild Challenge',
						star: false
					}]
				}, {
					title: 'PvP',
					icon: 'pvp',
					color: 'blue',
					list: [{
						title: 'PvP Tournaments',
						star: true
					}]
				}]
			}]
		};
	},
	components: { TokenBlock, Btn },
	methods: {
		activeAnimation() {
			this.animationSection = true;
			//this.$refs.dotteds.activeAnimation();
		},
		stopAnimation() {
			this.animationSection = false;
			//this.$refs.dotteds.stopAnimation();
		},
		openPopup(id) {
			this.$emit('openPopup', id);
		}
	}
}
</script>

<style lang="scss" scroped>
.tokensusage-section {
	padding: 87px 0;
	background: url('/images/tokensusage-section-bg.webp') 50% 50% no-repeat #090923;

	@media screen and (max-width: $sm) {
		padding: 60px 0;
	}

	@media screen and (max-width: $xs) {
		padding: 30px 0;
	}

	&__title {
		text-align: center;
		/* letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative; */
		margin-bottom: 20px;

		&:after {
			//content: attr(title);
			text-align: center;
			/* letter-spacing: 0.05em;
			color: rgba($white, 0.1);
			//filter: blur(4px);
			font: 700 48px/60px $titleFF;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transform: translate(22px, -27px); */
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

	&__desc {
		text-align: center;
		margin-bottom: 40px;
		font: 500 20px/1.6 $baseFF;
		color: #CECCD6;

		@media screen and (max-width: $md) {
			font: 16px/1.4 $baseFF;
		}

		@media screen and (max-width: $sm) {
			font: 14px/19px $baseFF;
			max-width: 255px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	&__row {
		overflow: visible !important;

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
		/* flex: 0 0 33.33%;
		max-width: 33.33%; */
		display: flex;
		justify-content: center;
		position: static;

		&:hover {
			z-index: 200 !important;
		}

		@media screen and (max-width: $sm) {
			display: block;
			opacity: 0;
			transition: opacity 1s;

			.token-block {
				//max-width: 140px;
				//margin-top: 103px;

				&__img {
					opacity: 0;
					transition: all 1s;
				}

				&__title,
				&__desc,
				&__params {
					opacity: 0;
					transition: all 1s;
				}
			}

			&.swiper-slide-active {
				opacity: 1;
				transition: all 1s;

				.token-block {
					//max-width: 100%;
					//margin-top: 0;

					&__img {
						opacity: 1;
						transition: all 1s;
					}

					&__title,
					&__desc,
					&__params {
						opacity: 1;
						transition: all 1s;
					}
				}
			}

			&.swiper-slide-next,
			&.swiper-slide-prev {
				opacity: 1;
				transition: all 1s;

				.token-block {
					//max-width: 180px;
					//margin-top: 84px;

					&__img {
						opacity: 0.6;
						transition: all 1s;
					}

					&__title,
					&__desc,
					&__params {
						opacity: 0;
						transition: all 1s;
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
				.token-block {
					//max-width: 120px;
					//margin: 78px 0 0;
				}
			}
		}
	}

	&__buttons {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		position: relative;

		@media screen and (max-width: $sm) {
			margin-top: 24px;
		}

		@media screen and (max-width: $xs) {
			margin: 16px auto 0;

			max-width: 280px;
			flex-direction: column;
		}
	}

	&__trigger {
		position: absolute;
		top: -28px;
		left: 0;
		background: url('/images/trigger-bg.svg') 50% 50%/contain no-repeat;
		color: $white;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 298px;
		padding: 7px 10px 20px;
		font: bold 16px/35px $titleFF;

		@media screen and (max-width: $sm) {
			//display: none;
			max-width: 190px;
			padding: 5px 0px 10px;
			top: -10px;
		}

		@media screen and (max-width: $xs) {
			//display: none;
			top: 0;
			left: 0;
			position: relative;
			order: 2;
			margin-top: 16px;
			max-width: 100%;
		}

		&:after {
			content: "";
			display: block;
			position: absolute;
			top: 100%;
			right: 0;
			height: 24px;
			width: 400px;
			pointer-events: none;
			background: url("/images/trigger-bg-bottom.svg") 100% 0/auto 100% no-repeat;
		}

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: -5px;
			left: 150px;
			height: 24px;
			width: 350px;
			pointer-events: none;
			background: url("/images/trigger-bg-top.svg") 0% 0/auto 100% no-repeat;

			@media screen and (max-width: $xs) {
				top: 0;
			}
		}

		img {
			margin-right: 7px;
		}
	}
}
</style>