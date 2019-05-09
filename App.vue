<template>
  <v-app>
    <v-toolbar color="#003C8A">
      <v-toolbar-items>
        <img src="./assets/svg/logo.svg" id="logoimg" alt width="48" height="48">
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn id="toolbartext" flat>Hjem</v-btn>
        </router-link>
        <router-link to="/Assignments">
          <v-btn id="toolbartext" flat>Opgaver</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
#logoimg {
  margin: 7px 15px 0px 0px;
}
#toolbartext {
  color: #ffffff;
  height: 64px;
  font-family: quicksand;
  text-decoration: none;
}
.v-toolbar__items a {
  color: red;
  text-decoration:none;
}
</style>
