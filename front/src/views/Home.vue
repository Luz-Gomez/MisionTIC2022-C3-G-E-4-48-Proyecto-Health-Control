<template>
  <div class="home">
    <body>
      <h1>Cuida tu presión arterial</h1>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/logoHealthControl.png"
        max-height="50"
        max-width="950"
        min-height="50"
        min-width="200"
        position="center center"
        light="true"
        src="../assets/imagenes/logoHealthControl.png"
      ></v-img>

      <p>
        La aplicación que te permitirá registrar tus tomas de presión, así como
        llevar un control periódico sobre tus registros. Puedes acceder a tus
        registros en todo momento y lugar, así como obtenerlos en formato pdf o
        directamente en tu correo. En health control, queremos ayudarte a cuidar
        tu salud. Únete a la comunidad Health control y disfruta de nuestros
        servicios.
      </p>

      <v-row align="center" justify="space-around">
        <v-btn to="/IniciarSesion" large color="#FFBE5E" dark
          >Iniciar Sesión</v-btn
        > </v-row
      ><br /><br />
      <h3>¿Qué puedes hacer con Health control?</h3>
      <br />
      <v-card class="mx-auto" max-width="600" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Regitra tus datos de presión arterial.</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              >Calcula tu índice de masa corporal IMC.</v-list-item-title
            >
            <v-list-item-subtitle
              >*Encuentra esta opción entre tus datos de
              usuario.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title
              >Accede a tus registros de presión arterial en todo momento y
              lugar.</v-list-item-title
            >
            <v-list-item-subtitle
              >*Puedes obtenerlos en pdf, para descargar e imprimir o
              directamente en tu correo electrónico.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item four-line>
          <v-list-item-content>
            <v-list-item-title
              >Registra tu médico tratante para que tenga acceso a tus datos de
              presión arterial.</v-list-item-title
            >
            <v-list-item-subtitle
              >*Esta opción solo esta disponible si tu médico registrado en la
              plataforma.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card><br>
    </body>
  </div>
</template>

<script>
import { validarUsuario } from "../services/Login.Service";

export default {
  data: () => ({
    step: 1,
    return: {
      mail: "",
      contraseña: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesMail: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      rulesContraseña: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      error: "",
    },
  }),
  props: {
    source: String,
  },
  methods: {
    loginFunction() {
      validarUsuario(this.mail, this.contraseña)
        .then((respuesta) => {
          const usuario = respuesta.data;
          sessionStorage.setItem("mail", usuario.mail);
          sessionStorage.setItem("tipo", usuario.tipo);
          this.$emit("logged", undefined);
          window.location.reload();
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.respuesta.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
  },
};
</script>

<style scope>
body {
  background-color: #65b3fc;
}

#logo {
  display: block;
  margin: auto;
  padding: 250px 100px 15px 25px;
}
h1 {
  text-align: left;
  font-family: monospace;
  font-size: 30px;
  padding: 50px 25px 20px 25px;
  color: white;
}
h3 {
  text-align: center;
  font-family: monospace;
  font-size: 40px;
  color: white;
}
p {
  text-align: justify;
  font-family: monospace;
  font-size: 20px;
  padding: 10px 100px 10px 100px;
  color: whitesmoke;
}
</style>
