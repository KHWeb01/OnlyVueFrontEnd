export default {
    exponent (state) {
        return state.exponent
    },
    calc_count_exponent (state, getters) {
        return Math.pow(state.count, getters.exponent)
    },
    random (state) {
        return state.random
    }
}