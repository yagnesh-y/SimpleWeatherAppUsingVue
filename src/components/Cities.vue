<template>
    <div id="cities">
        <h2>Cities: </h2>
        <ul v-for="city in cities">
            <li>
                <router-link v-bind:to="'/cities/' +city.name" @click="handleSearch(city.name)" exact>{{city.name}}</router-link>
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
        ...mapGetters([
            'showCities'
        ])
        }
    }
</script>

<style scoped>
#cities{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
</style>