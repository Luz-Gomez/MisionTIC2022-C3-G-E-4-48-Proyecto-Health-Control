<template>
  <v-card>
    <v-card-text>
    <v-text-field
      label="Correo"
      prepend-icon="mdi-at"
      :rules="rulesEmail"
      hide-details="auto"
      v-model="email"
    ></v-text-field>

    <v-text-field
      label="Contraseña"
      prepend-icon="mdi-lock"
      :rules="rulesPassword"
      hide-details="auto"
      v-model="password"
      type="password"
    ></v-text-field>

    <v-alert border= "left" color= "orange" dense outlined type="error" v-model="showError">{{ error }}</v-alert> 
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn id="boton" color="primary" v-on:click="loginFunction()">Ingresa</v-btn>
      </v-card-actions>
  </v-card>
  
</template>

<script>
import {validarUsuario} from "../services/Login.Service";

export default {
  data() {
    return {
      email: "",
      password: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      rulesEmail: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      rulesPassword: [
        (value) => !!value || "Requerido.",
        (value) => value && value.length <= 50,
      ],
      showError: false,
      error: ""
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