<template>
	<div class="lending-page__wrapper">
		<Header></Header>
		<FirstSection></FirstSection>
		<AboutSection></AboutSection>
		<JoinSection :title="joinSectionParams.title" :btnText="joinSectionParams.btnText" :img="joinSectionParams.img">
		</JoinSection>
		<DinoSection></DinoSection>
		<BackpacksSection ref="BackpacksSection"></BackpacksSection>
		<TokenomicsSection ref="TokenomicsSection"></TokenomicsSection>
		<TokensUsageSection></TokensUsageSection>
		<RoadmapSection></RoadmapSection>
		<JoinSection class="join-section--2" :title="joinSectionParams2.title" :btnText="joinSectionParams2.btnText"
			:img="joinSectionParams2.img"></JoinSection>
		<PartnersSection></PartnersSection>
		<TeamsSection></TeamsSection>
		<Footer></Footer>
	</div>
</template>

<script>
import TokensUsageSection from '/components/LENDING/sections/TokensUsageSection.vue';
import Header from '../components/LENDING/sections/Header.vue';
import AboutSection from '../components/LENDING/sections/AboutSection.vue';
import FirstSection from '../components/LENDING/sections/FirstSection.vue';
import JoinSection from '../components/LENDING/sections/JoinSection.vue';
import DinoSection from '../components/LENDING/sections/DinoSection.vue';
import BackpacksSection from '../components/LENDING/sections/BackpacksSection.vue';
import TokenomicsSection from '../components/LENDING/sections/TokenomicsSection.vue';
import PartnersSection from '../components/LENDING/sections/PartnersSection.vue';
import TeamsSection from '../components/LENDING/sections/TeamsSection.vue';
import Footer from '../components/LENDING/sections/Footer.vue';
import RoadmapSection from '../components/LENDING/sections/RoadmapSection.vue';

export default {
	name: "IndexPage",
	data() {
		return {
			joinSectionParams: {
				title: '<span>Join our</span> newsletter <br>to stay in the loop!',
				btnText: "Let's go",
				img: 'images/join-section-img-1.png'
			},
			joinSectionParams2: {
				title: '<span>Stay up-to-date</span> with<br> our news! ',
				btnText: "Getting pumped",
				img: 'images/join-section-2-img-1.png'
			},
			wh: 0,
			BackpacksSectionPosition: false,
			TokenomicsSectionPosition: false,
		};
	},
	components: { TokensUsageSection, Header, AboutSection, FirstSection, JoinSection, DinoSection, BackpacksSection, TokenomicsSection, PartnersSection, TeamsSection, Footer, RoadmapSection },
	mounted() {
		this.wh = window.innerHeight;

		let bs = document.querySelector('.backpacks-section');
		this.BackpacksSectionPosition = bs.offsetTop;

		let ts = document.querySelector('.tokenomics-section');
		this.TokenomicsSectionPosition = ts.offsetTop;
	},
	methods: {
		handleScroll() {
			// Your scroll handling here
			if (window.scrollY >= this.BackpacksSectionPosition) {
				this.$refs.BackpacksSection.playVideo();
			}

			if (window.scrollY >= this.TokenomicsSectionPosition) {
				this.$refs.TokenomicsSection.playLines();
			}
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>
