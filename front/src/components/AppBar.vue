<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="switchDrawer()"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-if="!isLoggedIn">
          <v-list-item-title @click="showLogin = true">Iniciar sesión</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isLoggedIn" @click="logOut()">
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="showLogin" max-width="600px">
      <Login v-on:logged="showLogin = false"></Login>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import Login from "./Login.vue";

export default {
  components: {
    Login
  },
  props: ["title", "drawer"],
  data() {
    return {
      showLogin: false
    };
  },
  methods: {
    switchDrawer() {
      this.$emit("switch-drawer", !this.drawer);
    },
    logOut(){
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("role");
      window.location.reload();
    }
  },
  computed: {
    isLoggedIn() {
      const username = sessionStorage.getItem("username");
      return username != undefined;
    },
  },
};
</script>

<style>
</style>