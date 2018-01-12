<template>
    <div id="home">
        <h2>Add new Cities</h2>
        <input type="text" v-model:value="newCity" placeholder="add new city name">
        <button @click="checkCity">Add Cities</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import openWeatherMap from '../api/Weather'

    export default {
        data() {
            return {
                newCity: 'some city name'
            }
        },
        methods: {
        ...mapActions([
            'addCity'
        ]),
            //method to check if the city entered by user is a valid user or not.
            checkCity: function () {
                openWeatherMap.getTemp(this.newCity).then((res) => {
                    //if success in calling api then we are adding city to the store...
                    this.addCity(this.newCity);
                    alert('city added..')
                }, (err) => {
                    //alert the error to enter a valid city name if city not found exception..
                    if (err.message === 'City not found..') alert('Enter valid city name..')
                })
            }
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