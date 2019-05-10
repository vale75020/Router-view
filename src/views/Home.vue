<template>
  <div class="home">
    <h1>component Home</h1>
    <hr>
      <button @click='goToLogin()'>Go To Login</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  methods: {  // functions 
    goToLogin() {
      //alert('it works!')  // navigation dinamique
      this.$router.push('login') // pour acceder au router de l'app
      // pour se delogger utiliser replace() pour effacer l'historique
    }
  }
}
</script>
