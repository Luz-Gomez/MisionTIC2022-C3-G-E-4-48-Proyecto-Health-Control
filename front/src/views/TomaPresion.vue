<template>
  <body>
    <v-form>
      <v-container>
        <h2>Toma Presión Arterial</h2>
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
              label="Normal"
              solo
              disabled
              v-model="arterial"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
        <br><br>
        <v-btn id="boton" rounded dark v-on:click="guardarPresion()">Guardar</v-btn>
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
      };
    },
    mounted() {
      let listaPresiones = JSON.parse(localStorage.getItem("listaPresiones"));
      if(listaPresiones != undefined){
        this.listaPresiones = listaPresiones;
      }
      let tomaPresion = "";
      if(this.pas <= 90 && this.pad <= 60){
        tomaPresion = "Hipotensión"; 
      } else if ((this.pas > 90 && this.pas < 120) && (this.pad > 60 && this.pas < 80)){
        tomaPresion = "Normal"; 
      } else if ((this.pas > 119 && this.pas < 130) && (this.pad < 80)){
        tomaPresion = "Elevada"; 
      } else if ((this.pas > 129 && this.pas < 140) && (this.pad > 79 && this.pas < 90)){
        tomaPresion = "Etapa 1 de Hipertensión"; 
      } else if ((this.pas > 139 && this.pas < 181) && (this.pad > 99 && this.pas < 121)){
        tomaPresion = "Etapa 2 de Hipertensión"; 
      } else if (this.pas > 180 && this.pad > 120){
        tomaPresion = "Crisis Hipertensiva"; 
      }
    this.arterial = tomaPresion;
    },
    methods: {
      guardarPresion() {
        let listaPresiones = JSON.parse(localStorage.getItem("listaPresiones"));
        if(listaPresiones == undefined){
          listaPresiones =[]
        }
        const codigo = 1;
        const presiones = {
          codigo: codigo,
          pas:this.pas,
          pad:this.pad,
          pulso:this.pulso,
          fecha: new Date(Date.now()),
        };
        listaPresiones.push(presiones);
        this.pas = "";
        this.pad = "";
        this.fecha = Date.now();
        this.pulso = "";
      
        localStorage.setItem("listaPresiones", JSON.stringify(listaPresiones));
      },
    },
  };
</script>

<style>
h2 {
  padding: 60px 10px 10px 10px;
  text-align: left;
  font-family: monospace;
  color: white;
}
h3 {
  padding: 10px 10px 30px 10px;
  text-align: left;
  font-family: monospace;
  color: white;
}
#boton {
  float: left;
}
</style>
