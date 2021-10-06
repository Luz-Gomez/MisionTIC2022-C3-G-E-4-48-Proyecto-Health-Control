<template>
  <body>
    <v-container>
      <h2>Toma Presión Arterial</h2>
      <h3>Por favor registre sus tomas de presión</h3>
      <v-row>
        <v-col cols="8">
          <v-text>Mail</v-text>
          <v-text-field label="" solo requerido v-model="mail"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
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
        <v-col cols="2">
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
        <v-col cols="2">
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
        <v-col cols="3">
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
        { text: "Sístole", value: "pas" },
        { text: "Diástole", value: "pad" },
        { text: "Pulsaciones", value: "pulso" },
        { text: "Presión Arterial", value: "Normal" },
      ],
    };
  },
  computed: {
    calcularPresionArterial() {
      let tomaPresion = "";
      if (this.pas <= 90 && this.pad <= 60) {
        tomaPresion = "Hipotensión";
      } else if (
        this.pas > 90 &&
        this.pas < 120 &&
        this.pad > 60 &&
        this.pas < 80
      ) {
        tomaPresion = "Normal";
      } else if (this.pas > 119 && this.pas < 130 && this.pad < 80) {
        tomaPresion = "Elevada";
      } else if (
        this.pas > 129 &&
        this.pas < 140 &&
        this.pad > 79 &&
        this.pas < 90
      ) {
        tomaPresion = "Etapa 1 de Hipertensión";
      } else if (
        this.pas > 139 &&
        this.pas < 181 &&
        this.pad > 99 &&
        this.pas < 121
      ) {
        tomaPresion = "Etapa 2 de Hipertensión";
      } else if (this.pas > 180 && this.pad > 120) {
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
          this.arterial = tomaPresion.presion;
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
