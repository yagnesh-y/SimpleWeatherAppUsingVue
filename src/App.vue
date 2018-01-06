<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue'
    import Navigation from './components/Navigation.vue'

    export default {
        name: 'app',
        components: {
            'home': Home,
            'navigation': Navigation
        }
    }
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>