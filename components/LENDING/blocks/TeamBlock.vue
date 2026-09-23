<template>
	<div class="team-block">
		<div class="team-block__img">
			<Webp :src="img" :alt="name"></Webp>
			<!-- <img :src="img" :alt="name"> -->
			<!-- <a :href="socLink" class="team-block__soc btn btn--soc btn--pink">
				<svg>
					<use xlink:href="/madbackpacks-dev/images/sprite-svg.svg#linkedin"></use>
				</svg>
			</a> -->

			<Btn v-if="socLink" :tag="'a'" :href="socLink" class="team-block__soc btn--soc btn--pink">
				<svg>
					<use xlink:href="/madbackpacks-dev/images/sprite-svg.svg#linkedin"></use>
				</svg>
			</Btn>
		</div>
		<div class="team-block__name">{{ name }}</div>
		<div class="team-block__position">{{ position }}</div>

	</div>
</template>
<script>
import Btn from './Btn.vue';
import Webp from './Webp.vue';
export default {
	name: "TeamBlock",
	props: ['name', 'position', 'socLink', 'img'],
	data() {
		return {


		};
	},
	components: { Btn, Webp }
}
</script>

<style lang="scss" scroped>
.team-block {
	&__img {
		position: relative;
		margin-bottom: 45px;

		@media screen and (max-width: $md) {
			margin-bottom: 30px;
		}

		@media screen and (max-width: $sm) {
			height: 282px;
			margin-bottom: 32px;
		}

		img {
			border-radius: 6px;
			width: 100%;
			object-fit: cover;

			@media screen and (max-width: $sm) {
				height: 100%;
			}
		}
	}

	&__soc {
		position: absolute !important;
		;
		right: 28px;
		bottom: -22px;

		@media screen and (max-width: $sm) {
			right: 16px;
			bottom: -17px;
		}
	}

	&__name {
		text-align: center;
		margin-bottom: 8px;
		font: 900 20px/25px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;

		@media screen and (max-width: $sm) {
			font-size: 17px;
		}
	}

	&__position {
		color: #01C5BA;
		font: 500 16px/1.6 $titleFF;
		text-align: center;

		@media screen and (max-width: $sm) {
			font-size: 14px;
		}
	}
}
</style>