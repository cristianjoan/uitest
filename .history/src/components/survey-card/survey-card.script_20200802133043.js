import { mapActions, mapGetters } from 'vuex'


const IMAGE_BASE = '/img';

export default {
    data () {
        return {
            id: this.cardInfo.id,
            name: this.cardInfo.name,
            argument: this.cardInfo.argument,
            category: this.cardInfo.category,
            publishDate: this.cardInfo.publishDate,
            image: this.cardInfo.image,
            publicPath: process.env.BASE_URL
        }
    },
    props: {
        cardInfo: {}
    },
    computed: {
        styles() {
            return {
                'background-image': `url(${IMAGE_BASE}/${this.image})`
            }
        }
    },
    beforeMount() {
    },
    methods: {

    }
}