<template>
  <body>
    <v-form>
      <v-container>
        <h3>Por favor registre sus tomas de presión</h3>
        <v-row>
          <v-col
            cols="2"
          >
            <v-text>Sístole</v-text>
            <v-text-field 
              label="000"
              solo
              :rules="pasRules"
              value="000"
              suffix="mmHg"
              requerido
              v-model="pas"
            ></v-text-field>
          </v-col>
          <v-col
            cols="2"
          >
            <v-text>Diástole</v-text>
            <v-text-field 
              label="000"
              solo
              :rules="padRules"
              value="000"
              suffix="mmHg"
              v-model="pad"
            ></v-text-field>
          </v-col>
          <v-col
            cols="2"
          >
            <v-text>Pulsaciones</v-text>
            <v-text-field 
              label="000"
              solo
              :rules="pulsoRules"
              value="000"
              suffix="lpm"
              v-model="pulso"
            ></v-text-field>
          </v-col>
          <v-col
            cols="3"
          >
            <v-text>Presión Arterial</v-text>
            <v-text-field 
              label=""
              solo
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table><br>
        <v-btn rounded dark>Guardar</v-btn>
        <br>
        <h3>Puedes también calcular tu índice de masa corporal</h3>
        <v-row>
          <v-col
            cols="2"
          >
            <v-text>Ingresa tu peso</v-text>
            <v-text-field 
              label="000"
              solo
              :rules="pasRules"
              value="000"
              suffix="Kg"
              requerido
              v-model="pas"
            ></v-text-field>
          </v-col>
          <v-col
            cols="2"
          >
            <v-text>Ingresa tu estatura</v-text>
            <v-text-field 
              label="000"
              solo
              :rules="padRules"
              value="000"
              suffix="m"
              v-model="pad"
            ></v-text-field>
          </v-col>
          <v-col
            cols="3"
          >
            <v-text>IMC (Índice de masa corporal)</v-text>
            <v-text-field 
              label=""
              solo
              disabled
            ></v-text-field>
          </v-col>
          </v-row>
          
        <v-btn rounded dark >Guardar</v-btn>
      </v-container>
    </v-form>
  </body>  
</template>

<script>
  export default {
    data () {
      return {
      pasRules: [
        (value) => !!value || "Required.",
        (value) => (value <60 && value > 250) || "Valores validos entre 60 y 250",
        ],
      padRules: [
        (value) => !!value || "Required.",
        (value) => (value <30 && value > 120) || "Valores validos entre 30 y 120",
        ],
      pulsoRules: [
        (value) => !!value || "Required.",
        (value) => (value <60 && value > 90) || "Valores validos entre 60 y 90",
        ],
      headers: [
          {
            text: 'Fecha',
            align: 'start',
            sortable: false,
            value: 'fecha',
          },
          { text: 'Sístole', value: 'pas' },
          { text: 'Diástole', value: 'pad' },
          { text: 'Pulsaciones', value: 'pulso' },
          { text: 'Presión Arterial', value: 'Normal' },
        ],
      }
    }
  }
</script>

<style>
h3 {
  padding: 60px 10px 30px 10px;
  text-align: left;
  font-family: monospace;
  color: white;
}
</style>
