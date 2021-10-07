<template>
  <body>
    <v-container>
      <h2>Toma Presión Arterial</h2>
      <h3>Por favor registre sus tomas de presión</h3>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text>Mail</v-text>
          <v-text-field label="" solo requerido v-model="mail"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <v-text>Sístole</v-text>
          <v-text-field
            solo
            :rules="pasRules"
            suffix="mmHg"
            requerido
            v-model="pas"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Diástole</v-text>
          <v-text-field
            solo
            :rules="padRules"
            suffix="mmHg"
            v-model="pad"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="3">
          <v-text>Presion Arterial</v-text>
          <v-text-field disabled solo v-model="calcularPresion"></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Pulsaciones</v-text>
          <v-text-field
            solo
            :rules="pulsoRules"
            suffix="lpm"
            v-model="pulso"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <br /><br />
      <v-row>
        <v-col cols="2">
          <v-text>IMC</v-text>
          <v-text-field solo disabled v-model="imc"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text>Categoria de Peso</v-text>
          <v-text-field solo disabled v-model="categoria"></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-btn rounded color="primary" @click="guardarPresion()">Guardar</v-btn>
        <v-btn rounded color="primary" @click="consejos()">Consejos</v-btn>
        <br /><br />
      </v-row>
    </v-container>
  </body>
</template>

<script>
import { insertPresion, getPresion } from "../services/tomaPresion.Service";

export default {
  data() {
    return {
      pas: "",
      pad: "",
      pulso: "",
      presion: "",
      pasRules: [
        (value) => !!value || "Required.",
        (value) =>
          (value < 60 && value > 250) || "Valores validos entre 60 y 250",
      ],
      padRules: [
        (value) => !!value || "Required.",
        (value) =>
          (value < 30 && value > 120) || "Valores validos entre 30 y 120",
      ],
      pulsoRules: [
        (value) => !!value || "Required.",
        (value) =>
          (value < 60 && value > 90) || "Valores validos entre 60 y 90",
      ],
      headers: [
        {
          text: "Fecha",
          align: "start",
          sortable: false,
          value: "fecha",
        },
        { text: "Sístole", value: this.pas },
        { text: "Diástole", value: this.pad },
        { text: "Pulsaciones", value: this.pulso },
        { text: "Presión Arterial", value: this.arterial },
      ],
    };
  },
  computed: {
    calcularPresion: function () {
      let tpas = parseFloat(this.pas);
      let tpad = parseFloat(this.pad);
      let tomaPresion = "";
      if (tpas < tpad || tpas - tpad < 15) {
        tomaPresion = "Valores incorrectos";
        return tomaPresion;
      }
      if (tpas <= 90 && tpad <= 60) {
        tomaPresion = "Hipotensión";
      } else if (tpas > 90 && tpas < 120 && tpad > 60 && tpad < 80) {
        tomaPresion = "Normal";
      } else if (tpas > 119 && tpas < 130 && tpad < 80) {
        tomaPresion = "Elevada";
      } else if ((tpas > 129 && tpas < 140) || (tpad > 79 && tpad < 90)) {
        tomaPresion = "Etapa 1 de Hipertensión";
      } else if ((tpas > 139 && tpas < 181) || (tpad > 99 && tpas < 121)) {
        tomaPresion = "Etapa 2 de Hipertensión";
      } else if (tpas > 180 && tpad > 120) {
        tomaPresion = "Crisis Hipertensiva";
      }
      return tomaPresion;
    },
  },
  created() {
    console.log("Tiene mail: " + this.$route.params.mail);
    const mail = this.$route.params.mail;
    if (mail != undefined) {
      getPresion(mail)
        .then((response) => {
          const tomaPresion = response.data;
          this.mail = tomaPresion.mail;
          this.pas = tomaPresion.sistole;
          this.pad = tomaPresion.diastole;
          this.pulso = tomaPresion.pulso;
          this.calcularPresion = tomaPresion.presion;
        })
        .catch(() => console.log("Usuario sin registro de presiones"));
    }
  },
  methods: {
    guardarPresion() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.pas == undefined ||
        this.pas == "" ||
        this.pad == undefined ||
        this.pad == "" ||
        this.pulso == undefined ||
        this.pulso == ""
      ) {
        console.log("Error");
        return;
      }
      let request = null;
      const tomaPresion = {
        mail: this.mail,
        fecha: new Date(Date.now()),
        sistole: this.pas,
        diastole: this.pad,
        pulso: this.pulso,
        presion: this.calcularPresion,
      };
      console.log("Entro:", tomaPresion);
      request = insertPresion(tomaPresion);
      console.log(request);
      request
        .then((response) => console.log("Sale" + response))
        .catch(() => console.log("Error al actualizar presiones"));
    },
  },
};
</script>

<style>
h2 {
  padding: 60px 10px 10px 10px;
  text-align: left;
  font-size: 40px;
  font-family: monospace;
  color: white;
}
h3 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-size: 25px;
  font-family: monospace;
  color: white;
}
h4 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-size: 20px;
  font-family: monospace;
  color: white;
}
.v-picker__title {
  background-color: #6590fc;
}
</style>
