<template>
  <body>
    <v-container>
      <h2>Perfil del Usuario</h2>
      <h3>
        Completa la informacion de tu perfil y disfruta de nuestros servicios
      </h3>
      <v-row>
        <v-col cols="10" sm="8">
          <v-text-field
            label="mail"
            solo
            hide-details="auto"
            v-model="mail"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre"
            solo
            :rules="nombreRules"
            hide-details="auto"
            v-model="nombre"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido"
            solo
            :rules="nombreRules"
            hide-details="auto"
            v-model="apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" sm="8">
          <v-date-picker v-model="picker" locale="es-CO" full-width>
          </v-date-picker>
        </v-col>
      </v-row>

      <h3>Los datos a continuacion son opcionales</h3>
      <h4>
        Si desea que la aplicacion calcule su IMC y Categoria de peso diligencie
        la siguiente información
      </h4>
      <v-row>
        <v-col cols="2" sm="2">
          <v-text>Estatura</v-text>
          <v-text-field
            label=""
            solo
            value="0.00"
            suffix="mts"
            v-model="estatura"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Peso</v-text>
          <v-text-field
            label=""
            solo
            value="00.0"
            suffix="Kgr"
            v-model="peso"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="1">
          <v-text>IMC</v-text>
          <v-text-field
            disabled
            solo
            value="00.0"
            v-model="calcularIMC"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="3">
          <v-text>Categoria de Peso</v-text>
          <v-text-field
            disabled
            solo
            value=""
            v-model="calcularCategoria"
          ></v-text-field>
        </v-col>
      </v-row>
      <h4>
        Si desea que podamos contactarnos con usted, favor indiquenos un numero
        de celular
      </h4>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Numero celular"
            solo
            :rules="celularRules"
            hide-details="auto"
            v-model="celular"
          ></v-text-field>
        </v-col>
      </v-row>
      <h4>
        Si desea que su medico pueda revisar sus datos de presion y peso,
        indiquenos nombre y apellido
      </h4>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre Medico tratante"
            solo
            :rules="medicoRulers"
            hide-details="auto"
            v-model="nomMedico"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido Medico tratante"
            solo
            :rules="medicoRulers"
            hide-details="auto"
            v-model="apeMedico"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label=" Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"
        type="checkbox"
        v-model="alerta"
        required
      ></v-checkbox>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label=" Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero no fuera de esta pagina"
        type="checkbox"
        v-model="visibilidad"
        required
      ></v-checkbox>
      <v-row align="center" justify="space-around">
        <v-btn rounded color="primary" @click="guardarUsuario()">Guardar</v-btn>
        <v-btn rounded color="primary" @click="actualizar()">Actualizar</v-btn>
        <br /><br />
      </v-row>
    </v-container>
  </body>
</template>

<script>
import {
  insertPerfil,
  getPerfil,
  updatePerfil,
} from "../services/perfilUsuario.Service";

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      peso: "",
      estatura: "",
      celular: "",
      nomMedico: "",
      apeMedico: "",
      categoria: "",
      imc: "",

      nombreRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Mínimo 3 characters",
      ],
      celularRules: [(value) => (value && value.length == 10) || "#########"],
      medicoRules: [
        (value) => (value && value.length >= 3) || "Mínimo 3 characters",
      ],
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      isEdit: false,
    };
  },
  computed: {
    calcularIMC: function () {
      let indice = parseFloat(this.peso / this.estatura ** 2);
      console.log(indice);
      return indice;
    },
    calcularCategoria: function () {
      let indice = parseFloat(this.peso / this.estatura ** 2);
      let estado = "";
      if (indice < 18.5) {
        estado = "Bajo peso";
      } else if (indice >= 18.5 && indice < 25) {
        estado = "Peso Normal";
      } else if (indice >= 25 && indice < 30) {
        estado = "Sobrepeso";
      } else if (indice >= 30 && indice < 40) {
        estado = "Obesidad";
      } else if (indice >= 40) {
        estado = "Obesidad mórbida";
      }
      console.log(estado + " " + indice);
      return estado;
    },
  },
  created() {
    console.log("Tiene mail: " + this.$route.params.mail);
    const mail = this.$route.params.mail;
    if (mail != undefined) {
      getPerfil(mail)
        .then((response) => {
          const perfilUsuario = response.data;
          this.mail = perfilUsuario.mail;
          this.nombre = perfilUsuario.nombre;
          this.apellido = perfilUsuario.apellido;
          this.picker = perfilUsuario.fechaNacimiento;
          this.estatura = perfilUsuario.estatura;
          this.peso = perfilUsuario.peso;
          this.celular = perfilUsuario.celular;
          this.nomMedico = perfilUsuario.nombreMedico;
          this.apeMedico = perfilUsuario.apellidoMedico;
          this.alerta = perfilUsuario.alerta;
          this.visibilidad = perfilUsuario.visibilidad;
          this.calcularIMC = perfilUsuario.imc;
          this.categoriaPeso = perfilUsuario.categoriaPeso;

          this.isEdit = true;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardarUsuario() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == "" ||
        this.picker == undefined ||
        this.picker == ""
      ) {
        console.error("Registre Datos obligatorios");
        return;
      }
      let request = null;
      const perfilUsuario = {
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.picker,
        estatura: this.estatura,
        peso: this.peso,
        celular: this.celular,
        nombreMedico: this.nomMedico,
        apellidoMedico: this.apeMedico,
        alerta: this.alerta,
        visibilidad: this.visibilidad,
        imc: this.calcularIMC,
        categoriaPeso: this.calcularCategoria,
      };

      request = insertPerfil(perfilUsuario);
      request
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
    actualizar() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == "" ||
        this.picker == undefined ||
        this.picker == ""
      ) {
        console.log("Ingrese los campos obligatorios");
        return;
      }

      const perfilUsuario = {
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.picker,
        estatura: this.estatura,
        peso: this.peso,
        celular: this.celular,
        nombreMedico: this.nomMedico,
        apellidoMedico: this.apeMedico,
        alerta: this.alerta,
        visibilidad: this.visibilidad,
        imc: this.imc,
        categoriaPeso: this.categoriaPeso,
      };
      updatePerfil(this.mail, perfilUsuario)
        .then(() => console.log("Se ha actualizado el perfil de " + this.mail))
        .catch((err) => console.error(err));
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
