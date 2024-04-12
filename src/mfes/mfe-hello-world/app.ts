import { Swiper } from 'swiper'
import { animation } from './animation'

export default async function helloWorld ({ main, elm, on, state }) {
	//
	const wrapper = elm.querySelector('.swiper')
	const canvas = elm.querySelector('canvas')
	const { checking, numLook, handsUp, trigSuccess } = await animation(canvas)
	const swiper = new Swiper(wrapper, { allowTouchMove: false })

	let formData = {}

	main( _ => {
		//
		on('input', 'input[type="text"]', ontextchange)
		on('focus', 'input[type="text"]', ontextfocus)
		on('focus', 'input[name="password"]', onPasswordFocus)
		on('blur', 'input[name="password"]', onPasswordBlur)
		on('click', 'button[data-reset]', onReset)
		on('form-validation:submit', 'form', submit)
		on('click', '[data-prev]', prev)

		swiper.on('transitionEnd', onslidechange)
	})

	const ontextchange = (e) => {
		const num = e.target.value.length
		numLook.value = num * 1.6
	}

	const ontextfocus = (e) => {
		checking.value = true
	}

	const onPasswordFocus = (e) => {
		handsUp.value = true
	}

	const onPasswordBlur = (e) => {
		handsUp.value = false
	}

	const onReset = (e) => {
		checking.value = false
	}

	const onslidechange = (swiper) => {
		const index = swiper.activeIndex
		const current = swiper.slides[index]
		const input = current.querySelector('input')
		input.focus()
	}

	const submit = (e, { data }) => {
		formData = { ...formData, ...data }
		if (e.delegateTarget.finish) {
			send()
		} else {
			swiper.slideNext()
		}
	}

	const prev = () => {
		swiper.slidePrev()
		state.set({ success: null })
	}

	const send = () => {
		state
			.set({ success: true, formData })
			.then((_) => elm.querySelectorAll('form'))
			.then((forms) => forms.forEach((form) => form.reset()))
		setTimeout((_) => trigSuccess.fire(), 2000)
	}
}

export const model = {
	success: null,
	formData: null
}
