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
        <v-btn to="/IniciarSesion" large rounded color="#FFBE5E" dark
          >Iniciar Sesión</v-btn
        >
        <v-btn large rounded color="#FFBE5E" dark @click="logOut()"
          >Cerrar Sesión</v-btn
        > </v-row
      ><br /><br />
      <h3 align="center">¿Qué puedes hacer con Health control?</h3>
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
        </v-list-item> </v-card
      ><br />
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      sessionStorage.removeItem("mail");
      sessionStorage.removeItem("tipo");
      window.location.reload();
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
h2 {
  text-align: left;
  font-family: monospace;
  font-size: 25px;
  padding: 50px 25px 20px 25px;
  color: white;
}
h3 {
  text-align: center;
  font-family: monospace;
  font-size: 30px;
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
