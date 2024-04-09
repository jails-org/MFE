
import jails from 'jails-js'

window.MFE = {

    register( name, module, dependencies ) {
        jails.register( name, module, dependencies )
    },

    install( origin ) {
        
        const mfes = []
            
        const mainscript = new Promise((resolve) => {
            const main = document.createElement('script')
            main.defer = true 
            main.src = `${origin}/main.js`
            main.onload = resolve
            document.head.appendChild( main )
        })
        
        return {
            
            add( name, target ) {
    
                const link = document.createElement('link')   
                link.rel = 'stylesheet'
                link.href = `${origin}/${name}/index.css`
                
                document.head.appendChild( link )
    
                fetch(`${origin}/${name}/index.html`)
                    .then( res => res.text() )
                    .then(h => document.querySelector( target ).innerHTML = h )
    
                const app = document.createElement('script')
                app.defer = true 
                
                mfes.push(
                    mainscript.then(() => {
                        return new Promise((resolve) => {
                            app.src = `${origin}/${name}/index.js`
                            app.onload = resolve
                            document.head.appendChild( app )
                        })
                    })
                )
    
                return this
            },
    
            start() {
                Promise.allSettled(mfes).then( _ => window.MFE.start() )
            }
        }    
    }
}