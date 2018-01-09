<template>
    <div id="cities">
        <h1>Cities</h1>
        <ul v-for="city in cities">
            <li>
                <router-link v-bind:to="'/cities/' +city.name" @click="handleSearch(city.name)" exact>{{city.name}}</router-link>
                <span @click="removeCity(city.name)">&#10006;</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            cities() {
                return this.$store.state.cities;
            },
        },
        methods: {
             ...mapActions([
                'removeCity'
            ])
        }
    }
</script>

<style scoped>
#cities{
    margin-bottom: 30px;
    padding: 10px 20px;
    font-family: Arial, Helvetica, sans-serif;
}

h1{
    text-align: center;
}
li{
    margin: 0px 0px 0px -40px;
    list-style-type: none;
    text-align: center;
}

</style>