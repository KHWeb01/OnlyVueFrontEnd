import {
    successGenRandNum,
    failGenRandNum
} from './mutation-types'

import axios from "axios"

export default {
    generateRandomNumber ({ commit }) {
        axios.get('http://localhost:7777/random')
            .then ((res) => {
                commit (successGenRandNum, parseInt(res.data.randNumber))
            })
            .catch ((res) => {
                commit (failGenRandNum, res)
            })
    }
}