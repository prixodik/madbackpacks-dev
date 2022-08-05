<template>
	<section class="about-section" id="about-section">
		<div class="about-section__container container">

			<div class="about-section__title" :title="title">{{ title }}</div>
			<div class="about-section__desc" v-html="desc"></div>
			<div class="about-section__row row">
				<div class="about-section__col col-4" v-for="about in abouts">
					<AboutBlock :title="about.title" :desc="about.desc" :icon="about.icon" :delay="about.delay">
					</AboutBlock>
				</div>
			</div>

		</div>
	</section>
</template>
<script>
import AboutBlock from '../blocks/AboutBlock.vue';

export default {
	name: "AboutSection",
	data() {
		return {
			title: '_About the game',
			desc: 'MadBackpacks is the next-gen AR game powered by WeWay<br> Bringing augmented reality to your everyday life for an ultimate gaming experience',

			abouts: [{
				title: '<span>Immersive</span> <br>and Fun',
				desc: 'Use AR navigation and play<br> mini-games to earn coins',
				icon: 'images/about-block-img-1.png',
				delay: '0'
			}, {
				title: 'A part of daily <br><span>lives</span>',
				desc: 'Live your life and collect coins',
				icon: 'images/about-block-img-2.png',
				delay: '1.5s'
			}, {
				title: 'Play and Earn <br><span>together</span>',
				desc: 'Join a guild to earn more and <br>control wider areas',
				icon: 'images/about-block-img-3.png',
				delay: '3s'
			}, {
				title: '<span>Augmented</span> <br>Reality',
				desc: 'Developed by a world-class <br>3D graphics studio',
				icon: 'images/about-block-img-4.png',
				delay: '4.5s'
			}]
		};
	},
	components: { AboutBlock }
}
</script>

<style lang="scss" scroped>
.about-section {
	padding: 87px 0;
	background: url('/images/about-section-line-top.svg') 0 0 no-repeat, url('/images/about-section-bg.png') 50% 50% no-repeat #090923;

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 24px;

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
		margin-bottom: 23px;
		font: 500 20px/1.6 $baseFF;
		color: #CECCD6;
	}

	&__row {
		display: flex;
	}

	&__col {
		flex: 0 0 25%;
		max-width: 25%;
		display: flex;
		justify-content: center;
	}
}
</style>