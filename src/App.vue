<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#65B3FC"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          class="deep-purple--text text--accent-4"
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          width="100%"
          app
        >
          <v-list-item to="/">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item to="/About">
            <v-list-item-title>Acerca de</v-list-item-title>
          </v-list-item>

          <v-list-item to="/DatosUsuario">
            <v-list-item-title>Datos de usuario</v-list-item-title>
          </v-list-item>

          <v-list-item to="/TomaPresion">
            <v-list-item-title>Toma de presión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <router-view></router-view>
    </v-sheet>
  </v-card>
</template>


<script>
export default {
  data: () => {
    return {
      drawer: false,
      items: [
        ["mdi-Home","Inicio"],
        ["mdi-About","Acerca de"]
      ]
    }
  }
};
</script>

