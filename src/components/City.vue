<template>
    <div id="city">
        <div id="today-temp">
            <h1>{{name}}</h1>
        </div>
        <div id="main-card">
            <!-- check if any errors from API else render Weather report from API-->
            <div v-if="todayData.length > 0">
                <div v-for="data in todayData" id="today">
                    <div id="today-temp-day">
                        <p>{{data.temp.day}}&deg;C</p>
                    </div>
                    <div id="forecast">
                        <p id="today-temp-min">{{data.temp.min}}&deg;C</p>
                        <p id="today-temp-max">{{data.temp.max}}&deg;C</p>
                    </div>
                </div>
            </div>
            <div v-else="todayData.length ===0">
                <div id="today-temp-day">
                    <p>'Some error in retrieving Weather report..'</p>
                </div>
            </div>
        </div>

        <div id="cards">
            <!-- Four cards to display the forecast..-->
            <div id="card" v-for="datas in forecastData">
                <div id="forecast-days">
                    <div id="forecast-days-day">
                        <p>{{datas.temp.day}}&deg;C</p>
                    </div>
                    <div id="forecast-days-forecast">
                        <p>{{datas.temp.min}}&deg;C</p>
                        <p>{{datas.temp.max}}&deg;C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import openWeatherMap from '../api/Weather'

    export default {
        data() {
            return {
                name: this.$route.params.name,
                todayData: [],
                forecastData: []
            }
        },
        created() {
            console.log('created....')
            openWeatherMap.getTemp(this.name).then((res) => {
                console.log('success in calling api..')
                console.log(res)
                this.todayData = res.splice(0, 1)
                this.forecastData = res;
            }, (err) => {
                console.log('Some error in calling api...')
                console.log(err)
                //this.todayData = 'Some error in retrieving temp forecast info..'
            })
        },
        methods: {}
    }
</script>

<style>
#today-temp{
    margin: 0 auto;
    text-align: center;
    font-size: 1.2em;
    font-weight: 300;
}

#cards, #main-card{
    display: flex;
    justify-content: space-around;    
}

#card{
  height: 100px;
  background: #f1f1f1;
  border: 5px solid #eee;
  margin: 1px 1px;
  flex: 1;
  
}

#card:hover{
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

#forecast{
    font-size: 2em;
    margin: 20px 0px 20px 80px;
}

#today-temp-day{
    font-size: 4.5em;
    font-weight: 100;
    color:grey;
    text-align: center;
}

#forecast-days, #today{
    display: flex;
    justify-content: space-around
}

#forecast-days-day{
    font-size: 2em;
}

</style>