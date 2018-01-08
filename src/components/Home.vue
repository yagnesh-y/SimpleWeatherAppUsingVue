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
body{
    margin: 0 auto;
}
input[type="text"]{
    
    display: block;
    margin: 0 auto;
    padding: 4px 8px;
    border: 1px solid black;
}

button{
    display: block;
    margin: 15px auto;
    padding: 3px 10px;
    border: 1px solid black;
}

h2{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

</style>