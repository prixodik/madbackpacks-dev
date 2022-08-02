<template>
	<div class="lending-page__wrapper">
		<Header></Header>
		<FirstSection></FirstSection>
		<AboutSection></AboutSection>
		<JoinSection></JoinSection>
		<DinoSection></DinoSection>
		<TokensUsageSection></TokensUsageSection>
		<!-- <WhatSection></WhatSection>
		<VisionSection></VisionSection>
		<UpcomingSection></UpcomingSection>
		<HowSection></HowSection>
		<TokenomicsSection></TokenomicsSection>
		<SystemSection></SystemSection>
		<PartnersSection></PartnersSection> -->
	</div>
</template>

<script>
import TokensUsageSection from '/components/LENDING/sections/TokensUsageSection.vue';
import Header from '../components/LENDING/sections/Header.vue';
import AboutSection from '../components/LENDING/sections/AboutSection.vue';
import FirstSection from '../components/LENDING/sections/FirstSection.vue';
import JoinSection from '../components/LENDING/sections/JoinSection.vue';
import DinoSection from '../components/LENDING/sections/DinoSection.vue';

export default {
	name: "IndexPage",
	components: { TokensUsageSection, Header, AboutSection, FirstSection, JoinSection, DinoSection }
}
</script>
