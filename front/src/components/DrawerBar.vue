<template>
  <v-navigation-drawer v-model="drawer" app bottom temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle> {{ username }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav>
      <div v-for="item in items" :key="item.nombre">
        <v-list-item link :to="item.ruta" v-if="item.ver">
          <v-list-item-icon>
            <v-icon>{{ item.imagen }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.nombre }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["title", "drawer"],
  data() {
    return {
      mail: "",
      items: [
        {
          nombre: "Inicio",
          imagen: "mdi-home",
          ruta: "/",
          ver: true,
        },
        {
          nombre: "Home",
          imagen: "mdi-apps-box",
          ruta: "/Home",
          ver: this.hasRole("admin"),
        },
        {
          nombre: "Acerca de",
          imagen: "mdi-help-box",
          ruta: "/about",
          ver: true,
        },
        {
          nombre: "DatosUsuario",
          imagen: "mdi-account-circle",
          ruta: "/DatosUsuario",
          ver: true,
        },
        {
          nombre: "Toma de presión",
          imagen: "mdi-car-cruise-control",
          ruta: "/TomaPresion",
          ver: true,
        },
        {
          nombre: "Consulta Toma de presión",
          imagen: "mdi-wallet",
          ruta: "/ConsultaTomaPresion",
          ver: true,
        },
        {
          nombre: "Perfil Medico",
          imagen: "mdi-account-child-circle",
          ruta: "/DatosMedico",
          ver: true,
        },
        {
          nombre: "IniciarSesion",
          imagen: "mdi-account-plus",
          ruta: "/IniciarSesion",
          ver: true,
        },
      ],
    };
  },
  mounted() {
    this.username = sessionStorage.getItem("mail");
  },
  methods: {
    hasRole(role) {
      return sessionStorage.getItem("role") == role;
    },
  },
};
</script>

<style>
</style>