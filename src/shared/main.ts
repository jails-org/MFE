
import jails from 'jails-js'

export const dependencies = {}

window.MFE = {

    register(name, module, dependencies) {
        jails.register(name, module, dependencies )
    },

    start() {
        jails.start()
    }
}