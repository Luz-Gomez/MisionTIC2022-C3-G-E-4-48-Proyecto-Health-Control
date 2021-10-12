<template>
  <v-card>
    <v-card-title>Inicio de Sesión</v-card-title>
    <v-card-text>
      <v-text-field
        label="Correo"
        prepend-icon="mdi-at"
        :rules="rulesMail"
        hide-details="auto"
        v-model="mail"
      ></v-text-field>

      <v-text-field
        label="Contraseña"
        prepend-icon="mdi-lock"
        :rules="rulesContraseña"
        hide-details="auto"
        v-model="contraseña"
        type="contraseña"
      ></v-text-field>

      <v-alert
        border="left"
        color="orange"
        type="error"
        dark
        v-model="showError"
        >{{ error }}</v-alert
      >
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn id="boton" color="primary" v-on:click="loginFunction()"
        >Ingresa</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { validarUsuario } from "../services/Login.Service";

export default {
  data() {
    return {
      mail: "",
      contraseña: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesMail: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      rulesContraseña: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      error: "",
    };
  },
  methods: {
    loginFunction() {
      validarUsuario(this.mail, this.contraseña)
        .then((respuesta) => {
          const usuario = respuesta.data;
          sessionStorage.setItem("mail", usuario.mail);
          sessionStorage.setItem("tipo", usuario.tipo);
          this.$emit("logged", undefined);
          window.location.reload();
        })
        .catch((err) => {
          console.log("error", err.respuesta);
          this.showError = true;
          this.error = err.respuesta.data.message;
        });
    },
  },
};
</script>

<style scoped>
</style>
