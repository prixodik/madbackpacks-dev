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
				<a href="#" class="header__menu-item">about</a>
				<a href="#" class="header__menu-item">token</a>
				<a href="#" class="header__menu-item">roadmap</a>
				<a href="#" class="header__menu-item">team & partners</a>
				<a href="#" class="header__menu-item">how to play</a>
				<a href="#" class="header__menu-item">Tokenomics</a>
			</div>

		</div>
	</header>
</template>
<script>

export default {
	name: "Header",
	data() {
		return {

		};
	},
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
	}

	/* &__burger {
		font: bold 20px/24px $advent;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
	}

	&__login {
		font: bold 20px/24px $advent;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
	} */

	&__menu {
		display: flex;
		font: bold 16px/20px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;

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