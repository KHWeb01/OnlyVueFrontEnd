export default {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    },
    successGenRandNum (state, payload) {
        state.random = payload
    },
    failGenRandNum () {
        console.log('Failed to get rand num from Spring')
    }
}