<template>
	<section class="partners-section">
		<div class="partners-section__container container">
			<div class="partners-section__title" :title="title">{{ title }}</div>

			<div class="partners-section__group">
				<div class="partners-section__subtitle"><span>{{ subtitle }}</span></div>
				<div class="partners-section__list">
					<div class="partners-section__list-item" v-for="item in list">
						<img :src="item.src" :alt="item.title">
					</div>
				</div>
			</div>

			<div class="partners-section__group">
				<div class="partners-section__subtitle"><span>{{ subtitle2 }}</span></div>
				<div class="partners-section__list">
					<div class="partners-section__list-item" v-for="item in list2">
						<img :src="item.src" :alt="item.title">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>

export default {
	name: "PartnersSection",
	data() {
		return {
			title: '_WeWay partners and media',
			subtitle: 'Strategic Partnerships',
			list: [{
				src: 'images/partner-logo-1.png',
				title: ''
			}, {
				src: 'images/partner-logo-2.png',
				title: ''
			}, {
				src: 'images/partner-logo-3.png',
				title: ''
			}, {
				src: 'images/partner-logo-4.png',
				title: ''
			}, {
				src: 'images/partner-logo-5.png',
				title: ''
			}, {
				src: 'images/partner-logo-6.png',
				title: ''
			}, {
				src: 'images/partner-logo-7.png',
				title: ''
			}],

			subtitle2: 'Exchanges',
			list2: [{
				src: 'images/partner-logo-8.png',
				title: ''
			}, {
				src: 'images/partner-logo-9.png',
				title: ''
			}, {
				src: 'images/partner-logo-10.png',
				title: ''
			}, {
				src: 'images/partner-logo-11.png',
				title: ''
			}, {
				src: 'images/partner-logo-12.png',
				title: ''
			}, {
				src: 'images/partner-logo-13.png',
				title: ''
			}, {
				src: 'images/partner-logo-14.png',
				title: ''
			}],

		};
	},
	components: {}
}
</script>

<style lang="scss" scroped>
.partners-section {
	padding: 84px 0 168px;
	background: url('/images/partners-section-top-line.svg') 0 0 repeat-x, url('/images/about-section-bg.png') 50% 50% no-repeat #090923;
	overflow: hidden;

	&__title {
		text-align: center;
		letter-spacing: 0.05em;
		color: $white;
		font: 700 48px/60px $titleFF;
		position: relative;
		margin-bottom: 64px;

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

	&__subtitle {
		text-align: center;
		margin-bottom: 47px;
		font: bold 24px/30px $titleFF;
		letter-spacing: 0.05em;
		background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;


		span {
			display: inline-block;
			position: relative;
			background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			text-fill-color: transparent;


			&:before,
			&:after {
				content: "";
				width: 848px;
				height: 4px;
				background: url('/images/partners-section-subtitle-line.svg') 0 0 no-repeat;
				position: absolute;
				top: calc(50% - 2px);
				left: calc(100% + 24px);
			}

			&:after {
				left: auto;
				right: calc(100% + 24px);
			}
		}
	}

	&__group {
		margin-bottom: 48px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 0 -22px -40px;

		&-item {
			margin-bottom: 40px;
			padding: 0 22px;
			flex: 0 0 25%;
			max-width: 25%;
		}
	}
}
</style>