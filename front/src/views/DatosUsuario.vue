<template>
  <body>
    <v-container>
      <h2>Perfil del Usuario</h2>
      <h4>
        Completa la informacion de tu perfil y disfruta de nuestros servicios
      </h4>
      <v-row>
        <v-col cols="10" sm="8">
          <v-text-field
            label="Mail"
            filled
            hide-details="auto"
            background-color="white"
            disabled
            v-model="mail"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre"
            filled
            hide-details="auto"
            background-color="white"
            :rules="nombreRules"
            v-model="nombre"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido"
            filled
            hide-details="auto"
            background-color="white"
            :rules="nombreRules"
            v-model="apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" sm="8">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fechaNacimiento"
                label="Fecha de Nacimiento"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="fechaNacimiento"
              locale="es-CO"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1920-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <h4>Los datos a continuacion son opcionales</h4>
      <h5>
        Si desea que la aplicacion calcule su IMC y Categoria de peso diligencie
        la siguiente información
      </h5>
      <v-row>
        <v-col cols="2" sm="2">
          <v-text>Estatura</v-text>
          <v-text-field
            solo
            value="0.00"
            suffix="mts"
            v-model="estatura"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2">
          <v-text>Peso</v-text>
          <v-text-field
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
            label=""
            mask="###.##"
            v-model="calcularIMC"
          ></v-text-field>
        </v-col>
        <v-col cols="2" sm="3">
          <v-text>Categoria de Peso</v-text>
          <v-text-field
            disabled
            solo
            label=""
            v-model="calcularCategoria"
          ></v-text-field>
        </v-col>
      </v-row>
      <h5>
        Si desea que podamos contactarnos con usted, favor indiquenos un numero
        de celular
      </h5>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Numero celular"
            filled
            hide-details="auto"
            background-color="white"
            :rules="celularRules"
            v-model="celular"
          ></v-text-field>
        </v-col>
      </v-row>
      <h5>
        Si desea que su medico pueda revisar sus datos de presion y peso,
        indiquenos nombre y apellido
      </h5>
      <v-row>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Nombre Medico tratante"
            filled
            hide-details="auto"
            background-color="white"
            :rules="medicoRules"
            v-model="nomMedico"
          ></v-text-field>
        </v-col>
        <v-col cols="10" sm="4">
          <v-text-field
            label="Apellido Medico tratante"
            filled
            hide-details="auto"
            background-color="white"
            :rules="medicoRules"
            v-model="apeMedico"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
        label=" Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"
        type="checkbox"
        v-model="alerta"
        required
      ></v-checkbox>
      <v-checkbox
        label=" Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero no fuera de esta pagina"
        type="checkbox"
        v-model="visibilidad"
        required
      ></v-checkbox>
      <v-row align="center" justify="space-around">
        <v-btn rounded color="#FFBE5E" dark @click="guardarUsuario()"
          >Guardar</v-btn
        >
        <v-btn rounded color="#FFBE5E" dark @click="actualizar()"
          >Actualizar</v-btn
        >
        <v-btn to="/Consejos" rounded color="#FFBE5E" dark @click="consejos()"
          >Consejos</v-btn
        >
        <v-btn to="/TomaPresion" rounded color="#FFBE5E" dark
          >Toma Presión</v-btn
        >
        <v-btn to="/" rounded color="#FFBE5E" dark>Regresar</v-btn>
        <br /><br />
      </v-row> </v-container
    ><br />
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
      activePicker: null,
      fechaNacimiento: null,
      menu: false,
      peso: "",
      estatura: "",
      celular: "",
      nomMedico: "",
      apeMedico: "",
      categoria: "",
      imc: "###.##'",
      visibilidad: false,
      alerta: false,

      nombreRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 3) || "Mínimo 3 characters",
      ],
      celularRules: [(value) => (value && value.length == 10) || "#########"],
      medicoRules: [
        (value) => (value && value.length >= 3) || "Mínimo 3 characters",
      ],

      isEdit: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  computed: {
    calcularIMC: function () {
      let indice = parseFloat(this.peso / this.estatura ** 2);
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
    const mail = sessionStorage.getItem("mail");
    if (mail != undefined) {
      getPerfil(mail)
        .then((response) => {
          const perfilUsuario = response.data;
          this.mail = perfilUsuario.mail;
          this.nombre = perfilUsuario.nombre;
          this.apellido = perfilUsuario.apellido;
          this.fechaNacimiento = perfilUsuario.fechaNacimiento;
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
    this.mail = mail;
  },
  methods: {
    guardarUsuario() {
      const mail = sessionStorage.getItem("mail");
      if (
        mail == undefined ||
        mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == "" ||
        this.fechaNacimiento == undefined ||
        this.fechaNacimiento == ""
      ) {
        console.error("Registre Datos obligatorios");
        return;
      }
      let request = null;
      const perfilUsuario = {
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
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
        .then((response) => console.log(response), window.location.reload())
        .catch((err) => console.error(err));
    },
    actualizar() {
      const mail = sessionStorage.getItem("mail");
      if (
        mail == undefined ||
        mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == "" ||
        this.fechaNacimiento == undefined ||
        this.fechaNacimiento == ""
      ) {
        console.log("Ingrese los campos obligatorios");
        return;
      }

      const perfilUsuario = {
        estatura: this.estatura,
        peso: this.peso,
        celular: this.celular,
        nombreMedico: this.nomMedico,
        apellidoMedico: this.apeMedico,
        alerta: this.alerta,
        visibilidad: this.visibilidad,
        imc: this.calcularIMC,
        categoriaPeso: this.categoriaPeso,
      };
      updatePerfil(mail, perfilUsuario)
        .then((response) => console.log(response), window.location.reload())
        .catch((err) => console.error(err));
    },
    save(fechaNacimiento) {
      this.$refs.menu.save(fechaNacimiento);
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
h4 {
  padding: 10px 10px 10px 10px;
  text-align: left;
  font-size: 25px;
  font-family: monospace;
  color: white;
}
h5 {
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
