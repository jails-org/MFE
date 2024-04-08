
import * as app from './app'

import('jails-js')
    .then( ({ default: jails }) => {
        jails.register('mfe-hello-world', app)
        jails.start()
    })
