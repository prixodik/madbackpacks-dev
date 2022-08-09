<template>
	<header class="header">
		<div class="header__container container">

			<!-- <div class="header__left">
				<a href="#" class="header__burger">Menu</a>
			</div> -->
			<div class="header__logo">
				<img src="/images/logo.png" alt="MadBackpacks">
			</div>
			<div class="header__menu">
				<a href="#" v-scroll-to="'#about-section'" class="header__menu-item">about</a>
				<a href="#" v-scroll-to="'#dino-section'" class="header__menu-item">Mechanics</a>
				<a href="#" v-scroll-to="'#tokenomics-section'" class="header__menu-item">Tokenomics</a>
				<a href="#" v-scroll-to="'#roadmap-section'" class="header__menu-item">roadmap</a>
				<a href="#" v-scroll-to="'#partners-section'" class="header__menu-item">Partners & Team</a>
			</div>

			<SocDropdown class="header__soc"></SocDropdown>
			<a href="#" class="header__burger btn btn--burger" :class="{ 'is-active': mobileMenuShow }"
				@click.prevent="mobileMenuToggle()">
				<span></span>
				<span></span>
			</a>

		</div>

		<MobMenu ref="mobmenu" @hideMenu="mobileMenuHide()"></MobMenu>
	</header>
</template>
<script>
import SocDropdown from '../blocks/SocDropdown.vue';
import MobMenu from '../blocks/MobMenu.vue';

export default {
	name: "Header",
	data() {
		return {
			mobileMenuShow: false
		};
	},
	components: { SocDropdown, MobMenu },
	methods: {
		mobileMenuToggle() {
			this.mobileMenuShow = !this.mobileMenuShow;
			this.$refs.mobmenu.toggleMenu();
		},
		mobileMenuHide() {
			this.mobileMenuShow = false;
			//this.$refs.mobmenu.toggleMenu();
		}
	}
}
</script>

<style lang="scss" scroped>
.header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	padding: 28px 0 0;

	@media screen and (max-width: $md) {
		padding: 8px 0 0;
	}

	@media screen and (max-width: $sm) {
		padding: 8px 0 0;
	}

	@media screen and (max-width: $xs) {
		padding: 0;
		height: 60px;
	}

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
		flex: 0 0 266px;
		max-width: 266px;
		margin-left: -36px;

		@media screen and (max-width: $sm) {
			flex: 0 0 167px;
			max-width: 167px;
			margin-left: -20px;
		}

		@media screen and (max-width: $xs) {
			flex: 0 0 162px;
			max-width: 162px;
			margin-left: -18px;
		}
	}

	&__burger {
		display: none !important;

		&.is-active {
			z-index: 1002;
		}

		@media screen and (max-width: $md) {
			display: flex !important;
		}
	}

	&__soc {
		@media screen and (max-width: $md) {
			display: none;
		}
	}

	&__menu {
		display: flex;
		font: bold 16px/20px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
		justify-content: flex-end;
		flex: 1 1 auto;

		@media screen and (max-width: $md) {
			display: none;
		}

		&-item {
			margin-right: 24px;
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
}
</style>