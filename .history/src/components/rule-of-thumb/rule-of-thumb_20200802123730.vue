<template>
    <div>
        <SurveyBanner />
        <Alert />
        <SurveyCard v-for="(card, i) in cards" :key="i" />
    </div>
</template>

<script src="./rule-of-thumb.script.js"></script>
<style lang="scss" scoped src="./rule-of-thumb.scss"></style>
