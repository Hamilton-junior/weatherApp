// ter uma variavel que recebe o local
// uma variavel para receber os dados
// criar um método para pegar os dados da api

const apiKey = '6ad7a6de723a46efbc5180552213112';

const vm = new Vue({
  el: "#app",
  data: {
    location: 'Contagem',
    dataLocation: {},
  },
  methods: {
    fetchData() {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.location}&days=5&aqi=no&alerts=no&lang=pt`)
        .then(response => response.json())
        .then(data => {
          this.dataLocation = data;
        })
    },
  },
  created() {
    this.fetchData()
  }
})