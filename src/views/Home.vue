<template>
  <div class="row">
    <form class="col s12" @submit.prevent="fechWeather">
      <div class="row">
        <div class="input-field col s12">
          <input
            id="Enter_city"
            v-model.trim="query"
            type="text"
            class="validate"
          />
          <label for="Enter_city">Enter city</label>
        </div>
      </div>
    </form>
    <Loader v-if="!weather" />
    <div class="weather_body" v-else>
      <div class="city">
        {{ weather && weather.name }}, {{ weather && weather.sys.country }}
      </div>
      <div class="date">{{ getDate() }}</div>
      <div class="temp">
        {{ Math.round(weather && weather.main.temp) }}&deg;
      </div>
      <div class="way">{{ weather && weather.weather[0].description }}</div>
      <div class="hum">{{ weather && weather.main.humidity }}%</div>
    </div>

    <div class="weather_footer">
      <a class="waves-effect waves-light btn-small" @click="citySelection1"
        >Minsk</a
      >
      <a class="waves-effect waves-light btn-small" @click="citySelection2"
        >Moscow</a
      >
      <a class="waves-effect waves-light btn-small" @click="citySelection3"
        >Bratislava</a
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data: () => ({
    query: "Minsk",
    arrayCity: ["Minsk", "Moscow", "Bratislava"],
  }),

  computed: {
    ...mapGetters({
      weather: "GET_WEATHER",
      queryLs: "GET_QUERY",
    }),
  },

  methods: {
    ...mapActions(["FETCH_WEATHER"]),
    fechWeather() {
      this.FETCH_WEATHER(this.query);
    },

    citySelection1: function () {
      for (let i = 0; i < this.arrayCity.length; i++) {
        if (this.arrayCity[i] === "Minsk") {
          this.query = "Minsk";
          this.fechWeather();
        }
      }
    },
    citySelection2: function () {
      for (let i = 0; i < this.arrayCity.length; i++) {
        if (this.arrayCity[i] === "Moscow") {
          this.query = "Moscow";
          this.fechWeather();
        }
      }
    },
    citySelection3: function () {
      for (let i = 0; i < this.arrayCity.length; i++) {
        if (this.arrayCity[i] === "Bratislava") {
          this.query = "Bratislava";
          this.fechWeather();
        }
      }
    },

    getDate: function () {
      return this.$moment().format("DD MMMM YYYY");
    },
  },

  mounted() {
    window.M.updateTextFields();
    if (this.queryLs) {
      this.query = this.queryLs;
    }
    this.FETCH_WEATHER(this.query);
  },
};
</script>
<style lang="less" scoped>
.weather_body {
  text-align: center;
}
.city {
  font-size: 25px;
  color: #647585;
  margin-bottom: 10px;
}
.date {
  font-size: 18px;
  color: #cfcfcf;
}
.temp {
  font-size: 60px;
  color: #647585;
  font-weight: bold;
}
.way {
  font-size: 18px;
  font-weight: bold;
  color: #647585;
}
.hum {
  font-size: 30px;
  color: #647585;
  margin-top: 5px;
}
.weather_footer {
  margin-top: 45px;
  margin-bottom: 4px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.error {
  text-align: center;
}
</style>
