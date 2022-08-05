<template>
	<div class="lending-page__wrapper">
		<Header></Header>
		<FirstSection @openPopup="popupShow"></FirstSection>
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

		<Popup class="popup--join" id="popup-join" v-bind:isActive="popupActive" v-bind:showId="popupActiveId"
			v-on:closePopup="popupHide()">
			<div class="popup__title" title="_Join IDO">_Join IDO</div>
			<form action="#" @submit.prevent="sendForm()">
				<div class="popup__input">
					<input type="text" name="name" id="name" v-model="orderName" class="form-control" placeholder="Name"
						required>
				</div>
				<div class="popup__input">
					<input type="email" name="email" id="email" v-model="orderEmail" class="form-control"
						placeholder="Email" required>
				</div>
				<div class="popup__input">
					<input type="text" name="telegram" id="telegram" v-model="orderTelegram" class="form-control"
						placeholder="Telegram @username" required>
				</div>
				<div class="popup__buttons">
					<button class="btn" type="submit">JOIN</button>
				</div>
			</form>
		</Popup>

		<Popup class="popup--succesfull" id="popup-succesfull" v-bind:isActive="popupActive"
			v-bind:showId="popupActiveId" v-on:closePopup="popupHide()">
			<div class="popup__img">
				<img src="images/popup-succesfull-img.png" alt="">
			</div>
			<div class="popup__title" title="_Succesfull">_Succesfull</div>
			<div class="popup__desc">Your request has been sent successfully</div>
			<div class="popup__buttons">
				<a href="#" @click.prevent="popupHide()" class="btn">ok</a>
			</div>
		</Popup>

		<Popup class="popup--succesfull" id="popup-ooops" v-bind:isActive="popupActive" v-bind:showId="popupActiveId"
			v-on:closePopup="popupHide()">
			<div class="popup__img">
				<img src="images/popup-ooops-img.png" alt="">
			</div>
			<div class="popup__title" title="_Ooops">_Ooops</div>
			<div class="popup__desc">You have already registered successfully</div>
			<div class="popup__buttons">
				<a href="#" @click.prevent="popupHide()" class="btn">ok</a>
			</div>
		</Popup>
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
import Popup from '../components/LENDING/blocks/Popup.vue';

export default {
	name: "IndexPage",
	data() {
		return {
			popupActive: false,
			popupActiveId: false,
			orderName: '',
			orderEmail: '',
			orderTelegram: '',

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
	components: { TokensUsageSection, Header, AboutSection, FirstSection, JoinSection, DinoSection, BackpacksSection, TokenomicsSection, PartnersSection, TeamsSection, Footer, RoadmapSection, Popup },
	mounted() {
		this.wh = window.innerHeight;

		let bs = document.querySelector('.backpacks-section');
		this.BackpacksSectionPosition = bs.offsetTop;

		let ts = document.querySelector('.tokenomics-section');
		this.TokenomicsSectionPosition = ts.offsetTop;
	},
	methods: {
		popupShow(id) {
			this.popupActiveId = id;
			this.popupActive = true;
			//this.$emit('openPopup', this.popupActive);
		},
		popupHide() {
			this.popupActive = false;
			this.popupActiveId = false;
			//this.$emit('closePopup', this.popupActive);
		},
		sendForm() {
			//this.popupShow('popup-succesfull');
			this.popupShow('popup-ooops');
		},
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
