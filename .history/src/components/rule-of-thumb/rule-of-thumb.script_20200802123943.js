import Alert from '@/components/alert/alert'
import SurveyBanner from '@/components/survey-banner/survey-banner'
import SurveyCard from '@/components/survey-card/survey-card'
import cardsStructure from '@/structure.json'

export default {
    data() {
        return {
            cards: cardsStructure
        }
    },
    components: {
        Alert,
        SurveyBanner,
        SurveyCard
    },
    mounted() {
        console.log(this.cards);
    }, 
}
