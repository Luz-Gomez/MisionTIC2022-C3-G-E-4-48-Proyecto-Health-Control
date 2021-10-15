<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="switchDrawer()"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-if="!isLoggedIn" to="/IniciarSesion">
          <v-list-item-title>Iniciar sesión</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isLoggedIn" @click="logOut()">
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  props: ["title", "drawer"],
  data() {
    return {
      showLogin: false,
    };
  },
  methods: {
    switchDrawer() {
      this.$emit("switch-drawer", !this.drawer);
    },
    logOut() {
      sessionStorage.removeItem("mail");
      sessionStorage.removeItem("tipo");
      this.$emit("log-out");
      this.$router.push("/");
    },
  },
  computed: {
    isLoggedIn() {
      const username = sessionStorage.getItem("mail");
      return username != undefined;
    },
  },
};
</script>
