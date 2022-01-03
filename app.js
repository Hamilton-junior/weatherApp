const apiKey = '6ad7a6de723a46efbc5180552213112';

const vm = new Vue({
  el: "#app",
  data: {
    location: 'Contagem',
    dataLocation: {},
    sectionDataOpen: true,
    inputValue: "",
  },
  filters: {
    degreesCelsius(value) {
      return `${value}ºc`;
    },
    dataTransform(value) {
      const dataValue = value.split("-");
      return `${dataValue[2]}-${dataValue[1]}-${dataValue[0]}`
    },
    localTimeTransform(value) {
      const timeValue = value.split(" ");
      const date = timeValue[0];
      const time = timeValue[1];
      const dateTransform = date.split("-");
      return `${dateTransform[2]}-${dateTransform[1]}-${dateTransform[0]} | ${time}`
    },
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
      this.sectionDataOpen = true;
    }
  },
  created() {
    this.fetchData()
  }
})