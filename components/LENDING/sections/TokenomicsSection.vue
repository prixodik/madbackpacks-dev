<template>
	<section class="tokenomics-section">

		<Dotteds class="tokenomics-section__dotteds" :count="15"></Dotteds>

		<div class="tokenomics-section__container container">
			<div class="tokenomics-section__title" :title="title">{{ title }}</div>
			<div class="tokenomics-section__desc">{{ desc }}</div>


		</div>
	</section>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Dotteds from '../blocks/Dotteds.vue';

export default {
	name: "TokenomicsSection",
	data() {
		return {
			title: '_Tokenomics',
			desc: 'As for today, projects are limited to:',

		};
	},
	components: { KinesisContainer, KinesisElement, Dotteds },
	methods: {
	}
}
</script>

<style lang="scss" scroped>
.tokenomics-section {
	padding: 75px 0 84px;
	position: relative;
	background: url('/images/tokenomics-section-bg.png') 50% 100% no-repeat;

	&:before {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background: url('/images/tokenomics-section-line-top.svg') 100% 0 no-repeat;
		position: absolute;
		top: -2px;
		left: 0;
	}

	&__container {
		position: relative;


	}

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 24px;
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