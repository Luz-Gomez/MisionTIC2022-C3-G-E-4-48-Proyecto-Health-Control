<template>
  <v-app>
    <v-app-bar
      absolute
      color="#65B3FC"
      dark
      shrink-on-scroll
      prominent
      src="./assets/imagenes/saludable.png"
      fade-img-on-scroll
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          ajustar-app
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Health control</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/About">About</v-tab>
          <v-tab to="/DatosUsuario">Registro</v-tab>
          <v-tab to="/TomaPresion">Servicios</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style>
.v-app-bar-title__content {
  width: 200px;
}
</style>