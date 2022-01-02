const apiKey = '6ad7a6de723a46efbc5180552213112';

const vm = new Vue({
  el: "#app",
  data: {
    location: 'Contagem',
    dataLocation: {},
    sectionDataOpen: true,
    inputValue: "",
  },
  methods: {
    fetchData() {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.location}&days=5&aqi=no&alerts=no&lang=pt`)
        .then(response => response.json())
        .then(data => {
          this.dataLocation = data;
        })
    },
    getDataForm() {
      this.location = this.inputValue;
    }
  },
  watch: {
    location() {
      this.fetchData();
      setTimeout(() => {
        this.sectionDataOpen = true;
      }, 100)
    }
  },
  created() {
    this.fetchData()
  }
})