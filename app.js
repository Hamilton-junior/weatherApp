const apiKey = '6ad7a6de723a46efbc5180552213112';

const vm = new Vue({
  el: "#app",
  data: {
    defaultCity: {},
  },
  methods: {
    fetchInitial() {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=pelotas&days=5&aqi=no&alerts=no
      `)
        .then(response => response.json())
        .then(data => {
          this.defaultCity = data;
        })
    }
  },
  created() {
    this.fetchInitial();
  }
})