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
            voteData: {}
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
        this.getCardData()
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
                if(this.userVote === 'up') {

                    this.setCardVotes({
                        id: this.id,
                        thumbUp: Number(this.voteData.thumbsUp) + 1,
                        thumbDown: this.voteData.thumbsDown,
                        votesNumber: Number(this.voteData.votesNumber) + 1
                    })

                    this.voteStatus = !this.voteStatus
                    this.userVote = ''
                    getCardData()
                } else if (this.userVote === 'down') {
                    debugger
                    this.setCardVotes({
                        id: this.id,
                        thumbUp: this.voteData.thumbsUp,
                        thumbDown: this.voteData.thumbsDown === NaN ? 1 : this.voteData.thumbsDown + 1,
                        votesNumber: !this.voteData.votesNumber ? 1 : this.voteData.votesNumber + 1
                    })

                    this.voteStatus = !this.voteStatus
                    this.userVote = ''
                    getCardData()
                } else {
                    return
                }
            }
        },

        getCardData() {
            if(this.cardData[this.id]){
                this.voteData = {
                    thumbsUp: this.cardData[this.id].thumbUp,
                    thumbsDown: this.cardData[this.id].thumbDown,
                    votesNumber: this.cardData[this.id].votesNumber
                }
                
            } else {
                console.log('fuck')
            }
        }
    }
}