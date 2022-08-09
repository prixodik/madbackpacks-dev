<template>
	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__row">
				<!-- <div class="footer__left">
				<a href="#" class="footer__burger">Menu</a>
			</div> -->
				<div class="footer__logo">
					<Webp src="/images/logo.png" alt="MadBackpacks"></Webp>
					<!-- <img src="/images/logo.png" alt="MadBackpacks"> -->
				</div>
				<div class="footer__menu">
					<a href="#" v-scroll-to="'#about-section'" class="footer__menu-item">about</a>
					<a href="#" v-scroll-to="'#dino-section'" class="footer__menu-item">Mechanics</a>
					<a href="#" v-scroll-to="'#tokenomics-section'" class="footer__menu-item">Tokenomics</a>
					<a href="#" v-scroll-to="'#roadmap-section'" class="footer__menu-item">roadmap</a>
					<a href="#" v-scroll-to="'#partners-section'" class="footer__menu-item">Partners & Team</a>

				</div>

				<SocList class="footer__soc"></SocList>
			</div>
			<div class="footer__copyright">Your personal data is processed in accordance with our <a
					href="https://madbackpacks.io/pdf/Privacy.pdf" target="_blank">Privacy
					Notice</a></div>

		</div>
	</footer>
</template>
<script>
import SocList from '../blocks/SocList.vue';
import Webp from '../blocks/Webp.vue';

export default {
	name: "Footer",
	data() {
		return {};
	},
	components: { SocList, Webp }
}
</script>

<style lang="scss" scroped>
.footer {
	padding: 42px 0 16px;
	background: url('/images/footer-bg.svg') 0 0 repeat-x;

	@media screen and (max-width: $sm) {
		padding: 28px 0 45px;
		background-position: 0 268px;
	}

	@media screen and (max-width: $xs) {
		padding: 28px 0 78px;
		background-position: 0 210px;
	}

	&__row {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: $md) {
			flex-wrap: wrap;
		}
	}

	&__copyright {
		text-align: center;
		font: 14px/20px $baseFF;
		letter-spacing: 0.04em;
		margin-top: 10px;
		color: rgba(148, 250, 255, 0.3);

		@media screen and (max-width: $md) {
			margin-top: 24px;
		}

		@media screen and (max-width: $sm) {
			max-width: 320px;
			margin: 32px auto 0;
			font-size: 12px;
			line-height: 17px;
		}

		@media screen and (max-width: $xs) {
			font-size: 12px;
			line-height: 17px;
			margin-top: 40px;
		}
	}


	&__logo {
		flex: 0 0 309px;
		max-width: 309px;
		/* margin-left: -36px; */

		@media screen and (max-width: $md) {
			flex: 0 0 100%;
			max-width: 100%;
			display: flex;
			justify-content: center;
			margin-bottom: 42px;

			img {
				width: 528px;
			}
		}

		@media screen and (max-width: $sm) {
			margin-bottom: 104px;
		}

		@media screen and (max-width: $xs) {
			margin-bottom: 98px;
		}
	}


	&__menu {
		display: flex;
		font: bold 12px/15px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
		margin-right: 48px;

		@media screen and (max-width: $sm) {
			display: block;
			margin: 0 0 130px;
			flex: 0 0 100%;
			max-width: 100%;
			font: bold 18px/1.3 "Orbitron", sans-serif;
		}

		@media screen and (max-width: $xs) {
			margin-bottom: 60px;
		}

		&-item {
			margin-right: 26px;
			display: block;
			position: relative;

			@media screen and (max-width: $sm) {
				margin: 0 0 32px;
				text-align: center;

				&:last-child {
					margin-bottom: 0;
				}
			}

			@media screen and (max-width: $xs) {
				margin: 0 0 28px;
				text-align: center;

				&:last-child {
					margin-bottom: 0;
				}
			}

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

		@media screen and (max-width: $sm) {
			display: flex;
			justify-content: center;
			flex: 0 0 100%;
			max-width: 100%;
		}
	}
}
</style>