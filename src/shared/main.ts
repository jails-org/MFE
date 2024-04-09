
import jails from 'jails-js'
import packagejson from '../../package.json'

const origin = packagejson.host
const mfes = []

window.MFE = {

    register( name, module, dependencies ) {
        jails.register( name, module, dependencies )
    },

    add( name, target ) {
    
        const link = document.createElement('link')   
        link.rel = 'stylesheet'
        link.href = `${origin}/${name}/index.css`
        
        document.head.appendChild( link )

        fetch(`${origin}/${name}/index.html`)
            .then( res => res.text() )
            .then( h => document.querySelector( target ).innerHTML = h )

        const app = document.createElement('script')
        app.defer = true 
        
        mfes.push(
            new Promise((resolve) => {
                app.src = `${origin}/${name}/index.js`
                app.onload = resolve
                document.head.appendChild( app )
            })
        )

        return this
    },

    start() {
        Promise.allSettled(mfes).then( _ => jails.start() )
    }
}