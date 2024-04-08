
import * as app from './app'

import('jails-js')
    .then( ({ default: jails }) => {
        jails.register('mfe-sample', app)
        jails.start()
    })
