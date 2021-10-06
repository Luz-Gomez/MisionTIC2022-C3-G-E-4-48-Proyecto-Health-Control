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
        Health control es la aplicación que te permitirá registrar tus tomas de presión arterial, para llevar un control de tu salud. 
        Puedes acceder a tus datos de presión arterial en cuanlquier momento y lugar, de esta manera podrás analizar tu estado 
        de salud en tiempo real. Además, puedes descargar tus datos en pdf o pedrile a tu médico que acceda a estos a través de la aplicación.</p><br>     
<v-row
    align="center"
    justify="space-around"
  >
  <v-btn to="/DatosUsuario"
  large
  color="#FFBE5E">Regístrate como usuario</v-btn>
  <v-btn to="/DatosMedico"
  large
  color="#FFBE5E">Regístrate como médico</v-btn>
</v-row><br><br>

<p>Si lo deseas, también puedes calcaular tu índice de masa corporal. Este dato es importante para tu salud en general y asegurarse de que 
        los valores de presión arterial se mantendrán estables en el tiempo. En Health control, queremos cuidarte 
        y ayudarte a que tengas el control de tu salud. 
      </p> 
      <h3>¿Qué puedes hacer con Health control?</h3><br>
      <v-card
    class="mx-auto"
    max-width="600"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Regitra tus datos de presión arterial.</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Calcula tu índice de masa corporal IMC.</v-list-item-title>
        <v-list-item-subtitle>*Encuentra esta opción entre tus datos de usuario.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Accede a tus registros de presión arterial en todo momento y lugar.</v-list-item-title>
        <v-list-item-subtitle>*Puedes obtenerlos en pdf, para descargar e imprimir o directamente en tu correo electrónico.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item four-line>
      <v-list-item-content>
        <v-list-item-title>Registra tu médico tratante para que tenga acceso a tus datos de presión arterial.</v-list-item-title>
        <v-list-item-subtitle>*Esta opción solo esta disponible si tu médico registrado en la plataforma.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  <br>
    </body>
  </div>
</template>

<style>
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
  font-family:  monospace;
  font-size: 40px;
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

#boton {
  display: block;
  margin: auto;
  font-family: monospace;
  padding: 20px 20px 20px 20px;
}

</style>



