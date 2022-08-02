<template>
	<section class="tokensusage-section">
		<div class="tokensusage-section__container container">

			<div class="tokensusage-section__title" :title="title">{{ title }}</div>
			<div class="tokensusage-section__desc">$WWMB in-game utility token | WeWay $WWY token</div>
			<div class="tokensusage-section__row row">
				<div class="tokensusage-section__col col-4" v-for="token in tokens">
					<TokenBlock :title="token.title" :desc="token.desc" :iconId="token.iconId" :icon="token.animIcon"
						:dottedColor="token.dottedColor" :floorColor="token.floorColor" :lightColor="token.lightColor">
					</TokenBlock>
				</div>
			</div>

		</div>
	</section>
</template>
<script>
import TokenBlock from '../blocks/TokenBlock.vue';

export default {
	name: "TokensUsageSection",
	data() {
		return {
			title: '_Tokens & usage',
			desc: '$WWMB in-game utility token | WeWay $WWY token',

			tokens: [{
				title: '$WWMB',
				desc: 'Backpack upgrade Backpack repair Lootbox purchase Backpacks breeding',
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
			}, {
				title: '$WWY',
				desc: 'Joining a guild Guild perks PvP Tournaments Guild Challenge Bets',
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
				}
			}]
		};
	},
	components: { TokenBlock }
}
</script>

<style lang="scss" scroped>
.tokensusage-section {
	padding: 87px 0;
	background: url('/images/tokensusage-section-bg.png') 50% 50% no-repeat #090923;

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 20px;

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
			transform: translate(22px, -27px);
		}
	}

	&__desc {
		text-align: center;
		margin-bottom: 40px;
		font: 500 16px/1.6 $baseFF;
		color: #CECCD6;
	}

	&__row {
		display: flex;
	}

	&__col {
		flex: 0 0 33.33%;
		max-width: 33.33%;
		display: flex;
		justify-content: center;
	}
}
</style>