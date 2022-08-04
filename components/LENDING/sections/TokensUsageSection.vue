<template>
	<section class="tokensusage-section">
		<div class="tokensusage-section__container container">

			<div class="tokensusage-section__title" :title="title">{{ title }}</div>
			<div class="tokensusage-section__desc">$WWMB in-game utility token | WeWay $WWY token</div>
			<div class="tokensusage-section__row row">
				<div class="tokensusage-section__col col-4" v-for="token in tokens">
					<TokenBlock :title="token.title" :desc="token.desc" :iconId="token.iconId" :icon="token.animIcon"
						:dottedColor="token.dottedColor" :floorColor="token.floorColor" :lightColor="token.lightColor"
						:params="token.params">
					</TokenBlock>
				</div>
			</div>

			<div class="tokensusage-section__buttons">
				<div class="tokensusage-section__trigger">
					<img src="images/star.svg" alt="">
					<span>Burn Triggers</span>
				</div>
				<a href="#" class="btn">GET WWMB</a>
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
				//desc: 'Backpack upgrade Backpack repair Lootbox purchase Backpacks breeding',
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
				params: [{
					title: 'In - App',
					icon: 'mobile',
					color: 'yellow',
					list: [{
						title: 'Backpack Upgrade',
						star: true
					}, {
						title: 'Backpack Repair',
						star: true
					}, {
						title: 'Backpack Breeding',
						star: true
					}, {
						title: 'Backpack Purchase',
						star: false
					}, {
						title: 'Backpack Burn',
						star: false
					}, {
						title: 'Lootbox Purchase',
						star: true
					}]
				}, {
					title: 'Guild',
					icon: 'guild',
					color: 'green',
					list: [{
						title: 'Guild Territory Control',
						star: false
					}, {
						title: 'Guild Ladder',
						star: false
					}]
				}, {
					title: 'PvP',
					icon: 'pvp',
					color: 'blue',
					list: [{
						title: 'PvP Ladder',
						star: false
					}, {
						title: 'PvP Chalenges',
						star: false
					}]
				}]
			}, {
				title: '$WWY',
				//desc: 'Joining a guild Guild perks PvP Tournaments Guild Challenge Bets',
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
				params: [{
					title: 'In - App',
					icon: 'mobile',
					color: 'yellow',
					list: [{
						title: 'Quests',
						star: false
					}]
				}, {
					title: 'In - Game',
					icon: 'game',
					color: 'green',
					list: [{
						title: 'Mini - game',
						star: false
					}]
				}, {
					title: 'Madbackpacs Platform',
					icon: 'shop',
					color: 'pink',
					list: [{
						title: 'Backpacks Purchase',
						star: false
					}, {
						title: 'Staking',
						star: false
					}, {
						title: 'Lending & Borrowing ',
						star: false
					}]
				}]
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
				},
				params: [{
					title: 'Guild',
					icon: 'guild',
					color: 'green',
					list: [{
						title: 'Guild Challenges bets',
						star: true
					}, {
						title: 'Jouning Guild',
						star: false
					}, {
						title: 'Guild Voting',
						star: false
					}, {
						title: 'Guild Perks',
						star: true
					}, {
						title: 'Guild Challenge',
						star: false
					}]
				}, {
					title: 'PvP',
					icon: 'pvp',
					color: 'blue',
					list: [{
						title: 'PvP Tournaments',
						star: true
					}]
				}]
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
		font: 500 20px/1.6 $baseFF;
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

	&__buttons {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		position: relative;
	}

	&__trigger {
		position: absolute;
		top: -28px;
		left: 0;
		background: url('/images/trigger-bg.svg') 50% 50%/contain no-repeat;
		color: $white;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 298px;
		padding: 7px 10px 20px;
		font: bold 16px/35px $titleFF;

		&:after {
			content: "";
			display: block;
			position: absolute;
			top: 100%;
			right: 0;
			height: 24px;
			width: 400px;
			pointer-events: none;
			background: url("/images/trigger-bg-bottom.svg") 100% 0/auto 100% no-repeat;
		}

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: -5px;
			left: 150px;
			height: 24px;
			width: 350px;
			pointer-events: none;
			background: url("/images/trigger-bg-top.svg") 0% 0/auto 100% no-repeat;
		}

		img {
			margin-right: 7px;
		}
	}
}
</style>