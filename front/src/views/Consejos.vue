<template>
    <body>
        <h1>¿Qué significa tu índice de masa corporal?</h1>
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
      ></v-img><br>
        <h3>De acuerdo a tu cálculo de índice de masa corporal, puedes tener las siguientes condiciones de salud:</h3><br>
        <v-card class="mx-auto" max-width="800" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente.</v-list-item-title
            ><v-list-item-subtitle 
              >Cuidado! tu peso está por debajo de los valores normales. Esto es tan malo como tener sobrepeso.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              >Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable.</v-list-item-title
            >
            <v-list-item-subtitle
              >En hora buena! Tu peso es el adecuado para tu estura. Sigue así!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title
              >Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.</v-list-item-title
            >
            <v-list-item-subtitle
              >Tienes algunos kilitos de más, pero puede deshacerte de ellos. Es el momentos de empezar a cuidarte más!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item four-line>
          <v-list-item-content>
            <v-list-item-title
              >Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad..</v-list-item-title
            >
            <v-list-item-subtitle
              >Lamento decirlo pero debe saberlo. Estás obeso debes mejorar tu alimentación y hacer ejercicio ahora!</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card><br>
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