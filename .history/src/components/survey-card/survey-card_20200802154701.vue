<template>
    <div>
        <div class="card-image" :style="styles">
            <div class="card-status">
                <div class="thumb up"><i class="material-icons">thumb_up</i></div>
            </div>
            <div class="card-info" :style="{ marginTop: marginTop}">
                <h1 ref="cardTitle" class="heading-1">{{ name }}</h1>
                <span class="category">{{ category }}</span>
                <p class="thumbs-message">{{ argument }}</p>
                <div class="card-options">
                    <div class="thumb thumb-button up"><i class="material-icons">thumb_up</i></div>
                    <div class="thumb thumb-button down"><i class="material-icons">thumb_down</i></div>
                    <button class="vote-button">Vote Now</button>
                    <button class="vote-button">Vote Again</button>
                </div>
            </div>
            
            <div class="card-votes">
                <div class="thumb up-status">
                    <i class="material-icons">thumb_up</i>
                    50%
                </div>
                <div class="thumb down-status">
                    <span>50%</span>
                    <i class="material-icons">thumb_down</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./survey-card.script.js"></script>
<style lang="scss" scoped src="./survey-card.scss"></style>
