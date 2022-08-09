<template>
	<div class="mob-menu" v-bind:class="{ 'is-active': active }">

		<div class="mob-menu__menu">
			<div class="mob-menu__title title-h1" title="_Menu">
				_Menu
			</div>
			<div class="mob-menu__menu-item">
				<a href="#" v-scroll-to="'#about-section'" @click.prevent="hideMenu()">about</a>
			</div>
			<div class="mob-menu__menu-item">
				<a href="#" v-scroll-to="'#dino-section'" @click.prevent="hideMenu()">Mechanics</a>
			</div>
			<div class="mob-menu__menu-item">
				<a href="#" v-scroll-to="'#tokensusage-section'" @click.prevent="hideMenu()">Tokenomics</a>
			</div>
			<div class="mob-menu__menu-item">
				<a href="#" v-scroll-to="'#roadmap-section'" @click.prevent="hideMenu()">roadmap</a>
			</div>
			<div class="mob-menu__menu-item">
				<a href="#" v-scroll-to="'#partners-section'" @click.prevent="hideMenu()">Partners & Team</a>
			</div>
		</div>
		<SocList class="mob-menu__soc soc-list--big"></SocList>
		<div class="mob-menu__logo">
			<Webp src="/images/logo.png" alt="MadBackpacks"></Webp>
			<!-- <img src="/images/logo.png" alt="MadBackpacks"> -->
		</div>
		<div class="mob-menu__copyright">Your personal data is processed in accordance with our <a
				href="https://madbackpacks.io/pdf/Privacy.pdf" target="_blank">Privacy
				Notice</a></div>
	</div>
</template>

<script>
import SocList from './SocList.vue';
import Webp from './Webp.vue';
export default {
	name: "MobMenu",
	data() {
		return {
			active: false,
		};
	},
	created() {
		/* this.showActive(); */
	},
	methods: {
		toggleMenu() {
			this.active = !this.active;
			if (this.active === true) {
				let body = document.querySelector('html');
				body.classList.add('is-overflow');
			} else {
				let body = document.querySelector('html');
				body.classList.remove('is-overflow');
			}
		},
		hideMenu() {
			this.active = false;
			let body = document.querySelector('html');
			body.classList.remove('is-overflow');
			this.$emit('hideMenu');
		},
	},
	components: { SocList, Webp }
};
</script>

<style lang="scss" scoped>
.mob-menu {
	background: url('/images/mob-menu-line.svg') 0 88px repeat-x, url('/images/mob-menu-bg.png') 0 0/cover no-repeat #090923;
	padding: 88px 60px 20px;
	position: fixed;
	top: 0;
	right: -105%;
	z-index: 1000;
	height: 100vh;
	width: 100%;
	max-width: 648px;
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	transition: all 0.7s;

	@media screen and (max-width: $md) {
		display: flex;
	}

	@media screen and (max-width: $xs) {
		background: url('/images/mob-menu-line.svg') 0 62px repeat-x, url('/images/mob-menu-bg.png') 0 0/cover no-repeat #090923;
		padding: 60px 40px 20px;
	}

	&.is-active {
		right: 0;
	}

	&__title {
		margin-bottom: 80px;

		@media screen and (max-width: $xs) {
			margin-bottom: 40px;
		}
	}

	&__menu {
		//margin-bottom: 187px;
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;

		&-item {
			margin-bottom: 32px;
			font: bold 18px/1.3 $titleFF;
			text-transform: uppercase;

			@media screen and (max-width: $xs) {
				font-size: 16px;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	&__logo {
		display: flex;
		justify-content: center;
		margin-top: 32px;
	}

	&__copyright {
		margin-top: 7px;
		text-align: center;
		letter-spacing: 0.04em;

		color: rgba(148, 250, 255, 0.3);
		font: 300 12px/1.3 $baseFF;
	}
}
</style>
