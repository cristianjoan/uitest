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
            publicPath: process.env.BASE_URL,
            marginTop: '295px'
        }
    },
    props: {
        cardInfo: {}
    },
    computed: {
        styles() {
            return {
                'background-image': `url(${this.publicPath}${this.image})`,
                'background-size': 'cover'
            }
        }
    },
    beforeMount() {
        this.setMarginTop();
    },
    methods: {
        setMarginTop() {
            debugger
            const height = this.$refs.cardTitle.clientHeight
            this.marginTop = (335 - height) + "px"
            console.log(this.marginTop)
        } 
    }
}