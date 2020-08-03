<template>
    <div>
        <SurveyBanner />
        <Alert />
        <div class="cards-container">
            <SurveyCard 
                :key="i"
                v-for="(card, i) in cards.votingBoxes"
                :cardInfo="card" 
            />
        </div>
        
    </div>
</template>

<script src="./rule-of-thumb.script.js"></script>
<style lang="scss" scoped src="./rule-of-thumb.scss"></style>
