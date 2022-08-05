<template>
	<footer class="footer">
		<div class="footer__container container">

			<!-- <div class="footer__left">
				<a href="#" class="footer__burger">Menu</a>
			</div> -->
			<div class="footer__logo">
				<img src="/images/logo.png" alt="MadBackpacks">
			</div>
			<div class="footer__menu">
				<a href="#" v-scroll-to="'#about-section'" class="footer__menu-item">about</a>
				<a href="#" v-scroll-to="'#tokensusage-section'" class="footer__menu-item">token</a>
				<a href="#" v-scroll-to="'#roadmap-section'" class="footer__menu-item">roadmap</a>
				<a href="#" v-scroll-to="'#partners-section'" class="footer__menu-item">team & partners</a>
				<a href="#" v-scroll-to="'#join-section'" class="footer__menu-item">how to play</a>
				<a href="#" v-scroll-to="'#tokenomics-section'" class="footer__menu-item">Tokenomics</a>
			</div>

			<SocList class="footer__soc"></SocList>

		</div>
	</footer>
</template>
<script>
import SocList from '../blocks/SocList.vue';

export default {
	name: "Footer",
	data() {
		return {};
	},
	components: { SocList }
}
</script>

<style lang="scss" scroped>
.footer {
	padding: 42px 0 46px;
	background: url('/images/footer-bg.svg') 0 0 repeat-x;

	&__container {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}

	/* &__left {
		padding-top: 47px;
	}

	&__right {
		padding-top: 47px;
	} */

	&__logo {
		flex: 0 0 309px;
		max-width: 309px;
		/* margin-left: -36px; */
	}


	&__menu {
		display: flex;
		font: bold 12px/15px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
		margin-right: 48px;

		&-item {
			margin-right: 26px;
			display: block;
			position: relative;

			&:after {
				content: "";
				width: 0;
				height: 2px;
				background: $white;
				position: absolute;
				bottom: -4px;
				left: 50%;
				transition: all .4s;
			}

			&:hover {
				&:after {
					left: 0;
					width: 100%;
				}
			}
		}

		&:last-child {
			margin-right: 0;
		}
	}

	&__soc {
		margin-right: 28px;
	}
}
</style>