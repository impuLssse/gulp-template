import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import AOS from 'aos';

import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';

flsFunctions.isWebp();

const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	modules: [Navigation, Pagination, EffectFade],
	speed: 500,
	slidesPerView: 2.8,
})

AOS.init({
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,
	offset: 120,
	delay: 0,
	duration: 400,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom',
});