<template>
	<section class="teams-section" id="teams-section">
		<div class="teams-section__container container">
			<div class="teams-section__title title-h1" :title="title">{{ title }}</div>

			<div class="teams-section__row">
				<div class="teams-section__item" v-for="team in teams">
					<TeamBlock :img="team.img" :name="team.name" :position="team.position" :socLink="team.socLink">
					</TeamBlock>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import TeamBlock from '../blocks/TeamBlock.vue';

export default {
	name: "TeamsSection",
	data() {
		return {
			title: '_Teams',
			teams: [{
				img: 'images/team-img-1.png',
				name: 'Fuad Fatullaev',
				position: 'WeWay Founder & CEO',
				socLink: 'https://www.linkedin.com/in/fuad-fatullaev-89b51062'
			}, {
				img: 'images/team-img-2.png',
				name: 'Lena Vesna',
				position: 'Creative Producer'
			}, {
				img: 'images/team-img-4.png',
				name: 'Vlad Synticate',
				position: '3D Designer',
				socLink: 'https://www.linkedin.com/in/vlad-tkachuk-a8195311'
			}, {
				img: 'images/team-img-5.png',
				name: 'Yuliia Yuffa ',
				position: 'Project Manager'
			}, {
				img: 'images/team-img-7.png',
				name: 'Roman Tarasyuta',
				position: 'Lead Game developer',
				socLink: 'https://www.linkedin.com/in/roman-tarasyuta-7a7175198'
			}, {
				img: 'images/team-img-8.png',
				name: 'Illia Pashkov',
				position: 'Business Developer',
				socLink: 'https://www.linkedin.com/in/pashkov '
			}, {
				img: 'images/team-img-6.png',
				name: 'Eugene Ipatko',
				position: 'CTO',
				socLink: 'https://www.linkedin.com/in/eipatko'
			}, {
				img: 'images/team-img-9.png',
				name: 'Marina Maya',
				position: 'PR / Marketing'
			}, {
				img: 'images/team-img-3.png',
				name: 'Eugene Kitkin',
				position: 'Game Producer',
				socLink: 'https://www.linkedin.com/in/kitkin'
			}]
		};
	},
	components: { TeamBlock }
}
</script>

<style lang="scss" scroped>
.teams-section {
	padding: 15px 0 83px;
	background: #090923;
	overflow: hidden;

	&__container {
		position: relative;
		z-index: 1;

		&:before {
			content: "";
			position: absolute;
			width: 392px;
			height: 385px;
			left: 274px;
			top: 290px;
			z-index: -1;

			background: linear-gradient(119.99deg, rgba(18, 243, 216, 0.79) 21.9%, rgba(73, 255, 248, 0.19) 125.17%);
			filter: blur(104px);
			opacity: 0.6;
			transform: rotate(177.74deg);
		}

		&:after {
			content: "";
			position: absolute;
			width: 392px;
			height: 385px;
			right: 150px;
			top: 766px;
			z-index: -1;

			background: linear-gradient(119.99deg, #FE37F1 21.9%, #12F3D8 125.17%);
			filter: blur(104px);
			opacity: 0.6;
			transform: rotate(177.74deg);
		}
	}

	&__title {
		color: $white;
		margin-bottom: 72px;

		@media screen and (max-width: $md) {
			margin-bottom: 64px;
		}

		@media screen and (max-width: $sm) {
			margin-bottom: 42px;
		}
	}

	&__row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -12px -60px;
		max-width: 1390px;

		@media screen and (max-width: $lg) {
			max-width: none;
		}

		@media screen and (max-width: $md) {
			margin: 0 -9px -48px;
		}

		@media screen and (max-width: $sm) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-bottom: 0;

			&::-webkit-scrollbar {
				width: 24px;
				/* ширина для вертикального скролла */
				height: 3px;
				/* высота для горизонтального скролла */
				background: rgba(#D1FECE, 0.4);


			}

			/* ползунок скроллбара */
			&::-webkit-scrollbar-thumb {
				background: linear-gradient(90deg, #32B0DA 23.14%, #D1FECE 46.22%, #69F5DA 69.31%);
				border-radius: 0;
			}

			&::-webkit-scrollbar-thumb:hover {
				background-color: #32B0DA;
			}
		}
	}

	&__item {
		flex: 0 0 33.33%;
		max-width: 33.33%;
		padding: 0 12px;
		margin-bottom: 60px;

		@media screen and (max-width: $md) {
			padding: 0 9px;
			margin-bottom: 48px;
		}

		@media screen and (max-width: $sm) {
			margin-bottom: 92px;
			flex: 0 0 274px;
			max-width: 274px;
		}

		&:nth-of-type(2n) {
			.team-block__position {
				background: linear-gradient(92.28deg, #F74083 5.11%, #FF37F8 104.85%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				text-fill-color: transparent;
			}
		}
	}
}
</style>