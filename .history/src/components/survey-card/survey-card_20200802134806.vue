<template>
    <div>
        <div class="card-image" :style="styles">
            <div class="card-status">
                <div class="thumb up"><i class="material-icons">thumb_up</i></div>
                <div class="thumb down"><i class="material-icons">thumb_down</i></div>
            </div>
            <div class="card-info">
                {{ name }}
                {{ category }}
                {{ argument }}
            </div>
            <div class="card-options">
                <div class="thumb up"><i class="material-icons">thumb_up</i></div>
                <div class="thumb down"><i class="material-icons">thumb_down</i></div>
                <button>Vote Now</button>
            </div>
            <div class="card-votes"></div>
        </div>
    </div>
</template>

<script src="./survey-card.script.js"></script>
<style lang="scss" scoped src="./survey-card.scss"></style>
