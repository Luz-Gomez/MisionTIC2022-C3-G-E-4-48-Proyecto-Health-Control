<template>
  <body>
    <h1>¿Qué significa nivel de Presión Arterial?</h1>
    <v-img
      id="logo"
      lazy-src="../assets/imagenes/medico-consejos.jpg"
      max-height="50"
      max-width="950"
      min-height="100"
      min-width="300"
      position="center center"
      light="true"
      src="../assets/imagenes/medico-consejos.jpg"
    ></v-img
    ><br />
    <h3>
      De acuerdo a tus niveles de presión arterial, puedes tener las siguientes
      condiciones de salud:
    </h3>
    <br />
    <v-card class="mx-auto" max-width="1000" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Hipotensión o presión arterial baja.
          </v-list-item-title>
          <v-list-item-subtitle>
            Para reducir o prevenir los síntomas: Toma más agua y menos alcohol.
            Presta atención a las posiciones de tu cuerpo. Come porciones
            pequeñas y bajas
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            en carbohidratos. Haz ejercicio con regularidad.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Presión arterial Normal.</v-list-item-title>
          <v-list-item-subtitle>
            En hora buena! Tienes tu presión controlada, continua con tus buenos
            habitos. Sigue así!</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Presión arterial Elevada.</v-list-item-title>
          <v-list-item-subtitle>
            Reduce el exceso de peso. Haz ejercicio regularmente. Lleva una
            dieta saludable. Limita la cantidad de alcohol que bebes. No fumes.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>
            Hipertensión, Presión Arterial por encima de 130/80.
          </v-list-item-title>
          <v-list-item-subtitle>
            Las personas con hipertensión deben llevar un estilo de vida
            saludable y toman sus medicinas de manera regular. Incluir una dieta
            baja en sal.
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            Consumir preferentemente alimentos frescos, no procesados. Mantener
            un peso corporal adecuado.Realizar ejercicio físico (al menos 30
            minutos al día,
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            5 veces por semana). Evitar el consumo excesivo de alcohol. No
            fumar. Cuida tu salud!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> </v-card
    ><br />
  </body>
</template>

<style scoped>
h1 {
  text-align: left;
  font-family: monospace;
  font-size: 40px;
  padding: 50px 25px 20px 25px;
  color: white;
}

h3 {
  text-align: center;
  font-family: monospace;
  font-size: 22px;
  color: white;
}
</style>
