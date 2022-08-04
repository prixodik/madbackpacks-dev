<template>
	<section class="roadmap-section">

		<Dotteds class="roadmap-section__dotteds" :count="12"></Dotteds>

		<div class="roadmap-section__container container">
			<div class="roadmap-section__title" :title="title">{{ title }}</div>

			<div class="roadmap-section__row">

			</div>

		</div>
	</section>
</template>
<script>
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "RoadmapSection",
	data() {
		return {
			title: '_Roadmap',

		};
	},
	components: { Dotteds },
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

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 21px;
		margin-left: -52px;

		&:after {
			content: attr(title);
			text-align: center;
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

}
</style>