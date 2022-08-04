<template>
	<div class="team-block">
		<div class="team-block__img">
			<img :src="img" :alt="name">
			<a :href="socLink" class="team-block__soc btn btn--soc btn--pink">
				<svg>
					<use xlink:href="/images/sprite-svg.svg#linkedin"></use>
				</svg>
			</a>
		</div>
		<div class="team-block__name">{{ name }}</div>
		<div class="team-block__position">{{ position }}</div>

	</div>
</template>
<script>
export default {
	name: "TeamBlock",
	props: ['name', 'position', 'socLink', 'img'],
	data() {
		return {


		};
	},
	components: {}
}
</script>

<style lang="scss" scroped>
.team-block {
	&__img {
		position: relative;
		margin-bottom: 45px;

		img {
			border-radius: 6px;
			width: 100%;
		}
	}

	&__soc {
		position: absolute !important;
		;
		right: 28px;
		bottom: -22px;
	}

	&__name {
		text-align: center;
		margin-bottom: 8px;
		font: 900 20px/25px $titleFF;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: $white;
	}

	&__position {
		color: #01C5BA;
		font: 500 16px/1.6 $titleFF;
		text-align: center;
	}
}
</style>