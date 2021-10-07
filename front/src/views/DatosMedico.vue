<template>
  <body>
    <v-container>
      <h2>Perfil del Médico</h2>
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
      <h4>Ingresa tu número de celular, para podernos comunicar contigo.</h4>
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
      <h4>Ingresa tus credenciales profesionales:</h4>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Institución donde labora"
            solo
            :rules="institucionRules"
            hide-details="auto"
            v-model="institucion"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Registro especial de acreditadores de salud y su insitución"
            solo
            :rules="regInstitucionRules"
            hide-details="auto"
            v-model="regInstitucion"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Tarjeta profesional como médico"
            solo
            :rules="tarjetaProfRules"
            hide-details="auto"
            v-model="tarjetaProf"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label="Confirmas que toda la información proporcionada es verdadera y podemos verificarla"
        type="checkbox"
        v-model="acepta"
        required
      ></v-checkbox>
      <v-checkbox
        :error-messages="errors"
        value="1"
        label="Quieres recibir notificaciones en tu correo sobre la actividad de tus pacientes"
        type="checkbox"
        v-model="alerta"
        required
      ></v-checkbox>
      <v-row align="center" justify="space-around">
        <v-btn rounded color="primary" @click="guardarMedico()">Guardar</v-btn>
        <br /><br />
      </v-row>
    </v-container>
  </body>
</template>

<script>
import {
  insertMedico,
  getMedico,
  updateMedico,
} from "../services/perfilMedico.Service";

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      celular: "",
      institucion: "",
      regInstitucion: "",
      tarjetaProf: "",
      nombreRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      apellidoRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      fechaRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length == 10) || "AAAA/MM/DD",
      ],
      celularRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length == 10) || "##########",
      ],
      institucionRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
      regInstitucionRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
      tarjetaProfRules: [
        (value) => !!value || "Requerido",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
    };
  },

  created() {
    console.log("Tiene mail: " + this.$route.params.mail);
    const mail = this.$route.params.mail;
    if (mail != undefined) {
      getMedico(mail)
        .then((response) => {
          const perfilMedico = response.data;
          this.mail = perfilMedico.mail;
          this.nombre = perfilMedico.nombre;
          this.apellido = perfilMedico.apellido;
          this.celular = perfilMedico.celular;
          this.institucion = perfilMedico.institucion;
          this.regInstitucion = perfilMedico.regInstitucion;
          this.tarjetaProf = perfilMedico.tarjetaProf;
          this.acepta = perfilMedico.acepta;
          this.alerta = perfilMedico.alerta;

          this.isEdit = true;
        })
        .catch(() => console.log("Medico sin perfil registrado"));
    }
  },
  methods: {
    guardarMedico() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == ""
      ) {
        console.log("Error");
        return;
      }
      let request = null;
      const perfilMedico = {
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        celular: this.celular,
        institucion: this.institucion,
        regInstitucion: this.regInstitucion,
        tarjetaProf: this.tarjetaProf,
        acepta: this.acepta,
        alerta: this.alerta,
      };

      console.log("Entro:", perfilMedico);
      request = insertMedico(perfilMedico);
      console.log(request);
      request
        .then((response) => console.log("Sale" + response))
        .catch(() => console.log("Error al actualizar medico"));
    },
    actualizar() {
      if (
        this.mail == undefined ||
        this.mail == "" ||
        this.nombre == undefined ||
        this.nombre == "" ||
        this.apellido == undefined ||
        this.apellido == ""
      ) {
        console.log("Ingrese los campos obligatorios");
        return;
      }

      const perfilMedico = {
        mail: this.mail,
        nombre: this.nombre,
        apellido: this.apellido,
        celular: this.celular,
        institucion: this.institucion,
        regInstitucion: this.regInstitucion,
        tarjetaProf: this.tarjetaProf,
        acepta: this.acepta,
        alerta: this.alerta,
      };
      updateMedico(this.mail, perfilMedico)
        .then(() => console.log("Se ha actualizado el perfil de " + this.mail))
        .catch(() => console.log("Error al actualizar medico"));
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
</style>
