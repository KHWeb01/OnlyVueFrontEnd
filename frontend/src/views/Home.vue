<template>
  <div class="home">
    <div id="header">
      <button id="login">
        Login
      </button>
      <button id="logout">
        Logout
      </button>

      <router-link :to="{ name: 'Home' }"
          class="nav-link" active-class="active">
        Home
      </router-link>

      <router-link :to="{ name: 'DataHandlingTest' }"
          class="nav-link" active-class="active">
        DataHandlingTest
      </router-link>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
div {
  border: 1px solid #ccc;
}

#header {
  padding: 15px;
  margin-bottom: 15px;
  margin: 5px 5px;
}

img {
  width: auto;
  height: auto;
  max-width: 1000px;
  max-height: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#login, #logout {
  background-color: #77aadd;
  color: #ffffff;
  font-weight: bold;
  float: right;
}

</style>