<template>
	<div class="video-block">
		<img class="video-block__bg-pink" src="images/video-block-bg-pink.svg" alt="">
		<img class="video-block__bg-white" src="images/video-block-bg-white.svg" alt="">

		<div class="video-block__wrapper">

			<a href="#" class="video-block__play" @click.prevent="videoPopupShow()">
				<img src="images/video-play.svg" alt="">
			</a>
			<!-- <vue-player video-placeholder-src="images/video.mp4" src="images/video.mp4" poster="images/video-thumb.jpg"
				title="this is a title" v-model="playing" :playsinline="true">
			</vue-player> -->

			<video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true"
				customEventName="customstatechangedeventname" @play="onPlayerPlay($event)"
				@pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @waiting="onPlayerWaiting($event)"
				@playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
				@timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
				@canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)"
				@ready="playerReadied">
			</video-player>

		</div>

		<svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<clipPath id="videoSvgPath">
					<path
						d="M0 53.5897C0 47.3009 4.8552 42.0788 11.1274 41.6215L569.127 0.93852C576.08 0.431611 582 5.93564 582 12.9068V372.365C582 379.236 576.243 384.703 569.382 384.35L11.3823 355.587C5.00341 355.258 0 349.99 0 343.603V53.5897Z"
						fill="black" fill-opacity="0.36" />
				</clipPath>
			</defs>
		</svg>

		<div class="video-block__popup" v-show="videoPopup" @click.prevent="videoPopupHide()">
			<video-player class="video-player-box" ref="videoPlayerPopup" :options="playerPopupOptions"
				:playsinline="true" customEventName="customstatechangedeventname" @play="onPlayerPlay($event)"
				@pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @waiting="onPlayerWaiting($event)"
				@playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
				@timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
				@canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)"
				@ready="playerReadied">
			</video-player>
		</div>

	</div>
</template>
<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
	name: "VideoBlock",
	props: [],
	data() {
		return {
			url: 'images/video.mp4',
			playerOptions: {
				// videojs options
				muted: true,
				language: 'en',
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				sources: [{
					type: "video/mp4",
					src: "images/video.mp4"
				}],
				poster: "images/video-thumb.jpg",
				controls: false,
			},
			playerPopupOptions: {
				// videojs options
				muted: false,
				language: 'en',
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				sources: [{
					type: "video/mp4",
					src: "images/video.mp4"
				}],
				poster: "images/video-thumb.jpg",
				controls: false,
			},
			videoPopup: false
		};
	},
	components: { videoPlayer },
	computed: {
		player() {
			return this.$refs.videoPlayer.player
		}
	},
	methods: {
		playVideo() {
			this.$refs.videoPlayer.player.play();
		},

		videoPopupShow() {
			this.$refs.videoPlayerPopup.player.play();
			this.videoPopup = true;
		},
		videoPopupHide() {
			this.$refs.videoPlayerPopup.player.pause();
			this.videoPopup = false;
		},
		// listen event
		onPlayerPlay(player) {
			// console.log('player play!', player)
		},
		onPlayerPause(player) {
			// console.log('player pause!', player)
		},
		// ...player event
		onPlayerLoadeddata() {

		},
		onPlayerCanplay() {

		},
		onPlayerCanplaythrough() {

		},
		onPlayerPlaying() {

		},
		onPlayerTimeupdate() {

		},
		onPlayerEnded() {

		},
		onPlayerWaiting() {

		},
		// or listen state event
		playerStateChanged(playerCurrentState) {
			// console.log('player current update state', playerCurrentState)
		},

		// player is ready
		playerReadied(player) {
			console.log('the player is readied', player)
			// you can use it to do something...
			// player.[methods]
		}
	}
}
</script>

<style lang="scss" scroped>
.video-block {
	position: relative;
	//z-index: 1;

	&__bg {
		&-pink {
			position: absolute;
			z-index: 2;
			top: -70px;
			left: -10px;
			pointer-events: none;
		}

		&-white {
			position: absolute;
			z-index: 3;
			top: -15px;
			left: 35px;
			pointer-events: none;
		}
	}

	&__play {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 5;

		img {
			display: block;
			margin-left: -32px;
			margin-top: 12px;
		}
	}

	&__wrapper {
		clip-path: url(#videoSvgPath);
		position: relative;
		z-index: 1;
		max-width: 582px;
		max-height: 385px;

		.video-player-box {
			transform: scale(3.2) translate(-15px, 0);
			transform-origin: 50% 50%;
		}

		.video-js,
		.video-player-box {
			max-width: 100%;
			max-height: 385px;
		}
	}

	&__popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: rgba($black, .7);
		display: flex;
		justify-content: center;

		.video-player-box {
			height: 100vh;
			width: auto;
		}

		.video-js,
		.video-player-box {
			max-width: 100%;
			max-height: 100vh;
		}
	}

}
</style>