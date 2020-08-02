<template>
    <div>
        <div class="menu-container">
            <router-link tag="div" to="/" class="main-option menu-option">
                <span class="option-title">Rule of Thumb</span>
            </router-link>
            <router-link tag="div" to="search" class="menu-option">
                <i class="material-icons option-title">search</i>
            </router-link>
            <router-link tag="div" to="/" class="menu-option">
                <span class="option-title">Log In / Sing Up</span>
            </router-link>
            <router-link tag="div" to="/" class="menu-option">
                <span class="option-title">How It Works</span>
            </router-link>
            <router-link tag="div" to="/" class="menu-option">
                <span class="option-title">Past Trials</span>
            </router-link>
        </div>
        <div class="menu-container-mobile">
            <div @click="openMenu = !openMenu" class="menu-icon">
                <i class="material-icons">menu</i>
            </div>
            <div v-if="openMenu" class="menu-options-container">
                <router-link tag="div" to="/" class="menu-option">
                    <span class="option-title">Rule of Thumb</span>
                </router-link>
                <router-link tag="div" to="/" class="menu-option">
                    <span class="option-title">Past Trials</span>
                </router-link>
                <router-link tag="div" to="/" class="menu-option">
                    <span class="option-title">How It Works</span>
                </router-link>
                <router-link tag="div" to="/" class="menu-option">
                    <span class="option-title">Log In / Sing Up</span>
                </router-link>
                <router-link tag="div" to="search" class="menu-option">
                    <i class="material-icons">search</i>
                </router-link>
            </div>    
        </div>
    </div> 
</template>

<script src="./menu.script.js"></script>
<style lang="scss" scoped src="./menu.scss"></style>
