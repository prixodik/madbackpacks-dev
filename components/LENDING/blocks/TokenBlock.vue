<template>
	<div class="token-block">
		<div class="token-block__img">
			<AnimIcon :iconId="iconId" :icon="icon" :dottedColor="dottedColor" :floorColor="floorColor"
				:lightColor="lightColor">
			</AnimIcon>
		</div>
		<div class="token-block__title">{{ title }}</div>
		<div class="token-block__desc">{{ desc }}</div>
	</div>
</template>
<script>
import AnimIcon from "../blocks/AnimIcon.vue";

export default {
	name: "TokenBlock",
	props: ['title', 'desc', 'iconId', 'icon', 'dottedColor', 'floorColor', 'lightColor'],
	data() {
		return {

			/* iconId: 1,
			iconId2: 2,
			iconId3: 3,

			animIcon1: 'images/icon-anim-1.png',
			animIcon2: 'images/icon-anim-2.png',
			animIcon3: 'images/icon-anim-3.png',

			dottedColor: '#94ffec',
			dottedColor2: '#FE37F1',
			dottedColor3: '#FFEE98',

			floorColor: {
				start: 'rgba(209,254,206,0)',
				end: 'rgba(105,245,218,0.46)'
			},
			floorColor2: {
				start: 'rgba(209,254,206,0)',
				end: 'rgba(254,55,241,0.46)'
			},
			floorColor3: {
				start: 'rgba(209, 254, 206, 0)',
				end: 'rgba(255, 238, 152, 0.46)'
			},

			lightColor: {
				start: 'rgba(18,243,216,0.17)',
				center: 'rgba(148,255,236,0.69)',
				end: 'rgba(148,255,236,0)'
			},
			lightColor2: {
				start: 'rgba(254,55,241,0.17)',
				center: 'rgba(254,55,241,0.69)',
				end: 'rgba(254,55,241,0)'
			},
			lightColor3: {
				start: 'gba(254, 55, 241, 0.17)',
				center: 'rgba(255, 238, 152, 0.69)',
				end: 'rgba(255, 238, 152, 0)'
			} */
		};
	},
	components: { AnimIcon }
}
</script>

<style lang="scss" scroped>
.token-block {
	max-width: 340px;

	&__img {
		margin-bottom: 8px;
	}

	&__title {
		letter-spacing: 0.05em;
		font: 700 32px/40px $titleFF;
		background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		position: relative;
		padding-bottom: 45px;
		margin-bottom: 33px;

		&:after {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: url('/images/token-block-title-bg.png') 0 0 no-repeat;
			position: absolute;
			bottom: 0;
			left: 0;

		}
	}

	&__desc {
		font-weight: 900;
		font-size: 20px;
		line-height: 42px;
		font-family: $titleFF;
		max-width: 310px;

		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
	}
}
</style>