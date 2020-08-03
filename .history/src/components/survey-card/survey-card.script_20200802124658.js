import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
           
        }
    },
    props: {
        cardinfo: {}
    },
    beforeMount() {
        console.log(this.cardinfo)
    },
    methods: {

    }
}