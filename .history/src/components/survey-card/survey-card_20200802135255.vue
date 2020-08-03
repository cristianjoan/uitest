<template>
    <div>
        <div class="card-image" :style="styles">
            <div class="card-status">
                <div class="thumb up"><i class="material-icons">thumb_up</i></div>
                <div class="thumb down"><i class="material-icons">thumb_down</i></div>
            </div>
            <div class="card-info">
                <h1 class="heading-1">{{ name }}</h1>
                <span class="category">{{ category }}</span>
                <p class="argument-paragraph">{{ argument }}</p>
            </div>
            <div class="card-options">
                <div class="thumb up"><i class="material-icons">thumb_up</i></div>
                <div class="thumb down"><i class="material-icons">thumb_down</i></div>
                <button>Vote Now</button>
                <button>Vote Again</button>
            </div>
            <div class="card-votes">
                <div class="thumb up-status"><i class="material-icons">thumb_up</i></div>
                <div class="thumb down-status"><i class="material-icons">thumb_down</i></div>
            </div>
        </div>
    </div>
</template>

<script src="./survey-card.script.js"></script>
<style lang="scss" scoped src="./survey-card.scss"></style>
