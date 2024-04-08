
export default function mfehelloworld ({ main }) {
    
    main( _ => {
        log()
    })

    const log = () => {
        console.log('Hello, I am mfe-hello-world')
    }
}
