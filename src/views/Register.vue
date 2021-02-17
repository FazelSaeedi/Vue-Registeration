<template>
  <h1>Register</h1>
  <p>
    <label class="sr-only" >Email Address</label>
    <input  v-model="email" class="form-control" type="email" placeholder="Email Address" required autofocus>
  </p>

  <p>
    <label class="sr-only" >Password</label>
    <input v-model="password" class="form-control" type="password" placeholder="Password" required>
  </p>

  <p>
    <label class="sr-only" >Confirm Password</label>
    <input v-model="confirmpassword" class="form-control" type="password" placeholder="Password" required>
  </p>

  <button @click="submit" class="btn btn-primary btn-block" type="button">Register</button></template>

<script>
export default {
  name: "Register" ,
  data(){
    return {
      email : '',
      password : '',
      confirmpassword : ''
    }
  },
  methods: {
    submit: function(){

      if (this.password === this.confirmpassword)
      {
        var user = {
          email : this.email ,
          password : this.password ,
          onlineStatus : false
        }

        localStorage.setItem(this.email , JSON.stringify(user))

        alert("You Registered successfully");

        this.$router.push('Login')

      }else{
        alert("Your Password is not Confirmed")
      }

    }
  }
}
</script>

<style scoped>

</style>