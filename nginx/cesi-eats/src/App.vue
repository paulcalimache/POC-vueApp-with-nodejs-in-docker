<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: '',
    }
  },
  methods: {
	  nouvelle_commande() {
      console.log("> SENT !");
    	axios.post('http://localhost:3000/commande').then((res) => {
        console.log(res.data);
        this.info = res.data;
      })
  	}
  }
}
</script>

<template>
  <main>
    <h1>Cliquez sur ci-dessous pour commander</h1>
    <button @click="nouvelle_commande()">Nouvelle commande</button>
    <h2>{{info}}</h2>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
  }
</style>
