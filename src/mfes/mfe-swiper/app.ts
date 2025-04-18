
import Swiper from 'swiper'

export default function appSwiper ({ main, on, elm, state }) {

	const wrapper = elm.querySelector('.swiper')
	const swiper = new Swiper(wrapper)

	main((_) => {
		on('click', '[data-next]', elm.next)
		on('click', '[data-prev]', elm.prev)
		swiper.on('slideChange', onchange)
	})

	const onchange = (e) => {
		state.set({ page: swiper.activeIndex - 1 })
	}

	elm.next = () => {
		swiper.slideNext()
	}

	elm.prev = () => {
		swiper.slidePrev()
	}

	elm.goto = (n) => {
		swiper.slideTo(n-1)
	}

	elm.useSwiper = (fn) => {
		fn(swiper)
	}
}

export const model = {
	page: 1
}