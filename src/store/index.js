import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        weather: "",
        weather_forecast: [],
        weather_forecast_city: "",
        query: localStorage.getItem("query") || ''
    },
    mutations: {
        SET_WEATHER(state, result) {
            state.weather = result
        },
        SET_QUERY(state, query) {
            state.query = query
            localStorage.setItem("query", query)
        },
        SET_WEATHER_FORECAST(state, result) {
            state.weather_forecast = []
            state.weather_forecast_city = result.city.name

            for (let i = 0; i < result.list.length; i += 8) {
                const forescat = {
                    dt: result.list[i].dt,
                    temp: result.list[i].main.temp,
                    desc: result.list[i].weather[0].description
                }
                state.weather_forecast.push(forescat)

            }


        }
    },
    actions: {
        async FETCH_WEATHER({ commit }, query) {
            try {
                commit("SET_QUERY", query)
                const key = process.env.VUE_APP_KEY
                const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`);
                const result = await response.json();
                commit("SET_WEATHER", result)

            } catch (error) {
                console.log(error)
            }

        },
        async FETCH_WEATHER_FORECAST({ commit }, query) {
            try {
                const key = process.env.VUE_APP_KEY
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${query}&cnt=40&appid=${key}&units=metric`);
                const result = await response.json();
                commit("SET_WEATHER_FORECAST", result)
            } catch (error) {
                console.log(error)
            }

        }
    },
    getters: {
        GET_WEATHER: state => state.weather,
        GET_QUERY: state => state.query,
        GET_WEATHER_FORECAST: state => state.weather_forecast,
        GET_WEATHER_FORECAST_CITY: state => state.weather_forecast_city,
    }
})


export default store;