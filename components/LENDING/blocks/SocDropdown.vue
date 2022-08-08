<template>
	<div class="soc-dropdown">
		<div class="soc-dropdown__head">
			<a class="soc-dropdown__current" :href="currentLink">
				<svg>
					<use :xlink:href="`images/sprite-svg.svg#${currentIcon}`"></use>
				</svg>
			</a>
			<svg class="soc-dropdown__arrow" @click.prevent="showDrop = !showDrop">
				<use xlink:href="images/sprite-svg.svg#arrow-left"></use>
			</svg>
		</div>

		<div class="soc-dropdown__list">
			<div class="soc-dropdown__item" v-for="item in list">
				<a :href="item.link">
					<svg>
						<use :xlink:href="`images/sprite-svg.svg#${item.icon}`"></use>
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
				link: '#',
				icon: 'telegram'
			}, {
				link: '##',
				icon: 'youtube'
			}, {
				link: '###',
				icon: 'discord'
			}, {
				link: '####',
				icon: 'instagram'
			}, {
				link: '###',
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
		top: -17px;
		left: -7px;
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