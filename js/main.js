console.log(Vue.version);

Vue.createApp({
    data() {
        return { msg: 'Hello' }
    }
  }).mount('#app');