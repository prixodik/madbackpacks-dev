import Vue from 'vue';
import SwiperClass, { Pagination } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/swiper.scss';

SwiperClass.use([Pagination]);

Vue.use(VueAwesomeSwiper);