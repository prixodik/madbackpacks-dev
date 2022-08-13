<template>
	<div class="soc-dropdown">
		<div class="soc-dropdown__head">
			<a class="soc-dropdown__current" :href="currentLink">
				<svg>
					<use :xlink:href="`/images/sprite-svg.svg#${currentIcon}`"></use>
				</svg>
			</a>
			<svg class="soc-dropdown__arrow" @click.prevent="showDrop = !showDrop">
				<use xlink:href="/images/sprite-svg.svg#arrow-left"></use>
			</svg>
		</div>

		<div class="soc-dropdown__list">
			<div class="soc-dropdown__item" :class="`soc-dropdown__item--${item.icon}`" v-for="item in list">
				<a :href="item.link">
					<svg>
						<use :xlink:href="`/images/sprite-svg.svg#${item.icon}`"></use>
					</svg>
				</a>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	name: "SocDropdown",
	data() {
		return {
			currentIcon: 'telegram',
			currentLink: '#',
			list: [{
				link: 'https://t.me/MadBackpacks',
				icon: 'telegram-en'
			}, {
				link: 'https://t.me/MadBackpacks_ru',
				icon: 'telegram-ru'
			}, {
				link: 'https://youtube.com/channel/UCv1vf4YMhL51biKoS5bwTBw',
				icon: 'youtube'
			}, {
				link: 'https://discord.gg/Wa9fdhz2qC',
				icon: 'discord'
			}, {
				link: 'https://www.instagram.com/mad_backpacks/',
				icon: 'instagram'
			}, {
				link: 'https://twitter.com/BackpacksMad',
				icon: 'twitter'
			}]

		};
	},
	components: {},
	methods: {

	}
}
</script>

<style lang="scss" scroped>
.soc-dropdown {
	position: relative;
	z-index: 1;
	width: 47px;
	flex: 0 0 auto;

	&__head {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all .4s;
	}

	&__current {
		svg {
			fill: none;
			stroke: #12F3D8;
			fill: #12F3D8;
			width: 21px;
			height: 21px;
			display: block;
		}
	}

	&__arrow {
		transform: rotate(-90deg);
		fill: rgba(18, 243, 216, 0.6);
		width: 7px;
		height: 9px;
		margin-left: 8px;
	}

	&__list {
		position: absolute;
		top: -13px;
		left: -5px;
		width: 47px;
		background: rgba(217, 217, 217, 0.1);
		border-radius: 24px;
		padding: 12px 8px;
		opacity: 0;
		pointer-events: none;
		transition: all .4s;
	}

	&__item {
		width: 31px;
		height: 31px;
		margin-bottom: 8px;

		a {
			width: 31px;
			height: 31px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		svg {
			width: 21px;
			height: 21px;
			fill: #12F3D8;
			stroke: #12F3D8;
		}

		&--telegram-en,
		&--telegram-ru {
			svg {
				width: 26px;
				height: 30px;
			}
		}
	}

	&:hover & {
		&__head {
			opacity: 0;
		}

		&__list {
			display: block;
			opacity: 1;
			pointer-events: auto;
		}
	}
}
</style>