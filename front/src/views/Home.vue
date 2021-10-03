<template>
  <div class="home">
    <body>
      <h1>Bienvenidos a Health control</h1>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/logoHC.png"
        max-height="50"
        max-width="1100"
        position="center center"
        light="true"
        src="../assets/imagenes/logoHC.png"
      ></v-img>
      <br />
      <p>
        La aplicación que te permitirá llevar un registro de tus tomas de presión, para seguir un control de tu propia salud. En cualquier  
        momento y lugar podrás acceder a tus datos y análisis sobre tu estado de presión arterial.<br /><br />
        Si lo deseas, también puedes calcaular tu índice de masa corporal. Este dato es importante para mantener 
        estable los valores de presión arterial y asegurarse de que se mantendrán estables en el tiempo. En Health control, queremos cuidarte 
        y ayudarte a que tengas el control de tu salud. 
      </p>        
<v-row
    align="center"
    justify="space-around"
  >
  <v-btn to="/DatosUsuario"
  large
  color="#FFBE5E">Regístrate</v-btn>
</v-row><br>
      <h3>¿Qué puedes hacer con Health control?</h3><br>
      <v-card
    class="mx-auto"
    max-width="600"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Regitrar tus datos de presión arterial</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Calcular tu índice de masa corporal IMC</v-list-item-title>
        <v-list-item-subtitle>Esta opción se encuentra en tus datos de usuario</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Solicitar tus registros por periodos en todo momento y lugar</v-list-item-title>
        <v-list-item-subtitle>Podrás obtener tus datos en pdf o en tu correo electrónico</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item four-line>
      <v-list-item-content>
        <v-list-item-title>Registrar tu médico tratante para que tenga acceso a tus datos de presión arterial</v-list-item-title>
        <v-list-item-subtitle>Tu médico tendrá que estar registrado en la plataforma</v-list-item-subtitle>
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
  text-align: center;
  font-family: monospace;
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



