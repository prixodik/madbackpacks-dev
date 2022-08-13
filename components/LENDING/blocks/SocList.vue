<template>
	<div class="soc-list">
		<div class="soc-list__item soc-list__item--lang">
			<a href="https://t.me/MadBackpacks" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#telegram-en"></use>
				</svg>
			</a>
		</div>
		<div class="soc-list__item soc-list__item--lang">
			<a href="https://t.me/MadBackpacks_ru" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#telegram-ru"></use>
				</svg>
			</a>
		</div>
		<div class="soc-list__item">
			<a href="https://www.instagram.com/mad_backpacks/" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#instagram"></use>
				</svg>
			</a>
		</div>
		<div class="soc-list__item">
			<a href="https://twitter.com/BackpacksMad" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#twitter"></use>
				</svg>
			</a>
		</div>
		<div class="soc-list__item">
			<a href="https://youtube.com/channel/UCv1vf4YMhL51biKoS5bwTBw" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#youtube"></use>
				</svg>
			</a>
		</div>
		<div class="soc-list__item">
			<a href="https://discord.gg/Wa9fdhz2qC" target="_blank">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#discord"></use>
				</svg>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SocList',
	mounted() {
		//console.log('Component mounted header.')
	}
}
</script>

<style lang="scss" scoped>
.soc-list {
	display: flex;

	&__item {
		margin-right: 24px;

		@media screen and (max-width: $sm) {
			margin-right: 46px;
		}

		@media screen and (max-width: $xs) {
			margin-right: 26px;
		}

		&:last-child {
			margin-right: 0;
		}

		a {
			display: flex;
			width: 21px;
			height: 21px;

			svg {
				fill: #12F3D8;
				stroke: #12F3D8;
				display: block;
				width: 21px;
				height: 21px;
				transition: all .3s;
			}

			@media screen and (max-width: $sm) {
				width: 32px;
				height: 32px;

				svg {
					width: 32px;
					height: 32px;
				}
			}

			@media screen and (max-width: $xs) {
				width: 27px;
				height: 27px;

				svg {
					width: 27px;
					height: 27px;
				}
			}

			&:hover {
				svg {
					fill: $white;
				}
			}
		}

		&--lang {
			a {
				width: 26px;
				height: 30px;

				svg {
					width: 26px;
					height: 30px;
				}

				@media screen and (max-width: $sm) {
					width: 29px;
					height: 33px;

					svg {
						width: 29px;
						height: 33px;
					}
				}

				@media screen and (max-width: $xs) {
					width: 26px;
					height: 30px;

					svg {
						width: 26px;
						height: 30px;
					}
				}
			}
		}
	}

	&--big {
		justify-content: center;
	}

	&--big & {
		&__item {
			margin-right: 56px;

			@media screen and (max-width: $xs) {
				margin-right: 38px;
			}

			&:last-child {
				margin-right: 0;
			}

			a {

				width: 32px;
				height: 32px;

				svg {
					width: 32px;
					height: 32px;
				}


				@media screen and (max-width: $xs) {
					width: 27px;
					height: 27px;

					svg {
						width: 27px;
						height: 27px;
					}
				}

			}
		}
	}

}
</style>
