<template>
  <div class="row">
    <div>
      <form class="col s12" @submit.prevent="fechForecast">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="Enter_city"
              v-model="query"
              type="text"
              class="validate active"
            />
            <label for="Enter_city">Enter city</label>
          </div>
        </div>
      </form>
      <LoaderForecast v-if="!forecast.length" />
      <div class="weather_body" v-else>
        <div class="city">{{ forecast_city }}</div>
        <div class="weather_body_item" v-for="item in forecast" :key="item.id">
          <div class="date">
            {{ $moment.unix(item.dt).format("DD MMMM YYYY") }}
          </div>
          <div class="temp">{{ Math.round(item.temp) }}&deg;</div>
          <div class="way">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Page",
  data: () => ({
    query: "Minsk",
  }),

  computed: {
    ...mapGetters({
      forecast: "GET_WEATHER_FORECAST",
      forecast_city: "GET_WEATHER_FORECAST_CITY",
    }),
  },

  methods: {
    ...mapActions(["FETCH_WEATHER_FORECAST"]),
    fechForecast() {
      this.FETCH_WEATHER_FORECAST(this.query);
    },
  },

  mounted() {
    window.M.updateTextFields();
    this.query = this.$route.query.city;
    this.FETCH_WEATHER_FORECAST(this.query);
  },
};
</script>
<style lang="less" scoped>
.weather_body {
  margin: 0 20px;
}
.city {
  text-align: center;
  font-size: 25px;
  color: #647585;
  margin-bottom: 20px;
}
.weather_body_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.weather_body_item + .weather_body_item {
  margin-top: 10px;
}
.date {
  font-size: 18px;
  color: #cfcfcf;
}
.temp {
  font-size: 30px;
  color: #647585;
  font-weight: bold;
  margin-left: 30px;
}
.way {
  font-size: 18px;
  font-weight: bold;
  color: #647585;
  margin-left: auto;
}
</style>