import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
           
        }
    },
    props: {
        cardinfo: {}
    },
    beforeMounted() {
        console.log(this.cardinfo)
    },
    methods: {

    }
}