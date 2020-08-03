import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
           
        }
    },
    props: {
        cardInfo: {}
    },
    beforeMount() {
        console.log(this.cardInfo)
        debugger
    },
    methods: {

    }
}