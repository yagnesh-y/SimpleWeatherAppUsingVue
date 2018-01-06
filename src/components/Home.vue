<template>
    <div id="home">
        <h2>Add new Cities</h2>
        <input type="text" v-model:value="newCity" placeholder="add new city name">
        <button @click="addCity(newCity)">Add Cities</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                newCity: 'some city name'
            }
        },
        computed: {
        ...mapGetters([
            'showCities'
        ])
        },
        methods: {
        ...mapActions([
            'addCity'
        ])
        }
    }
</script>

<style scoped>

</style>