import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
            id: this.cardInfo.id,
            name: this.cardInfo.name,
            argument: this.cardInfo.argument,
            category: this.cardInfo.category,
            publishDate: this.cardInfo.publishDate,
            image: this.cardInfo.image
        }
    },
    props: {
        cardInfo: {}
    },
    computed: {
        styles() {
            return {
                'background-image': `url(${BACKDROP_BASE}/${this.image})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            }
        }
    },
    beforeMount() {
    },
    methods: {

    }
}