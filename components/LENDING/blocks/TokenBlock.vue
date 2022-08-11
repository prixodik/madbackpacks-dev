<template>
	<div class="token-block" :class="{ 'is-active': activeBlock }">
		<div class="token-block__img">
			<AnimIcon :iconId="iconId" :icon="icon" :dottedColor="dottedColor" :floorColor="floorColor"
				:lightColor="lightColor">
			</AnimIcon>
		</div>
		<div class="token-block__title">{{ title }}</div>
		<div class="token-block__params">
			<div class="token-block__params-item" v-for="(param, index) in params" :key="index"
				@click.prevent="toggleActive(index)">
				<TokenParam :class="`token-param--item-${index} token-param--group-${iconId}`" :icon="param.icon"
					:color="param.color" :title="param.title" :list="param.list" :active="actives[index]">
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
			actives: [false, false, false],
			activeBlock: false,
		};
	},
	components: { AnimIcon, TokenParam },
	methods: {
		toggleActive(index) {
			console.log(index);
			//console.log(this.actives[index]);
			if (this.actives[index] === false) {

				this.closeParam();
				this.activeBlock = true;
				this.actives[index] = true;
			} else {
				this.closeParam();
				console.log(this.actives);
			}
		},
		closeParam() {
			this.actives = [false, false, false];
		}
	}
}
</script>

<style lang="scss" scroped>
.token-block {
	max-width: 340px;
	position: relative;

	&.is-active {
		z-index: 1000;
	}

	@media screen and (max-width: $xs) {
		max-width: 220px;
		margin: 0 auto;
	}

	&__img {
		margin-bottom: 8px;
		transition: all 0.3s;
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
		transition: all 0.3s;

		@media screen and (max-width: $md) {
			font-size: 30px;
		}

		@media screen and (max-width: $sm) {
			font-size: 40px;
			line-height: 50px;
			font-weight: 900;
		}
	}

	&__params {
		display: flex;
		justify-content: center;
		//margin: 0 -16px;
		transition: all 0.3s;

		@media screen and (max-width: $xs) {
			margin-top: -20px;
			margin-bottom: -20px;
		}

		&-item {
			flex: 0 0 117px;
			max-width: 117px;
			//padding: 0 16px;

			@media screen and (max-width: $md) {
				flex: 0 0 100px;
				max-width: 100px;
			}
		}
	}


}
</style>