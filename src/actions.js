

const inc = () => ({type : 'INC'})
const dec = () => ({type : 'DEC'})
const rnd = () => ({type : 'RND', value : Math.floor(Math.random() * 10)})

export {
    inc,
    dec,
    rnd
}