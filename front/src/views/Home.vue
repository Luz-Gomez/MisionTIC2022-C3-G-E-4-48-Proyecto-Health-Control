<template>
  <div class="home">
    <body>
      <h2>Bienvenidos a Helath control</h2>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/health control.png"
        max-height="50"
        max-width="1100"
        position="center center"
        light="true"
        src="../assets/imagenes/health control.png"
      ></v-img>
      <br />
      <p>
        La aplicación que te permitirá llevar un registro de tus tomas de presión, para seguir un control de tu propia salud. En cualquier  
        momento y lugar podrás acceder a tus datos y análisis sobre tu estado de presión arterial.<br /><br />
        Si lo deseas, también puedes calcaular tu índice de masa corporal. Este dato es importante para mantener 
        estable los valores de presión arterial y asegurarse de que se mantendrán estables en el tiempo. En Health control, queremos cuidarte 
        y ayudarte a que tengas el control de tu salud. 
      </p><br>        
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
h2 {
  text-align: left;
  font-family:  monospace;
  font-size: 60px;
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



