<template>
	<div class="token-block">
		<div class="token-block__img">
			<AnimIcon :iconId="iconId" :icon="icon" :dottedColor="dottedColor" :floorColor="floorColor"
				:lightColor="lightColor">
			</AnimIcon>
		</div>
		<div class="token-block__title">{{ title }}</div>
		<div class="token-block__params">
			<div class="token-block__params-item" v-for="(param, index) in params" :key="index">
				<TokenParam :class="`token-param--item-${index} token-param--group-${iconId}`" :icon="param.icon"
					:color="param.color" :title="param.title" :list="param.list">
				</TokenParam>
			</div>
		</div>
	</div>
</template>
<script>
import AnimIcon from "../blocks/AnimIcon.vue";
import TokenParam from "./TokenParam.vue";

export default {
	name: "TokenBlock",
	props: ['title', 'desc', 'iconId', 'icon', 'dottedColor', 'floorColor', 'lightColor', 'params'],
	data() {
		return {

		};
	},
	components: { AnimIcon, TokenParam }
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
		margin-bottom: 27px;
		text-align: center;

		/* &:after {
			content: "";
			display: block;
			width: 100%;
			height: 4px;
			background: url('/images/token-block-title-bg.png') 0 0 no-repeat;
			position: absolute;
			bottom: 0;
			left: 0;

		} */
	}

	&__params {
		display: flex;
		justify-content: center;
		margin: 0 -16px;

		&-item {
			flex: 0 0 117px;
			max-width: 117px;
			padding: 0 16px;
		}
	}


}
</style>