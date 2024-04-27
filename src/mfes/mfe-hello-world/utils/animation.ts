import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas'

//https://rive.app/community/2244-4437-animated-login-screen/
export const animation = (canvas): any => {
	
	return new Promise((resolve, reject) => {
		
		const r = new Rive({
			src: 'https://public.rive.app/community/runtime-files/4771-9633-login-teddy.riv',
			canvas,
			autoplay: true,
			stateMachines: ['Login Machine'],
			onLoad: () => {
				const inputs = r.stateMachineInputs('Login Machine')

				const checking = inputs.find((input) => input.name === 'isChecking')
				const handsUp = inputs.find((input) => input.name === 'isHandsUp')
				const numLook = inputs.find((input) => input.name === 'numLook')
				const trigFail = inputs.find((input) => input.name === 'trigFail')
				const trigSuccess = inputs.find((input) => input.name === 'trigSuccess')

				resolve({
					checking,
					handsUp,
					numLook,
					trigFail,
					trigSuccess,
				})

				r.layout = new Layout({
					fit: Fit.Cover,
					alignment: Alignment.TopCenter,
				})
			},
		})
	})
}
