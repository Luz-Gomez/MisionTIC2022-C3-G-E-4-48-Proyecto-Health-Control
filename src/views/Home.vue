<template>
  <div class="home">
    <body>
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/logo-health-control.png"
        max-height="1200"
        max-width="700"
        position="center center"
        light="true"
        src="../assets/imagenes/logo-health-control.png"
      ></v-img>
      <h1>Bienvenidos a Health control</h1>
      <br />
      <p>
        La presión arterial es uno de los aspectos de nuestra salud que más
        debemos cuidar, es la fuerza que ejerce la sangre sobre las paredes de
        las arterias, por tanto, monitorearla juega un papel crucial en la
        prevención de ataques cardiacos o accidentes cerebro vaculares.<br /><br />
        Cuando tu corazón late, bombea la sangre que ejerce una presión alta
        sobre las arterias, esta se conoce como presión sistólica. Cuando tu
        corazón reposa entre latidos, la presión es más baja y se le llama
        presión diastólica.<br /><br />
        La lectura de presión arterial se da en milímetros de mercurio (mm Hg) y
        tiene dos números, el primero representa la presión sistólica y el
        segundo, la presión diastólica. Una presión arterial normal está por
        debajo de 120/80 mm Hg. Para un adulto si la presión sistólica está
        entre 120 y 129 y la diastólica es menor a 80, entonces la presión
        arterial está elevada.
      </p>
      <br />
      <v-img
        id="logo"
        lazy-src="../assets/imagenes/chicamorena.jpg"
        max-height="400"
        max-width="1100"
        position="center center"
        light="true"
        src="../assets/imagenes/chicamorena.jpg"
      ></v-img
      ><br />
      <v-btn id="boton" class="white blue--text" block elevation="5" outlined rounded text large 
        >Regístrate ahora</v-btn
      >
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
  padding: 100px 100px 15px 25px;
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
  font-family: monospace;
}

</style>



