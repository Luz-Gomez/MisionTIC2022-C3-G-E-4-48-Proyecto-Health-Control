<template>
ajustar-app
  <div class="tomapresion">
    <br>
    <h1>Ingresa tus datos presión aquí</h1>
    <br>
  </div>
</template>

<style>
h1 {
  text-align: center;
}

body {
  background-color: #65B3FC;
}

  <v-form>
    <v-container>
      <h3>Por favor registre sus tomas de presión</h3>
      <v-row>
        <v-col
          cols="2"
        >
          <v-text-field 
            label="Sístole"
            value="000"
            suffix="mmHg"
            v-model="pas"
          ></v-text-field>
        </v-col>
        <v-col
          cols="2"
        >
          <v-text-field 
            label="Diástole"
            value="000"
            suffix="mmHg"
            v-model="pad"
          ></v-text-field>
        </v-col>
        <v-col
          cols="2"
        >
          <v-text-field 
            label="Pulsaciones"
            value="000"
            suffix="lpm"
            v-model="pulso"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      
      },
  }
</script>
main


</style>


