console.log(Vue.version);

let a = Vue.createApp({
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

let b = Vue.createApp({
    data() {
      return {
        str: ''
     }
    },
    methods: {
      clickHandler() {
        let input = document.getElementById('inp')
        this.str = `input=${input.value}`;
      }
      }
    }).mount('#app1');