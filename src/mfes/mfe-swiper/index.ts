import './style.css'

import * as appSwiper from './app'

window.webcomponent = window.webcomponent || {}
window.webcomponent.appSwiper = appSwiper

if( window.MFE ) {
	window.MFE.register('app-swiper', appSwiper, { Swiper: window.Swiper })
}