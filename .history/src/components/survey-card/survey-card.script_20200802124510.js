import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
           
        }
    },
    props: {
        cardinfo: Object
    },
    beforeMounted() {
        console.log(this.cardinfo)
    },
    methods: {

    }
}