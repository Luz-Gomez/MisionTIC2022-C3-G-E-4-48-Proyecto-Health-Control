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
        También podrás calcular tu índice de masa corporal para saber si estás pasado o pasada de peso. Este dato es importante para mantener 
        estable los valore de presión arterial y asegurarse de que se mantendrán estables en el tiempo. En Health control, queremos cuidarte 
        y ayudarte a que tengas el control de tu salud, 
      </p>
      <br />
      <div class="text-center">
    <v-btn to="/Registro"
      rounded
      color="info"
      dark
      class="ma-2"
      :loading="loading4"
      :disabled="loading4"
      @click="loader = 'loading4'"
    >
      Registrate ahora
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
  </div>
  
<br>
<br>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/chicamorena.jpg"
        max-height="100"
        max-width="900"
        position="center center"
        light="true"
        src="../assets/imagenes/chicamorena.jpg"
      ></v-img
      ><br />
      <p>
        Para que tengas un control de los registros de tus tomas de presión,
        hemos creado Health control, la aplicación que te permite registrar tus
        tomas de presión y ver tus valores de presión diastólica y sistólica en
        todo momento. Puedes accesar desde cualquier lugar y consultar tus datos
        en todo momento, incluso podrás brindarle acceso a tu médico de cabecera
        para que pueda monitorear tu estado de salud y agendar tus citas cuando
        lo considere necesario.
      </p>
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



