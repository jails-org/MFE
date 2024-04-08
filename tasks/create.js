const fs = require('fs')

const filename = `mfe-${process.argv.pop()}`
const dest = `./src/mfes/${filename}`
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

// Creating directory
fs.mkdir(dest, { recursive: true }, (err) => {
    if (err) throw err
})


// Pug file
const pug = `
${filename}
    h1 Hello World, you're at ${filename}
`

fs.writeFile( `${dest}/index.pug`, pug,{ encoding:'utf-8' }, (err) => {
    if( err) throw err
    console.log('pug file created')
})

// Pug page file 
const page = `
extends /shared/layout.pug 

block head 
    link( rel="stylesheet" href="./index.css" )
    script( type="module" src="./index.ts" )

block content 
    include ./index.pug
`

fs.writeFile( `${dest}/page.pug`, page,{ encoding:'utf-8' }, (err) => {
    if( err) throw err
    console.log('page pug file created')
})

// Css file
const css = `
${filename} {
    display: block;
    padding: 50px;
    color: #${genRanHex(6)};
}
`

fs.writeFile( `${dest}/index.css`, css, { encoding:'utf-8' }, (err) => {
    if( err) throw err
    console.log('css file created')
})


// index.js File
const js = `
import * as app from './app'

import('jails-js')
    .then( ({ default: jails }) => {
        jails.register('${filename}', app)
        jails.start()
    })
`

fs.writeFile( `${dest}/index.ts`, js, { encoding:'utf-8' }, (err) => {
    if( err) throw err
    console.log('index.ts file created')
})


// App File
const app = `
export default function ${filename.replace(/\W/g, '')} ({ main }) {
    
    main( _ => {
        log()
    })

    const log = () => {
        console.log('Hello, I am ${filename}')
    }
}
`

fs.writeFile( `${dest}/app.ts`, app, { encoding:'utf-8' }, (err) => {
    if( err) throw err
    console.log('app.ts file created')
})