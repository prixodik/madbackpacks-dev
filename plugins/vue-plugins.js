import Vue from 'vue';
import SwiperClass, { Pagination, EffectCoverflow } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/swiper.scss';

SwiperClass.use([Pagination, EffectCoverflow]);

Vue.use(VueAwesomeSwiper);