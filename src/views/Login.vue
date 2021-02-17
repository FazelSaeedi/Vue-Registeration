<template>
  <h1>Login</h1>
  <p>
    <label class="sr-only" >Email Address</label>
    <input v-model="email" class="form-control" type="email" placeholder="Email Address" required autofocus>
  </p>

  <p>
    <label class="sr-only" >Password</label>
    <input v-model="password" class="form-control" type="email" placeholder="Password" required>
  </p>

  <button  @click="submit" class="btn btn-primary btn-block" type="button">Login</button></template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit: function () {

      var user = localStorage.getItem(this.email)


      user = JSON.parse(user)
      console.log(user)

      if (user) {
        if (this.password === user.password && this.email === user.email) {

          var userLogin = { email : this.email  };
          localStorage.setItem('userlogin', JSON.stringify(userLogin));

          alert("you are login")
          this.$router.push('/')
        }else
          alert("your Password is wrong")
      }
      else
        alert('Your UserName or Password is wrong')

    }
  }
}
</script>

<style scoped>

</style>