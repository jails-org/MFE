
import * as app from './app'
import * as formValidation from 'jails.pandora/form-validation'
import validation from './validation'

window.MFE.register('form-validation', formValidation, { ...validation })
window.MFE.register('mfe-hello-world', app, {})
