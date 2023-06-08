console.log(Vue.version);

Vue.createApp({
    data() {
        return { 
            msg: 'Hello',
            name: '',
            age: '',
     }
    },
    methods: {
        setName(event) {
          this.name = event.target.value;
        },
        setAge(event) {
            this.age = event.target.value;
          }
    }
  }).mount('#app');