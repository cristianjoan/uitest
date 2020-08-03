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
            marginTop: '295px',
            userVote: '',
            voteStatus: false,
            cardData: this.getCardVotes(),
            voteData: this.getCardData()
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
    mounted() {
        // const cards = this.getCardVotes()
        // console.log(cards)

        this.setMarginTop()
        
    },
    methods: {
        ...mapGetters({
            getCardVotes: 'getCardsStatus'
        }),

        ...mapActions({
            setCardVotes: 'saveCardVotesAction'
        }),

        setMarginTop() {
            const height = this.$refs.cardTitle.clientHeight
            this.marginTop = (335 - height) + "px"
        },

        selectVote(vote) {
            this.userVote = vote
        },

        voteNow() {
            if(this.voteStatus) {
                this.voteStatus = !this.voteStatus
            } else {
                this.voteStatus = !this.voteStatus

                this.setCardVotes({
                    id: this.id,
                    thumb_up: this.voteData.thumbsUp + 1,
                    thumb_down: this.voteData.thumbsDown + 2,
                    votesNumber: this.voteData.votesNumber + 1,
                })
            }
        },

        getCardData() {
            if(this.cardData[this.id]){
                return {
                        thumbsUp: this.cardData[this.id].thumbsUp,
                        thumbsDown: this.cardData[this.id].thumbsDown,
                        votesNumber: this.cardData[this.id].votesNumber
                    }
                
            } else {
                console.log('fuck')
            }
        }
    }
}