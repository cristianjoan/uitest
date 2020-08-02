<template>
    <div>
        <div class="menu-container">
            <router-link to="/" class="main-option menu-option">
                <span class="option-title">Rule Of Thumb</span>
            </router-link>
            <router-link to="/" class="menu-option">
                <i class="material-icons option-title">search</i>
            </router-link>
            <router-link to="/" class="menu-option">
                <span class="option-title">Log In / Sing Up</span>
            </router-link>
            <router-link to="/" class="menu-option">
                <span class="option-title">How It Works</span>
            </router-link>
            <router-link to="search" class="menu-option">
                <span class="option-title">Past Trials</span>
            </router-link>
        </div>
        <div class="menu-container-mobile">
            <div @click="openMenu = !openMenu" class="menu-icon">
                <i class="material-icons">search</i>
            </div>
            <div v-if="openMenu" class="menu-options-container">
                <div class="menu-option">
                    <span class="option-title">Rule Of Thumb</span>
                </div>
                <div class="menu-option">
                    <span class="option-title">Past Trials</span>
                </div>
                <div class="menu-option">
                    <span class="option-title">How It Works</span>
                </div>
                <div class="menu-option">
                    <span class="option-title">Log In / Sing Up</span>
                </div>
                <div class="menu-option">
                    <i class="material-icons">search</i>
                </div>
            </div>    
        </div>
    </div> 
</template>

<script src="./menu.script.js"></script>
<style lang="scss" scoped src="./menu.scss"></style>
