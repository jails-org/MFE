
import * as app from './app'
import * as formValidation from 'jails.std/form-validation'
import validation from './utils/validation'

window.MFE.register('form-validation', formValidation, { ...validation })
window.MFE.register('mfe-hello-world', app, {})