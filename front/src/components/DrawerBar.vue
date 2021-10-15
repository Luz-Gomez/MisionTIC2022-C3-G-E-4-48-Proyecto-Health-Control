<template>
  <v-navigation-drawer v-model="drawer" app bottom temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle> {{ username }} </v-list-item-subtitle>
        <v-list-item-subtitle> {{ tipo }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav v-if="tipo === 'usuario'">
      <div v-for="item in itemsUsuario" :key="item.nombre">
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

    <v-list dense nav v-if="tipo === 'medico'">
      <div v-for="item in itemsMedico" :key="item.nombre">
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
      username: "",
      tipo: "",
      items: [
        { nombre: "Inicio", imagen: "mdi-home", ruta: "/", ver: true },
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
          nombre: "IniciarSesion",
          imagen: "mdi-account-plus",
          ruta: "/IniciarSesion",
          ver: true,
        },
      ],
      itemsUsuario: [
        {
          nombre: "DatosUsuario",
          imagen: "mdi-account-circle",
          ruta: "/DatosUsuario",
          ver: true,
        },
        {
          nombre: "Toma de presión",
          imagen: "mdi-heart-pulse",
          ruta: "/TomaPresion",
          ver: true,
        },
      ],
      itemsMedico: [
        {
          nombre: "Consulta Toma de presión",
          imagen: "mdi-clipboard-pulse",
          ruta: "/ConsultaTomaPresion",
          ver: true,
        },
        {
          nombre: "Perfil Medico",
          imagen: "mdi-account-child-circle",
          ruta: "/DatosMedico",
          ver: true,
        },
      ],
    };
  },

  mounted() {
    this.username = sessionStorage.getItem("mail");
    this.tipo = sessionStorage.getItem("tipo");
  },
  methods: {
    hasRole(role) {
      return sessionStorage.getItem("tipo") == role;
    },
  },
};
</script>
