<template>
  <body>
    <v-container>
      <h2>Toma Presión Arterial</h2>
      <h3>Por favor registre sus tomas de presión</h3>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text>Mail</v-text>
          <v-text-field disabled solo required v-model="mail"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <v-text>Sístole</v-text>
          <v-text-field
            solo
            :rules="pasRules"
            suffix="mmHg"
            required
            value="pas"
            v-model="pas"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Diástole</v-text>
          <v-text-field
            solo
            :rules="padRules"
            suffix="mmHg"
            required
            value="pad"
            v-model="pad"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Pulsaciones</v-text>
          <v-text-field
            solo
            :rules="pulsoRules"
            suffix="lpm"
            required
            value="pulso"
            v-model="pulso"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="3">
          <v-text>Presion Arterial</v-text>
          <v-text-field disabled solo v-model="calcularPresion"></v-text-field>
        </v-col>
      </v-row>
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
import { getPelfil } from "../services/perfilUsuario.Service";

export default {
  data() {
    return {
      pas: "",
      pad: "",
      pulso: "",
      presion: "",
      imc: "",
      categoria: "",
      pasRules: [
        (value) => !!value || "Requerido.",
        (value) => (value < 60 && value > 250) || "Valores validos de 60 a 250",
      ],
      padRules: [
        (value) => !!value || "Requerido.",
        (value) => (value < 30 && value > 120) || "Valores validos de 30 a 120",
      ],
      pulsoRules: [
        (value) => !!value || "Requerido.",
        (value) => (value < 60 && value > 90) || "Valores validos de 60 a 90",
      ],
    };
  },
  computed: {
    calcularPresion: function () {
      let tpas = parseFloat(this.pas);
      let tpad = parseFloat(this.pad);
      let tpresion = "";
      if (tpas < tpad || tpas - tpad < 15) {
        tpresion = "Valores incorrectos";
        return tpresion;
      }
      if (tpas <= 90 && tpad <= 60) {
        tpresion = "Hipotensión";
      } else if (tpas > 90 && tpas < 121 && tpad > 60 && tpad < 81) {
        tpresion = "Normal";
      } else if (tpas > 120 && tpas < 130 && tpad < 81) {
        tpresion = "Elevada";
      } else if ((tpas > 129 && tpas < 140) || (tpad > 79 && tpad < 90)) {
        tpresion = "Etapa 1 de Hipertensión";
      } else if ((tpas > 139 && tpas < 181) || (tpad > 99 && tpas < 121)) {
        tpresion = "Etapa 2 de Hipertensión";
      } else if (tpas > 180 && tpad > 120) {
        tpresion = "Crisis Hipertensiva";
      }
      return tpresion;
    },
  },
  created() {
    const mail = sessionStorage.getItem("mail");
    if (mail != undefined) {
      getPresion(mail)
        .then((response) => {
          this.tomasPresion = response.data;
        })
        .catch((err) => console.error(err));
    }
    this.mail = mail;

    if (mail != undefined) {
      getPelfil(mail)
        .then((response) => {
          const datosPerfil = response.data;
          this.imc = datosPerfil.imc;
          this.categoria = datosPerfil.categoriaPeso;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardarPresion() {
      const mail = sessionStorage.getItem("mail");
      if (
        mail == undefined ||
        mail == "" ||
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
      let fecha = new Date(Date.now());

      const tomaPresion = {
        mail: this.mail,
        fecha: fecha,
        sistole: this.pas,
        diastole: this.pad,
        pulso: this.pulso,
        presion: this.calcularPresion,
      };
      request = insertPresion(tomaPresion);
      console.log(request);
      request
        .then(() => this.$router.push("/ConsultaTomaPresion"))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scope>
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
