const environment = Object.assign({}, process.env.NODE_ENV == 'dev'? { development:true } : { production:true })

module.exports = {
    basedir: './src',
    pretty : Boolean(environment.development),
    locals : {}
}