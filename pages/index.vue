<template>
	<div class="lending-page__wrapper">
		<Header></Header>
		<FirstSection ref="FirstSection" @openPopup="popupShow"></FirstSection>
		<AboutSection ref="AboutSection"></AboutSection>
		<JoinSection id="join-section-1" ref="JoinSection1" :title="joinSectionParams.title"
			:btnText="joinSectionParams.btnText" :img="joinSectionParams.img" @openPopup="popupShow">
		</JoinSection>
		<DinoSection ref="DinoSection"></DinoSection>
		<BackpacksSection ref="BackpacksSection"></BackpacksSection>
		<TokenomicsSection ref="TokenomicsSection"></TokenomicsSection>
		<TokensUsageSection ref="TokensUsageSection" @openPopup="popupShow"></TokensUsageSection>
		<RoadmapSection></RoadmapSection>
		<JoinSection class="join-section--2" id="join-section-2" ref="JoinSection2" :title="joinSectionParams2.title"
			:btnText="joinSectionParams2.btnText" :img="joinSectionParams2.img"></JoinSection>
		<PartnersSection></PartnersSection>
		<TeamsSection></TeamsSection>
		<Footer></Footer>

		<Popup class="popup--join" id="popup-join" v-bind:isActive="popupActive" v-bind:showId="popupActiveId"
			v-on:closePopup="popupHide()">
			<div class="popup__title title-h1" title="_Join IDO">_Join IDO</div>
			<form class="popup__form" action="#" @submit.prevent="checkForm" method="post" novalidate="true">
				<div class="popup__input">
					<input type="text" name="name" id="name" v-model="orderName" class="form-control"
						:class="{ 'is-error': errors.name }" placeholder="Name" required>
					<div class="popup__error" v-if="errors.name">{{ errors.name }}</div>
				</div>
				<div class="popup__input">
					<input type="email" name="email" id="email" v-model="orderEmail" class="form-control"
						:class="{ 'is-error': errors.email }" placeholder="Email" required>
					<div class="popup__error" v-if="errors.email">{{ errors.email }}</div>
				</div>
				<div class="popup__input">
					<input type="text" name="telegram" id="telegram" v-model="orderTelegram" class="form-control"
						:class="{ 'is-error': errors.telegram }" placeholder="Telegram @username" required>
					<div class="popup__error" v-if="errors.telegram">{{ errors.telegram }}</div>
				</div>
				<div class="popup__buttons">
					<Btn :tag="'button'" :text="'JOIN'"></Btn>
				</div>
			</form>
		</Popup>

		<Popup class="popup--telegram" id="popup-telegram" v-bind:isActive="popupActive" v-bind:showId="popupActiveId"
			v-on:closePopup="popupHide()">
			<div class="popup__title title-h1" title="Join our newsletter to stay in the loop!"><span>Join our</span>
				newsletter
				<br>to stay
				in the loop!
			</div>
			<form class="popup__form" action="#" @submit.prevent="checkFormTelegram" method="post" novalidate="true">
				<div class="popup__input">
					<input type="text" name="telegram" id="telegram" v-model="orderTelegram" class="form-control"
						:class="{ 'is-error': errors.telegram }" placeholder="Telegram @username" required>
					<div class="popup__error" v-if="errors.telegram">{{ errors.telegram }}</div>
				</div>
				<div class="popup__buttons">
					<Btn :tag="'button'" :text="`Let's go`"></Btn>
				</div>
			</form>
		</Popup>

		<Popup class="popup--succesfull" id="popup-succesfull" v-bind:isActive="popupActive"
			v-bind:showId="popupActiveId" v-on:closePopup="popupHide()">
			<div class="popup__img">
				<img src="/images/popup-succesfull-img.png" alt="">
			</div>
			<div class="popup__title title-h1" title="_Succesfull">_Succesfull</div>
			<div class="popup__desc">Your request has been sent successfully</div>
			<div class="popup__buttons">
				<Btn :tag="'a'" :text="'ok'" @click.prevent.native="popupHide()"></Btn>
			</div>
		</Popup>

		<Popup class="popup--succesfull" id="popup-ooops" v-bind:isActive="popupActive" v-bind:showId="popupActiveId"
			v-on:closePopup="popupHide()">
			<div class="popup__img">
				<img src="/images/popup-ooops-img.png" alt="">
			</div>
			<div class="popup__title title-h1" title="_Ooops">_Ooops</div>
			<div class="popup__desc">You have already registered successfully</div>
			<div class="popup__buttons">
				<Btn :tag="'a'" :text="'ok'" @click.prevent.native="popupHide()"></Btn>
			</div>
		</Popup>

		<SpriteBtn></SpriteBtn>

		<!-- <div class="marker" :style="`top: ${markerPos}px`"></div>
		<div class="sec-start" :style="`top: ${secStart}px`"></div>
		<div class="sec-stop" :style="`top: ${secStop}px`"></div> -->
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
import SpriteBtn from '../components/LENDING/blocks/SpriteBtn.vue';
import Btn from '../components/LENDING/blocks/Btn.vue';

export default {
	name: "IndexPage",
	data() {
		return {
			popupActive: false,
			popupActiveId: false,

			errors: {
				name: null,
				email: null,
				telegram: null
			},
			orderName: null,
			orderEmail: null,
			orderTelegram: null,

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

			FirstSectionActive: false,
			FirstSectionPosition: null,
			FirstSectionHeight: null,

			AboutSectionActive: false,
			AboutSectionPosition: null,
			AboutSectionHeight: null,

			DinoSectionActive: false,
			DinoSectionPosition: null,
			DinoSectionHeight: null,

			BackpacksSectionActive: false,
			BackpacksSectionPosition: null,
			BackpacksSectionHeight: null,

			TokenomicsSectionActive: false,
			TokenomicsSectionPosition: null,
			TokenomicsSectionHeight: null,

			TokensUsageSectionActive: false,
			TokensUsageSectionPosition: null,
			TokensUsageSectionHeight: null,

			JoinSection1Active: false,
			JoinSection1Position: null,
			JoinSection1Height: null,

			JoinSection2Active: false,
			JoinSection2Position: null,
			JoinSection2Height: null,

			markerPos: 0,
			secStart: 0,
			secStop: 0,
		};
	},
	components: { TokensUsageSection, Header, AboutSection, FirstSection, JoinSection, DinoSection, BackpacksSection, TokenomicsSection, PartnersSection, TeamsSection, Footer, RoadmapSection, Popup, SpriteBtn, Btn },
	mounted() {
		this.wh = window.innerHeight;

		window.addEventListener('load', () => {
			let fs = document.querySelector('.first-section');
			if (fs !== null) {
				this.FirstSectionPosition = fs.offsetTop;
				this.FirstSectionHeight = fs.clientHeight;

				//this.secStart = this.FirstSectionPosition;
				//this.secStop = this.FirstSectionPosition + this.FirstSectionHeight;
			}

			let abs = document.querySelector('.about-section');
			if (abs !== null) {
				this.AboutSectionPosition = abs.offsetTop;
				this.AboutSectionHeight = abs.clientHeight;
			}

			let dinos = document.querySelector('.dino-section');
			if (dinos !== null) {
				this.DinoSectionPosition = dinos.offsetTop;
				this.DinoSectionHeight = dinos.clientHeight;
			}

			let bs = document.querySelector('.backpacks-section');
			if (bs !== null) {
				this.BackpacksSectionPosition = bs.offsetTop;
				this.BackpacksSectionHeight = bs.clientHeight;
			}

			let ts = document.querySelector('.tokenomics-section');
			if (ts !== null) {
				this.TokenomicsSectionPosition = ts.offsetTop;
				this.TokenomicsSectionHeight = ts.clientHeight;
			}

			let tus = document.querySelector('.tokensusage-section');
			if (tus !== null) {
				this.TokensUsageSectionPosition = tus.offsetTop;
				this.TokensUsageSectionHeight = tus.clientHeight;
			}

			let jns1 = document.querySelector('#join-section-1');
			if (jns1 !== null) {
				this.JoinSection1Position = jns1.offsetTop;
				this.JoinSection1Height = jns1.clientHeight;
			}
			let jns2 = document.querySelector('#join-section-2');
			if (jns2 !== null) {
				this.JoinSection2Position = jns2.offsetTop;
				this.JoinSection2Height = jns2.clientHeight;
			}
		});

		this.$refs.FirstSection.activeAnimation();
		this.FirstSectionActive = true;
		console.log('start - FirstSection');
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
		checkForm: function (e) {
			this.errors = [];

			if (!this.orderName) {
				this.errors.name = 'Enter a name';
			}
			if (!this.orderEmail) {
				this.errors.email = 'Enter E-mail';
			} else if (!this.validEmail(this.orderEmail)) {
				this.errors.email = 'Please enter a valid email address';
			}
			if (!this.orderTelegram) {
				this.errors.telegram = 'Enter Telegram';
			} else if (!this.validTelegram(this.orderTelegram)) {
				this.errors.telegram = 'Not correct username';
			}

			if (!this.errors.name && !this.errors.email && !this.errors.telegram) {
				this.sendForm();
				return true;
			}

			e.preventDefault();
		},
		checkFormTelegram: function (e) {
			this.errors = [];

			if (!this.orderTelegram) {
				this.errors.telegram = 'Enter Telegram';
			} else if (!this.validTelegram(this.orderTelegram)) {
				this.errors.telegram = 'Not correct username';
			}

			if (!this.errors.name && !this.errors.email && !this.errors.telegram) {
				this.sendForm();
				return true;
			}

			e.preventDefault();
		},
		validEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		validTelegram: function (telegram) {
			var re = /^@([a-zA-Z0-9_.]{1,30}$)/;
			return re.test(telegram);
		},
		handleScroll() {
			// Your scroll handling here
			this.markerPos = window.scrollY + this.wh;

			//Join 1 Section
			if (this.markerPos >= (this.JoinSection1Position)
				&& this.markerPos <= (this.JoinSection1Position + this.JoinSection1Height + this.wh)
			) {
				if (this.JoinSection1Active === false) {
					this.$refs.JoinSection1.activeAnimation();
					this.JoinSection1Active = true;
					console.log('start - join 1');
				}
			} else {
				if (this.JoinSection1Active === true) {
					this.JoinSection1Active = false;
					this.$refs.JoinSection1.stopAnimation();
					console.log('end- join 1');
				}
			}

			//Join 2 Section
			if (this.markerPos >= (this.JoinSection2Position)
				&& this.markerPos <= (this.JoinSection2Position + this.JoinSection2Height + this.wh)
			) {
				if (this.JoinSection2Active === false) {
					this.$refs.JoinSection2.activeAnimation();
					this.JoinSection2Active = true;
					console.log('start - join 2');
				}
			} else {
				if (this.JoinSection2Active === true) {
					this.JoinSection2Active = false;
					this.$refs.JoinSection2.stopAnimation();
					console.log('end- join 2');
				}
			}

			//tokensusage-section
			if (this.markerPos >= (this.TokensUsageSectionPosition)
				&& this.markerPos <= (this.TokensUsageSectionPosition + this.TokensUsageSectionHeight + this.wh)
			) {
				if (this.TokensUsageSectionActive === false) {
					this.$refs.TokensUsageSection.activeAnimation();
					this.TokensUsageSectionActive = true;
					console.log('start - TokensUsageSection');
				}
			} else {
				if (this.TokensUsageSectionActive === true) {
					this.TokensUsageSectionActive = false;
					this.$refs.TokensUsageSection.stopAnimation();
					console.log('end- TokensUsageSection');
				}
			}

			//TokenomicsSection
			if (this.markerPos >= (this.TokenomicsSectionPosition)
				&& this.markerPos <= (this.TokenomicsSectionPosition + this.TokenomicsSectionHeight + this.wh)
			) {
				if (this.TokenomicsSectionActive === false) {
					this.$refs.TokenomicsSection.activeAnimation();
					this.TokenomicsSectionActive = true;
					console.log('start - TokenomicsSection');
				}
			} else {
				if (this.TokenomicsSectionActive === true) {
					this.TokenomicsSectionActive = false;
					this.$refs.TokenomicsSection.stopAnimation();
					console.log('end- TokenomicsSection');
				}
			}
			if (window.scrollY >= this.TokenomicsSectionPosition - 200) {
				this.$refs.TokenomicsSection.playLines();
			}


			//BackpacksSection
			if (this.markerPos >= (this.BackpacksSectionPosition)
				&& this.markerPos <= (this.BackpacksSectionPosition + this.BackpacksSectionHeight + this.wh)
			) {
				if (this.BackpacksSectionActive === false) {
					this.$refs.BackpacksSection.activeAnimation();
					this.BackpacksSectionActive = true;

					this.$refs.BackpacksSection.playVideo();

					console.log('start - BackpacksSection');
				}
			} else {
				if (this.BackpacksSectionActive === true) {
					this.BackpacksSectionActive = false;
					this.$refs.BackpacksSection.stopAnimation();
					console.log('end- BackpacksSection');
				}
			}
			/* if (window.scrollY >= this.BackpacksSectionPosition - 200) {
				this.$refs.BackpacksSection.playVideo();
			} */

			//DinoSection
			if (this.markerPos >= (this.DinoSectionPosition)
				&& this.markerPos <= (this.DinoSectionPosition + this.DinoSectionHeight + this.wh)
			) {
				if (this.DinoSectionActive === false) {
					this.$refs.DinoSection.activeAnimation();
					this.DinoSectionActive = true;
					console.log('start - DinoSection');
				}
			} else {
				if (this.DinoSectionActive === true) {
					this.DinoSectionActive = false;
					this.$refs.DinoSection.stopAnimation();
					console.log('end- DinoSection');
				}
			}

			//AboutSection
			if (this.markerPos >= (this.AboutSectionPosition)
				&& this.markerPos <= (this.AboutSectionPosition + this.AboutSectionHeight + this.wh)
			) {
				if (this.AboutSectionActive === false) {
					this.$refs.AboutSection.activeAnimation();
					this.AboutSectionActive = true;
					console.log('start - AboutSection');
				}
			} else {
				if (this.AboutSectionActive === true) {
					this.AboutSectionActive = false;
					this.$refs.AboutSection.stopAnimation();
					console.log('end- AboutSection');
				}
			}

			//FirstSection
			if (this.markerPos >= (this.FirstSectionPosition)
				&& this.markerPos <= (this.FirstSectionPosition + this.FirstSectionHeight + this.wh)
			) {
				if (this.FirstSectionActive === false) {
					this.$refs.FirstSection.activeAnimation();
					this.FirstSectionActive = true;
					console.log('start - FirstSection');
				}
			} else {
				if (this.FirstSectionActive === true) {
					this.FirstSectionActive = false;
					this.$refs.FirstSection.stopAnimation();
					console.log('end- FirstSection');
				}
			}

			/* if (window.scrollY >= this.JoinSection2Position) {
				this.$refs.JoinSection2.activeAnimation();
			}

			

			 */
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
<style lang="scss">
/* .sec-start,
.sec-stop,
.marker {
	position: absolute;
	right: 0;
	z-index: 9999;
	height: 3px;
	background: red;
	width: 100px;
}

.sec-start {
	background: blue;
}

.sec-stop {
	background: orange;
} */
</style>
