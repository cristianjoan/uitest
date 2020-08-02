<template>
    <div>
        <SurveyBanner />
        <Alert />
        <SurveyCard v-for="i in 4" :key="i" />
    </div>
</template>

<script src="./rule-of-thumb.script.js"></script>
<style lang="scss" scoped src="./rule-of-thumb.scss"></style>
